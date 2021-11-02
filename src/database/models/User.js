import BaseModel from './BaseModel';

export default class User extends BaseModel {
  static $hidden = ['password'];

  static get tableName() {
    return 'users';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {};
  }
}
