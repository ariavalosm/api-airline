import { Document } from "mongoose";

export interface User extends Document {
  id?: number;
  name: string;
  lastname: string;
  nationality: string;
  doctype: string;
  docnumber: number;
}