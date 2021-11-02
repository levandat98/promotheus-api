import faker from 'faker';
import bcrypt from '../../../services/Bcrypt';

class Sample {
  createUsers = role => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123456'),
    role
  });
}

export default new Sample();
