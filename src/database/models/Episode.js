/* eslint-disable import/no-cycle */
import BaseModel from './BaseModel';
import User from './User';
import Serie from './Serie';

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
    return {
      creator: {
        relation: BaseModel.HasOneRelation,
        modelClass: User,
        join: {
          from: 'episodes.creatorId',
          to: 'users.id'
        }
      },
      serie: {
        relation: BaseModel.HasOneRelation,
        modelClass: Serie,
        join: {
          from: 'episodes.serieId',
          to: 'series.id'
        }
      }
    };
  }
}
