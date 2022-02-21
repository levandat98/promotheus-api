import BaseModel from './BaseModel';
import Episode from './Episode';

export default class Queue extends BaseModel {
  static get tableName() {
    return 'queues';
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get modifiers() {
    return {};
  }

  static get relationMappings() {
    return {
      episodes: {
        relation: BaseModel.HasOneRelation,
        modelClass: Episode,
        join: {
          from: 'queues.id',
          to: 'episodes.serieId'
        }
      }
    };
  }
}
