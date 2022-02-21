import AWS from 'aws-sdk';
import URL from 'url';

export default class S3 {
  constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.S3_REGION
    });
    this.s3 = new AWS.S3();
    this.bucket = process.env.S3_BUCKET_NAME;
    this.signedUrlExpireSeconds = parseInt(process.env.S3_SIGNED_URL_TIMEOUT || 10, 10);
  }

  getUrlStorage(key, type) {
    return this.s3.getSignedUrl('putObject', {
      Bucket: this.bucket,
      Key: key,
      ContentType: type,
      ACL: 'public-read',
      Expires: this.signedUrlExpireSeconds
    });
  }

  upload(body, name, type) {
    const params = {
      Body: body,
      Bucket: this.bucket,
      ContentType: type,
      Key: name,
      ACL: 'public-read'
    };

    return new Promise((resolve, reject) => {
      this.s3.upload(params, {}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  delete(urls) {
    urls = urls.map(e => ({ Key: URL.parse(e).pathname.slice(1) }));
    return new Promise((resolve, reject) =>
      this.s3.deleteObjects(
        {
          Bucket: process.env.S3_BUCKET_NAME,
          Delete: {
            Objects: urls
          }
        },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      )
    );
  }
}
