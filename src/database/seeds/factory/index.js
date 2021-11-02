import sample from './samples';
import bcrypt from '../../../services/Bcrypt';
import roles from '../../../constants/roles';

class Factory {
  static users(number) {
    const data = [];
    data.push({
      name: 'Dat Le Van',
      email: 'levandat17tclc2@gamil.com',
      password: bcrypt.hashSync('123456'),
      role: roles.ADMIN
    });

    for (let i = 0; i < number - 1; i += 1) {
      data.push(sample.createUsers(roles.USER));
    }
    return data;
  }
}

export { Factory };
