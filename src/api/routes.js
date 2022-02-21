import _flattenDeep from 'lodash/flattenDeep';
import UserRoutes from './modules/user/routes';
import AuthRoutes from './modules/auth/routes';
import EpisodeRoutes from './modules/episode/routes';
import SeriesRoutes from './modules/series/routes';
import CreatorRoutes from './modules/creator/routes';

export const bind = server => {
  const routes = [
    new AuthRoutes(server),
    new UserRoutes(server),
    new EpisodeRoutes(server),
    new SeriesRoutes(server),
    new CreatorRoutes(server)
  ];
  return _flattenDeep(routes);
};
