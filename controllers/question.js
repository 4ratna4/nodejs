const uniqid = require("uniqid");
const QuestionModel = require("../models/question");
const UserModel = require("../models/user");


module.exports.INSERT_QUESTION = async (req, res) => {
  try {
    const question = new QuestionModel({
      questionText: req.body.questionText,
    });

    await question.save();

    return res.status(200).json({ response: "Question inserted" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({ response: "ERROR" });
  }
};
