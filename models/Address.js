const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    area: {
      type: String,
      require: true,
    },
    house: {
      type: String,
      require: true,
    },
    block: {
      type: String,
      require: true,
    },
    street: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
