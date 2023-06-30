const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({ 
  questionText: { type: String, required: true },
});

module.exports = mongoose.model("Question", questionSchema);