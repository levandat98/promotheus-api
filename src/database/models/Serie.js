/* eslint-disable import/no-cycle */
import BaseModel from './BaseModel';
import Episode from './Episode';
import User from './User';

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
        modelClass: Episode,
        join: {
          from: 'series.id',
          to: 'episodes.serieId'
        }
      },
      creator: {
        relation: BaseModel.HasOneRelation,
        modelClass: User,
        join: {
          from: 'series.creatorId',
          to: 'users.id'
        }
      }
    };
  }
}
