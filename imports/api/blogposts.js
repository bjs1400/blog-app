import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { checkServerIdentity } from "tls";

import history from "../history";

export const Posts = new Mongo.Collection("posts");

Meteor.publish("posts", function postsPublication() {
  return Posts.find().fetch();
});

// methods
if (Meteor.isServer) {
  Meteor.methods({
    "posts.insert"(data) {
      check(data.title, String);
      check(data.description, String);
      // if user is not logged in, throw error
      if (!this.userId) {
        throw new Meteor.Error("not-authorized");
      } else if (
        !{
          /*user not admin*/
        }
      ) {
        throw new Meteor.Error("not-authorized"); // cannot create new post unless an admin
      }

      Posts.insert({
        title: data.title,
        description: data.description
      });

      history.push("/blog"); // send user to blog list upon successful creation
    },
    "posts.delete"(data) {
      if (!this.userId) {
        throw new Meteor.Error("not-authorized");
      }
      Posts.remove({ id: data.id }); // ???
    },
    "posts.edit"(data) {
      if (!this.userId) {
        throw new Meteor.Error("not-authorized");
      }
      Posts.update({ title: data.title, description: data.description });
    }
  });
}
