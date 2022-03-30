import "./rules.css";
import { Navigation } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";
import { useQuizzContext } from "../../contexts/quizz-context";
const Rules = () => {
    const {quizzState, quizzDispatch} = useQuizzContext();
    
  return (
    <>
      <Navigation />
      <main className="rules__main">
        <div className="rules__container">
          <div className="picture__div">
            <img src={quizzState.image} alt="quizz-img"/>
          </div>
          <div className="rules__div">
            <h1 className="rules__heading">⚡ Rules for {quizzState.category} quizz ⚡</h1>
            <hr />
            <ol>
              <li>Rules are meant to be Broken so we have no rules for you.</li>
              <li>You can play on your own terms but don't cheat.</li>
              <li>Cheat means just don't Google it.</li>
              <li>Play with your full honesty.</li>
              <li>
                If you don't know the answers then let your luck answer it. 
              </li>
            </ol>
            <hr />
            <div className="level__selection">
              <h2> ⚡ Choose Difficulty ⚡ </h2>
              <div className="radio">
                <label for="radio-1">
                  <input
                    type="radio"
                    name="level-selection"
                    className="radio__input"
                    checked = {quizzState.level === "easy"}
                    onChange = {() => quizzDispatch({type : "EASY"})}
                  />
                  Easy
                </label>
                <label for="radio-1">
                  <input
                    type="radio"
                    name="level-selection"
                    className="radio__input"
                    checked = {quizzState.level === "medium"}
                    onChange = {() => quizzDispatch({type : "MEDIUM"})}
                  />
                  Medium
                </label>
                <label for="radio-1">
                  <input
                    type="radio"
                    name="level-selection"
                    className="radio__input"
                    checked = {quizzState.level === "hard"}
                    onChange = {() => quizzDispatch({type : "HARD"})}
                  />
                  Hard
                </label>
              </div>
            </div>
            <div className="rules__cta">
              <button className="btn solid__primary icon__btn">
                <i className="bx bxs-left-arrow"></i>Go back
              </button>
              <button className="btn solid__primary icon__btn continue__btn">
                Continue <i className="bx bxs-right-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export { Rules };
