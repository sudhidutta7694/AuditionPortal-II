module.exports = (sequelize, DataTypes) => {
  const question_answered_model = sequelize.define("question_answered_model", {
    answermodelId : {
      type: DataTypes.STRING,
      allowNull: false
    },
    qid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qtype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ansLink: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  return question_answered_model;
}