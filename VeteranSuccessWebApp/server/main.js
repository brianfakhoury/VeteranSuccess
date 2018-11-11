import { Meteor } from 'meteor/meteor';

import './../imports/startup/rest-api-config.js';
import '../imports/api/users.js';
import '../imports/api/rest.js';

Meteor.startup(() => {
  // code to run on server at startup
});
