import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
  },

  metaTitle: {
    type: String,
  },

  metaDescription: {
    type: String,
  },

  content: {
    type: String,
  },

  schemaMarkup: {
    type: String,
  },

  featuredImage: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

export default mongoose.models.Blog ||
mongoose.model("Blog", BlogSchema);