import BaseModel from './BaseModel';

export default class Genres extends BaseModel {
  static get tableName() {
    return 'genres';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get modifiers() {
    return {
      defaultSelect(builder) {
        builder.select(['id', 'name', 'description']);
      }
    };
  }

  static get relationMappings() {
    return {};
  }
}
