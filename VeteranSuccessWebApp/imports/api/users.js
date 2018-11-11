import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
import moment from 'moment';
import shortid from 'shortid';

// Don't allow client side writing to profile field
Meteor.users.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

if (Meteor.isServer) {
}

Meteor.methods({

});

Accounts.validateNewUser((user) => {
  console.log('user: ', user);
  const name = user.profile.name;
  const email = user.emails[0].address;

  new SimpleSchema({
    name: {
      type: String
    },
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({ name, email });

  return true;
});

Accounts.onCreateUser((options, user) => {
  user.profile = options.profile;

  return user;
});
