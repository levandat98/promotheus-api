import { Factory } from './factory';
import User from '../models/User';
import Serie from '../models/Serie';
import Episode from '../models/Episode';
import Genre from '../models/Genre';
import GenreSeries from '../models/GenreSeries';

exports.seed = async knex => {
  // deleting
  await Promise.all([knex('users').del()]);
  await Promise.all([knex('series').del()]);
  await Promise.all([knex('episodes').del()]);

  // seeding
  await User.query().insertGraph(await Factory.users(100));
  await Serie.query().insertGraph(await Factory.series(100));
  await Episode.query().insertGraph(await Factory.episode());
  await Genre.query().insertGraph(await Factory.genres());
  await GenreSeries.query().insertGraph(await Factory.genreSeries());
};
