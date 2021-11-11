import BaseModel from './BaseModel';

export default class Episode extends BaseModel {
  static get tableName() {
    return 'episodes';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get modifiers() {
    return {
      defaultSelect(builder) {
        builder.select(['id', 'description', 'estimateTime', 'url']);
      }
    };
  }

  static get relationMappings() {
    return {};
  }
}
