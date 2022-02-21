import Repository from '../../core/Repository';
import User from '../../../database/models/User';
import Roles from '../../../constants/roles';

export default class CreatorRepository extends Repository {
  static instance;

  static getRepository() {
    if (!CreatorRepository.instance) {
      CreatorRepository.instance = new CreatorRepository(User);
    }
    return CreatorRepository.instance;
  }

  getById(id, columns = ['*'], relationships = []) {
    const query = this.model
      .query()
      .withSoftDelete()
      .findById(id)
      .where({ role: Roles.USER })
      .select(columns)
      .withGraphFetched('series')
      .withGraphFetched('episodes')
      .modifyGraph('episodes', episodes => {
        episodes
          .withSoftDelete()
          .select('*')
          .offset(0)
          .limit(10);
      })
      .modifyGraph('series', serie => {
        serie
          .withSoftDelete()
          .select('*')
          .offset(0)
          .limit(2)
          .withGraphFetched('episodes')
          .modifyGraph('episodes', episodes => {
            episodes
              .withSoftDelete()
              .select('*')
              .offset(0)
              .limit(6);
          });
      });
    return this.linkRelationships(query, relationships);
  }
}
