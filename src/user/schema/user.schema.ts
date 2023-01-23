import { Schema } from "mongoose";

export const UserSchema = new Schema({
  name: String,
  lastname: String,
  nationality: String,
  doctype: String,
  docnumber: Number,
});