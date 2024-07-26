import AWS from 'aws-sdk';
import dotenv from "dotenv";

dotenv.config();



const uploadFileToS3 = async (req, res) => {

    console.log("upload req received");

    if (!req.file) {
        console.log("no file received");
        return res.status(400).send('No file received');
    }
    const file = req.file;


    AWS.config.update({
        region: 'us-east-1',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });


    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: file.originalname,
        Body: file.buffer
    };


    const s3 = new AWS.S3();


    // Upload the file to S3
    s3.upload(params, (err, data) => {
        if (err) {
            console.log('Error uploading file:', err);
            res.status(404).send('File could not be uploaded!');

        } else {
            console.log('File uploaded successfully. File location:', data.Location);
            res.status(200).send('File uploaded successfully');
        }
    });
}


export default uploadFileToS3;


