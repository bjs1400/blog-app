import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { checkServerIdentity } from "tls";
import { Roles } from "meteor/alanning:roles";
import history from "../history";

export const Users = new Mongo.Collection("users");

if (Meteor.isServer) {
  Meteor.publish("users", function usersPublication() {
    return Users.find().fetch();
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    "users.insert"(data) {
      check(data.username, String); // make sure our username & password are strings
      check(data.password, String);
      Accounts.createUser({
        email: data.email,
        password: data.password,
        currentUser: Meteor.userId() // need to figure out how to determine if admin!
      });
      Roles.addUsersToRoles();

      history.push("/blog"); // after user successfully signs up, send them to blog list page
    },
    "users.fetch"(data) {
      return Users.find().fetch(); // fetch all users in the database -- ** FIX THIS**
    },
    "user.fetch"() {
      return Users.find.fetch();
    }
  });
}
