'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  callback();
};

exports.myFooBarFn = functions.https.onCall(data => {
  console.log(data.some);

  if (!data.some) {
    throw new functions.https.HttpsError(
      'invalid-argument', // code
      'Your error message goes here', // message
      { foo: 'bar' } // details - optional and can be anything JSON serializable
    );
  }

  return admin
    .database()
    .ref('/Events')
    .once('value')
    .then(data => {
      console.log(data);
      console.log(JSON.stringify(data));
      return { someResponse: 'hello world', data: data.val() };
    });
});
