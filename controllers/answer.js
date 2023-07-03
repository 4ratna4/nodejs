const uniqid = require("uniqid");
const AnswerModel = require("../models/answer");
const UserModel = require("../models/user");


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

// module.exports.GET_QUESTION_ANSWERS = async (req, res) => {
//   try {
//     const questionId = req.params.id;
//     const answers = await AnswerModel.find({ questionId });

//     res.status(200).json({ answers });
//   } catch (err) {
//     console.log("ERR", err);
//     res.status(500).json({ response: "ERROR, please try later" });
//   }
// };

module.exports.GET_QUESTION_ANSWERS = async (req, res) => {
  try {
    const aggregateAnswer = await AnswerModelModel.aggregate([
      {
        $lookup: {
          from: "answers",
          localField: "_id",
          foreignField: "answerText",
          as: "answers",
        },
      },
      { $match: { id: req.body.questionId } },
    ]).exec();

    res.status(200).json( {questions} );
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ response: "ERROR, please try later" });
  }
};


// module.exports.GET_ALL_ANSWERS = async (req, res) => {
//   try {
//     const questions = await QuestionModel.find();

//     const answers = await AnswerModel.find({ questionId: { $in: questions.map(q => q._id) } });

//     res.status(200).json({ answers });
//   } catch (err) {
//     console.log("ERR", err);
//     res.status(500).json({ response: "ERROR, please try later" });
//   }
// };

