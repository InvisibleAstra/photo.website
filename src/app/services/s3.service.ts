import {Injectable} from '@angular/core';
import {S3} from 'aws-sdk';
import {
  DeleteObjectOutput,
  DeleteObjectRequest,
  GetObjectOutput,
  GetObjectRequest,
  PutObjectOutput,
  PutObjectRequest,
} from 'aws-sdk/clients/s3';

// const { getEnv } = require('../helper/environment');

interface YSMethods {
  uploadFile: () => any;
  getPreSignedGetUrl: () => string;
  get: () => any;
  listObjects: () => any;
}

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  public s3


  constructor() {
    this.s3 = new S3({
      endpoint: 'https://storage.yandexcloud.net',
      //  accessKeyId: getEnv('SERVICE_ACCOUNT_ACCESS_KEY_ID'),
      accessKeyId: 'YCAJEgCCjW3LSOux5LeJ50dFt',
      secretAccessKey: 'YCPEokjX7My-vQPC1f8v-_heFz2bBWvcjQv3xIvy',
      region: 'ru-central1',
      httpOptions: {
        timeout: 10000,
        connectTimeout: 10000
      },
    });
  }


  public async uploadFile(bucketName: string, fileName: string, body: any) {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: body
    };
    return this.s3.upload(params).promise();
  }

  public getPreSignedGetUrl(key: string, bucket: string): string {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    return this.s3.getSignedUrl('getObject', params);
  }

  public async get(key: string, bucket: string) {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    return this.s3.getObject(params).promise();
  }


  public async listObjects(MaxKeys: string, Bucket: string, Prefix?: string) {
    const params: any = {
      Bucket: Bucket,
      MaxKeys: MaxKeys,
      Prefix: Prefix,
    };
    return this.s3.listObjects(params).promise();
  }
}
