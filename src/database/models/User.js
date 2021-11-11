import BaseModel from './BaseModel';
import Series from './Serie';

export default class User extends BaseModel {
  static $hidden = ['password'];

  static get tableName() {
    return 'users';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      series: {
        relation: BaseModel.HasManyRelation,
        modelClass: Series,
        join: {
          from: 'users.id',
          to: 'series.creatorId'
        }
      },
      episodes: {
        relation: BaseModel.HasManyRelation,
        modelClass: Series,
        join: {
          from: 'users.id',
          to: 'series.creatorId'
        }
      }
    };
  }
}
