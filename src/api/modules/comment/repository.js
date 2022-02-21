import _ from 'lodash';
import Repository from '../../core/Repository';
import Comment from '../../../database/models/Comment';

export default class CommentRepository extends Repository {
  static instance;

  static getRepository() {
    if (!CommentRepository.instance) {
      CommentRepository.instance = new CommentRepository(Comment);
    }
    return CommentRepository.instance;
  }

  getCommentOfEpisode(episodeId) {
    return this.model
      .query()
      .where({ episodeId })
      .withGraphFetched('user');
  }
}
