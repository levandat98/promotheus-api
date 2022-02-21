import BaseModel from './BaseModel';
import Episode from './Episode';

export default class Favorite extends BaseModel {
  static get tableName() {
    return 'favorites';
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
          from: 'episodes.id',
          to: 'favorites.serieId'
        }
      }
    };
  }
}
