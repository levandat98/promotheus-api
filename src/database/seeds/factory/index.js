import _ from 'lodash';
import faker from 'faker';
import sample from './samples';
import bcrypt from '../../../services/Bcrypt';
import ROLES from '../../../constants/roles';
import User from '../../models/User';
import Serie from '../../models/Serie';
import Genre from '../../models/Genre';
import Episode from '../../models/Episode';
import { reactionType } from '../../../constants/common';

class Factory {
  static users(number) {
    const data = [];
    data.push(
      {
        fullName: 'admin',
        email: 'levandat17tclc2@gmail.com',
        password: bcrypt.hashSync('123456'),
        role: ROLES.ADMIN,
        avatar:
          'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.18169-9/16386918_405950986409159_6630163381916049827_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PK7XPWJxWN8AX-r3qg8&tn=DxFuXgC0zSZlfkDA&_nc_ht=scontent.fsgn2-6.fna&oh=4491ae8cd7d72d2550dfd874686bc76c&oe=61B761A3'
      },
      {
        fullName: 'user',
        email: 'user@gmail.com',
        password: bcrypt.hashSync('123456'),
        role: ROLES.USER,
        avatar:
          'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.18169-9/16386918_405950986409159_6630163381916049827_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PK7XPWJxWN8AX-r3qg8&tn=DxFuXgC0zSZlfkDA&_nc_ht=scontent.fsgn2-6.fna&oh=4491ae8cd7d72d2550dfd874686bc76c&oe=61B761A3'
      }
    );

    for (let i = 0; i < number - 1; i += 1) {
      const role = _.sample([...Object.values(ROLES)]);
      data.push(sample.createUsers(role));
    }
    return data;
  }

  static async series(number) {
    const data = [];
    const creatorIds = (
      await User.query()
        .where({
          role: ROLES.USER
        })
        .select('id')
    ).map(x => x.id);
    for (let i = 0; i < number; i += 1) {
      const creatorId = _.sample(creatorIds);
      data.push(sample.createSeries(creatorId));
    }
    return data;
  }

  static async episode() {
    const data = [];
    const series = await Serie.query().select(['id', 'creatorId']);
    for (let i = 0; i < series.length; i += 1) {
      const number = _.random(4, 8);
      const serieId = _.sample(series);
      for (let n = 0; n < number; n += 1) {
        data.push(sample.createEpisodes(series[i].creatorId, series[i].id));
        _.remove(series, x => x.id === serieId);
      }
    }
    return data;
  }

  static async genres() {
    return [
      {
        name: 'stories',
        description: faker.lorem.lines(2)
      },
      {
        name: 'games',
        description: faker.lorem.lines(2)
      },
      {
        name: 'technology',
        description: faker.lorem.lines(2)
      },
      {
        name: 'education',
        description: faker.lorem.lines(2)
      },
      {
        name: 'sports',
        description: faker.lorem.lines(2)
      },
      {
        name: 'comedy',
        description: faker.lorem.lines(2)
      }
    ];
  }

  static async genreSeries() {
    const data = [];
    const series = (await Serie.query().select(['id'])).map(x => x.id);
    const genres = (await Genre.query().select(['id'])).map(x => x.id);
    for (let i = 0; i < series.length; i += 1) {
      const number = _.random(2, 4);
      for (let n = 0; n < number; n += 1) {
        data.push(sample.createGenreSeries(series[i], _.sample(genres)));
      }
    }
    return data;
  }

  static async Queue() {
    const data = [];
    const users = (await User.query().select(['id'])).map(x => x.id);
    const episodes = (await Episode.query().select(['id'])).map(x => x.id);
    for (let i = 0; i < users.length; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        data.push({
          userId: users[i],
          episodeId: _.sample(episodes)
        });
      }
    }
    return data;
  }

  static async Favorites() {
    const data = [];
    const users = (await User.query().select(['id'])).map(x => x.id);
    const episodes = (await Episode.query().select(['id'])).map(x => x.id);
    for (let i = 0; i < users.length; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        data.push({
          userId: users[i],
          episodeId: _.sample(episodes)
        });
      }
    }
    return data;
  }

  static async Reaction() {
    const data = [];
    const users = (await User.query().select(['id'])).map(x => x.id);
    const episodes = (await Episode.query().select(['id'])).map(x => x.id);
    for (let i = 0; i < users.length; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        data.push({
          userId: users[i],
          episodeId: _.sample(episodes),
          type: _.sample([...Object.values(reactionType)])
        });
      }
    }
    return data;
  }
}

export { Factory };
