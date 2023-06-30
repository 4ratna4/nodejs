const uniqid = require("uniqid");
const AnswerModel = require("../models/answer");
const UserModel = require("../models/user");


module.exports.INSERT_ANSWER = async (req, res) => {
  try {
    const answer = new AnswerModel({
      answerText: req.body.answerText,
    });

    await answer.save();

    return res.status(200).json({ response: "Answer inserted" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({ response: "ERROR" });
  }
};

