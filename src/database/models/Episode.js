import BaseModel from './BaseModel';
// eslint-disable-next-line import/no-cycle
import User from './User';

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
      }
    };
  }
}
