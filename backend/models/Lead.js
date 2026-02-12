const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
    },
    phone: {
      type: String,
      default: "",
    },
    company: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    source: {
      type: String,
      enum: ["Website", "Instagram", "Referral", "Other"],
      required: true,
    },
    webhook_status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
