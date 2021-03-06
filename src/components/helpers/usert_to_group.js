//amplify init

//amplify add auth

//amplify/backend/function/<function_name>/src/add-to-group.js 

const aws = require ('aws-sdk');

export.handler = async (event, context, callback) => {
    const cognitoProvider = new aws.CognitoIdentityServiceProvider({apiVersion: "2016-04-18"});

    let isAdmin = false;
    const adminEmails = ['dabit3@gmail.com'];

    //if the user is one of the admins, set the isAdmin variable to true
    if(adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
        isAdmin = true;
    }

    const groupParams = {UserPoolId: event.userPoolId}

    const userParams = {
        UserPoolId: event.userPoolId,
        Username: event.userName
    }

    if(isAdmin){
        groupParams.GroupName = 'Admin',
        userParams.GroupName = 'Admin'
    
    //first check to see if the groups exists, and if not create the group
    try{
        await cognitoProvider.adminAddUserToGroup(userParams).promise();
        callback(null, event);

    } catch (e){
        callback(e);
    }

    } else {
        //if the user is in neither group, proceed with no action
        callback(null, event);
    }

}

//amlify push


import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

import React, {useEffect, useState} from 'react';


import {Auth} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => setUser(user))
            .catch(err => console.error(err));
    }, []);

    let isAdmin = false;

    if(user){
        const {signInUserSession: {idToken: {payload}}} = user;

        if(payload['cognito:groups'] && payload['cognito:groups'].includes('Admins')){
            isAdmin = true;
        }

    }

    return (
        <div className="App">
            <header className="App-header">
                {isAdmin && <p>Welcome, Admin</p>}
            </header>
        </div>
    )
}

export default withAuthenticator(App, {includeGreetings: true})

//npm start



// Dynamic image resizing with AWS Lambda and Amazon S3

//amplify add storage

//amplify/backend/function/<functionname>/src/index


//import the sharp library
const sharp = require('sharp');
const aws = require ('aws-sdk');
const s3 = new aws.S3();


exports.handler = async function (event, context) {
    //if the event type is delete, return from the function
    if(event.Records[0].eventName === 'ObjectRemoved:Delete') return;

    // next, we get the buckect name and the key from the event
    const BUCKET = event.Records[0].s3.buckect.name;
    const KEY = event.Records[0].s3.object.key;

    try {
        //fetch the image data
        let image = await s3.getObject({Bucket: BUCKET, Key: KEY}).promise();
        image = await sharp(image.Body);

        //get the metadata from the image, incluiding the width and the height
        const metadata = await image.metadata();

        if(metadata.width > 1000){
            //if the width is greater than 1000, the image is resized
            const resizedImage = await image.resize({width: 1000}).toBuffer();

            await s3.putObject({Bucket: BUCKET, Body: resizedImage, Key: KEY}).promise();

            return; 


        } else {
            return;
        }
    } catch (error) {
        context.fail(`Error getting files: ${err}`);
    }
}

//sharp library must be installed with the function after deplyment
//update package.json
//amplify/backen/function/<function_name>/src/package.json

// {
//     "name": "<function_name>",
//     "version": "2.0.0",
//     "description": "Lambda function generated by Amplify",
//     "main": "index.js",
//     "licence": "Apache-2.0",
//     "scripts": {
//         "install": "npm install --arc=x64 --platform=linux --target=10.15.0 sharp"
//     },
//     "dependencies": {
//         "sharp": "^0.23.2"
//     }
// }


//Amplify/backend/function/<function_name>/<function_name>/cloudformation-template.json
//"Runtime": "nodejs10.x",

//amplify push

import {S3Album} from 'aws-amplify-react';

function App(){
    return (
        <div className="App">
            <div className="App-header">
                <S3Album
                    picker
                    path=""
                />
            </div>
        </div>
    )
}

// Lambda functions can be invoked from many different event types including API calls,
// image uploads, database operations, and auth eventsglobal.fetch = require('node-fetch');


// The event data sctructure differs based on the type of event invoking the Lambda function

// Understanding the data available in the event variable enables you to better evaluate the 
// things that can be accomplished within the function


//npm start