import BaseModel from './BaseModel';
import Lesson from './Episode';

export default class Serie extends BaseModel {
  static get tableName() {
    return 'series';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get modifiers() {
    return {
      defaultSelect(builder) {
        builder.select(['id', 'name', 'description', 'estimateTime']);
      }
    };
  }

  static get relationMappings() {
    return {
      episodes: {
        relation: BaseModel.HasManyRelation,
        modelClass: Lesson,
        join: {
          from: 'series.id',
          to: 'episodes.serieId'
        }
      }
    };
  }
}
