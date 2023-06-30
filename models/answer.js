const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({ 
  answerText: { type: String, required: true },
});

module.exports = mongoose.model("Answer", answerSchema);
