import slugify from 'slugify';
import moment from 'moment';
import path from 'path';
import URL from 'url';
import Service from '../../core/Service';
import S3 from '../../../services/S3';

export default class MediaService extends Service {
  constructor() {
    super();
    this.s3 = new S3();
  }

  async uploadStorage(data) {
    const result = data.map(file => {
      const { type, fileName, folderPrefix } = file;
      const { ext } = path.parse(fileName);
      let { name } = path.parse(fileName);
      name = `${slugify(name, { lower: true })}-${moment().format('YYYYMMDDHHmmssSS')}`;
      let link;
      if (!folderPrefix) {
        link = this.s3.getUrlStorage(`${name}${ext}`, type);
      } else {
        link = this.s3.getUrlStorage(`${folderPrefix}/${name}${ext}`, type);
      }
      return { link, filePath: URL.parse(link.split('?')[0]).pathname };
    });
    return result;
  }

  async deleteStorage(data) {
    return this.s3.delete(data);
  }
}
