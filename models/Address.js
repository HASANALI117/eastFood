const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    area: {
      type: String,
      required: true,
    },
    house: {
      type: String,
      required: true,
    },
    block: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
