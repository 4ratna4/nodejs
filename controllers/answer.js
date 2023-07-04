const uniqid = require("uniqid");
const AnswerModel = require("../models/answer");
const UserModel = require("../models/user");

const QuestionModel = require("../models/question");



module.exports.INSERT_ANSWER = async (req, res) => {
  try {
    const answer = new AnswerModel({
      id: uniqid(),
      answerText: req.body.answerText,
    });

    await answer.save();

    return res.status(200).json({ response: "Answer inserted" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({ response: "ERROR" });
  }
};

module.exports.DELETE_ANSWER = async (req, res) => {
  try {
    await AnswerModel.deleteOne({ _id: req.params.id }).exec();


    return res.status(200).json({ statusMessage: "Answer deleted successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};


module.exports.GET_QUESTION_ANSWERS = async (req, res) => {
  try {
    const questionId = req.params.id;

    const question = await QuestionModel.findById(questionId);
    if (!question) {
      return res.status(404).json({ response: "Question not found" });
    }

    const answers = await AnswerModel.find({ questionId });

    res.status(200).json({ question, answers });
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ response: "ERROR, please try later" });
  }
};

