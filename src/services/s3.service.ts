import { S3 } from 'aws-sdk';
import {
  DeleteObjectOutput,
  DeleteObjectRequest,
  GetObjectOutput,
  GetObjectRequest,
  PutObjectOutput,
  PutObjectRequest,
} from 'aws-sdk/clients/s3';
// const { getEnv } = require('../helper/environment');

export class YandexStorage {
  public s3
  constructor() {
    this.s3 = new S3({
      endpoint: 'https://storage.yandexcloud.net',
    //  accessKeyId: getEnv('SERVICE_ACCOUNT_ACCESS_KEY_ID'),
      accessKeyId: 'YCAJEL3DgqY4YfuDhaWhMDeuK',
      secretAccessKey: 'YCMSixxqrXvaT9kwYvjQjw1S8s7aOaGJr7D8vtG3',
      region: 'ru-central1',
      httpOptions: {
        timeout: 10000,
        connectTimeout: 10000
      },
    });
  }

  async uploadFile(bucketName:string, fileName:string, body:any) {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: body
    };
    return this.s3.upload(params).promise();
  }

  async get(key:string, bucket:string) {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    return this.s3.getObject(params).promise();
  }
  async listObjects(MaxKeys:string, Bucket:string) {
    const params:any= {
      Bucket: Bucket,
      MaxKeys: MaxKeys,
    };
    return this.s3.listObjects(params).promise();
  }
}
