import aws from 'aws-sdk';

const region = "us-east-1"
const bucketName = "wurklo-mobile-images"
const accessKeyId = process.env.AWS_S3_BUCKET_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_S3_BUCKET_SECRET_ACCESS_KEY
console.log(secretAccessKey)

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export function generateUploadURL() {
    const imageName = "random image name"

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 300
    })

    const uploadURL = await s3.getSignedURLPromise('putObject', params);
    return uploadURL;
}