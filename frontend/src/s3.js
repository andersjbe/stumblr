import S3 from 'react-aws-s3';

const config = {
	bucketName: 'myBucket',
	dirName: 'images' /* optional */,
	region: process.env.AWS_REGION,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET,
};

export default new S3(config);
