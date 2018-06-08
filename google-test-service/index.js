'use strict';

const functions = require('firebase-functions');

exports.readFirestoreData = functions.https.onCall(data => {
  if (!data.some) {
    throw new functions.https.HttpsError(
      'invalid-argument', // code
      'Your error message goes here', // message
      { foo: 'bar' } // details - optional and can be anything JSON serializable
    );
  }

  return { someResponse: 'hello world' };
});
