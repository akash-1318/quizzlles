import "./result.css";
import { Navigation } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";
import { useQuizzContext } from "../../contexts/quizz-context";
import { useState } from "react";

const Result = () => {
  const [check, setCheck] = useState(0)
  const [select, setSelect] = useState(false)
    const {quizzState} = useQuizzContext();
    const {questionData,newQuestionData,score, correctOptions} = quizzState

  return (
    <>
      <Navigation />
      <main className="quiz__main">
        <div className="score__container">
        <p className="final__score-heading">Final Score</p>
        <p className={`final__score-para ${score > 5 ? "pass" : "fail"} `}>Your score is : {score}</p>
        </div>
        <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
        {newQuestionData.map((newDataItem, index) => {
          return(
            <>
            <div className="quiz__question">
          <div className="question">
            <p className="question__text">
              {newDataItem.newQuestion}
            </p>
            <div className="question__number">
              <p>
                Question {index + 1} / {newQuestionData.length}
              </p>
            </div>
          </div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="options">
            {newDataItem.newOptions &&
              newDataItem.newOptions.map((optionItem) => 
                optionItem.map((newOptionData)=>{
                  return (
                    <button
                    className={`option__name ${(questionData.map((item) => item.correct_answer).includes(newOptionData)) ? "same" : ""}
                    ${correctOptions.includes(newOptionData) ? "wrong" : ""}`}
                    >
                      {newOptionData}
                    </button>
                  );
                })                
              )}
          </div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
          <div className="space__2rem"></div>
        </div>
            </>
          )
        })}
      </main>
      <Footer/>
    </>
  );
};

export { Result };


