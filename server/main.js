import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.onCreateUser((options, user) => {
  Roles.setRolesOnUserObj(user, ['admin']);
});
