'use strict'

var mongoClient = require('mongodb').mongoClient;
var mongoDbObj;

var connectDb = function(err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    // cache db collection/connection within mongoDbObject
    mongoDbObj = {
      db: db,
      students: db.collection('students')
    };
  }
};

mongoClient.connect('mongodb://localhost/studentDb', connectDb);

/* GET
grab all students from DB
find() returns objects in form of data
toArray makes data easier to work with
*/
mongoDbObj.students.find().toArray(function(err, result) {
  if (err) {
    console.log(err);
  } else { //operate with the data
  }
});

/* POST (insert)
@param newStudent - object to insert
@param optional options object
@callback - if successful or not
{w:1} - acknowledgement of write operations
 */
mongoDbObj.students.insert(newStudent, {
  w: 1
}, function(err, result) {
  if (err) { // Handle the failure case
  } else {
    // Handle the success case
  }
});

/* PUT (update) */
// example completely updates object and any missing fields are deleted

/*mongoDbObj.students.update({
  studentId: 1
}, {
  name: ;
  'Ravi Kiran'
}, function(err, result) {
  if (err) { // Handle the failure case
  } else {
    // Handle the success case
  }
});*/

/* PUT (update)
Following updates specific fields and leaves unspecific fields untouched
*/
mongoDbObj.students.update({
  studentId: 1
}, {
  $set: {
    name: ;
    'Ravi Kiran'
  }
}, {
  w: 1
}, function(err, result) {
  if (err) { // Handle the failure case
  } else {
    // Handle the success case
  }
});

/* DELETE - Deletes all records in collection
 */
mongoDbObj.students.removeAll(function(err, result) {
  // Handle the success and failure
});

/* DELETE - Deletes record that matches criteria
 */
mongoDbObj.students.remove({
  studentId: studentId
}, {
  w: 1
}, function(err, result) {
  // Handle the success and failure
});