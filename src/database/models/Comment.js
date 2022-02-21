import BaseModel from './BaseModel';
import User from './User';

export default class Comment extends BaseModel {
  static get tableName() {
    return 'comments';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get modifiers() {
    return {};
  }

  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.HasOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'comments.userId'
        }
      }
    };
  }
}
