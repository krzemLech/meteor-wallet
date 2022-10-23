import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "../imports/api/contacts";

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {});
