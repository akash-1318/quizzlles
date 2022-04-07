import "./question.css";
import { Link, useNavigate } from "react-router-dom";
import { useQuizzContext } from "../../contexts/quizz-context";
import { useEffect, useState } from "react";

const Question = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();
  const { quizzState, quizzDispatch } = useQuizzContext();
  const { questionData, currentQue } = quizzState;

  useEffect(() => {
    setOptions(
      questionData &&
        shuffleOptions([
          questionData[currentQue]?.correct_answer,
          ...questionData[currentQue]?.incorrect_answers,
        ])
    );
  }, [questionData[currentQue]]);

  const shuffleOptions = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  const handleCheckClick = (optionItem) => {
    if (
      selected === optionItem &&
      selected === questionData[currentQue]?.correct_answer
    ) {
      return "select";
    } else if (
      selected === optionItem &&
      selected !== questionData[currentQue]?.correct_answer
    ) {
      return "wrong";
    } else if (optionItem === questionData[currentQue]?.correct_answer) {
      return "select";
    }
  };

  const handleSelect = (optionItem) => {
    setSelected(optionItem);
  };

  useEffect(() => {
    setSelected();
  }, [currentQue]);

  const handleQuite = () => {
    navigate("/");
  };

  return (
    <>
      {questionData.length > 0 ? (
        <div className="quiz__question">
          <div className="question">
            <p className="question__text">
              {questionData[currentQue].question}
            </p>
            <div className="question__number">
              <p>
                Question {currentQue + 1}/{questionData.length}
              </p>
            </div>
          </div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="options">
            {options &&
              options.map((optionItem) => {
                return (
                  <button
                    className={`option__name ${
                      selected && handleCheckClick(optionItem)
                    }`}
                    onClick={() => handleSelect(optionItem)}
                    disabled={selected}
                  >
                    {optionItem}
                  </button>
                );
              })}
          </div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="game__play-controlls">
            <button className="option__name quit__btn" onClick={handleQuite}>
              Quite
            </button>
            {currentQue === 9 ? (
              <>
                <button className="option__name next__btn">
                  Submit your Answers
                </button>
              </>
            ) : (
              <>
                <button
                  className="option__name next__btn"
                  onClick={() => quizzDispatch({ type: "NEXT_QUESTION" })}
                >
                  Next Question
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </>
  );
};

export { Question };
