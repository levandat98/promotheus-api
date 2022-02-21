import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      }
    },
    timestamps: true
  }
);

UserSchema.pre('save', async function(next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await Bcrypt.hash(user.password);
  }

  next();
});

UserSchema.loadClass(BaseModel);

export default mongoose.model('users', UserSchema);
