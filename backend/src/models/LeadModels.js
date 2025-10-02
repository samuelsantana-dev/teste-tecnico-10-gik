import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  job_title: { type: String, required: true },
  birth_date: { type: Date, required: true },
  message: { type: String, required: true },
//   utm_source: String,
//   utm_medium: String,
//   utm_campaign: String,
//   utm_term: String,
//   utm_content: String,
//   gclid: String,
//   fbclid: String,
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);
