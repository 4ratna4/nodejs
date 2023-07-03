const uniqid = require("uniqid");
const QuestionModel = require("../models/question");
const UserModel = require("../models/user");


module.exports.INSERT_QUESTION = async (req, res) => {
  try {
    const question = new QuestionModel({
      id: uniqid(),
      questionText: req.body.questionText,
    });

    await question.save();

    return res.status(200).json({ response: "Question inserted" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({ response: "ERROR" });
  }
};

module.exports.DELETE_QUESTION = async (req, res) => {
  try {
    await QuestionModel.deleteOne({ _id: req.params.id }).exec();


    return res.status(200).json({ statusMessage: "Question deleted successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

