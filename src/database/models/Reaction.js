import BaseModel from './BaseModel';

export default class Reaction extends BaseModel {
  static get tableName() {
    return 'reactions';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get modifiers() {
    return {};
  }

  static get relationMappings() {
    return {};
  }
}
