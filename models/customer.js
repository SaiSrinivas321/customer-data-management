import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  name: {
    type: String,
    required: [true, "Username is required!"],
  },
  phno: {
    type: String,
  },
});

const Customer = models.Customer || model("Customer", CustomerSchema);

export default Customer;
