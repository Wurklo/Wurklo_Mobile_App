import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';
import dotenv from 'dotenv';

//load env vars, not sure if i need this here but will check
dotenv.config({ path: './config/config.env' });

const region = "us-east-1";
const bucketName = "wurklo-mobile-images";
const accessKeyId = process.env.AWS_S3_BUCKET_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_S3_BUCKET_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

const randomBytes = promisify(crypto.randomBytes)
export async function generateUploadURL() {
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex');

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 300,
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    return uploadURL;
}