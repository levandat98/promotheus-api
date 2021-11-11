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
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
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
    audioLength: _.random(60,1000),
    img: "https://picsum.photos/500/500",
    cover: "https://picsum.photos/500/500",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
    url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
    creatorId,
    serieId
  });

  createGenreSeries = (serieId, genreId) => ({
    genreId,
    serieId
  });
}

export default new Sample();
