import BaseModel from './BaseModel';
import Lesson from './Episode';

export default class GenreSerie extends BaseModel {
  static get tableName() {
    return 'genre_series';
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
