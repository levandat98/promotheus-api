import faker from 'faker';
import _ from 'lodash';
import bcrypt from '../../../services/Bcrypt';

class Sample {
  createUsers = role => ({
    fullName: faker.name.findName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123456'),
    role,
    avatar:
      'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.18169-9/16386918_405950986409159_6630163381916049827_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PK7XPWJxWN8AX-r3qg8&tn=DxFuXgC0zSZlfkDA&_nc_ht=scontent.fsgn2-6.fna&oh=4491ae8cd7d72d2550dfd874686bc76c&oe=61B761A3'
  });

  createSeries = creatorId => ({
    name: faker.commerce.productName(),
    description: faker.lorem.lines(2),
    ratings: _.random(1.0, 5.0),
    ratingCount: _.random(1000, 10000),
    creatorId
  });

  createEpisodes = (creatorId, serieId) => ({
    name: faker.commerce.productName(),
    description: faker.lorem.lines(2),
    releaseDate: faker.date.past(),
    creatorId,
    serieId
  });

  createGenreSeries = (serieId, genreId) => ({
    genreId,
    serieId
  });
}

export default new Sample();
