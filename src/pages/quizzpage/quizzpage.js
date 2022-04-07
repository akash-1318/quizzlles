import "./quizzpage.css";
import { Navigation } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";
import { Question } from "../../components/question/question";
import { useQuizzContext } from "../../contexts/quizz-context";
const Quizzpage = () => {
    const {quizzState} = useQuizzContext();
    const {questionData, currentQue} = quizzState;
  return (
    <>
      <Navigation />
      <main className="quiz__main">
        <Question/>
      </main>
      <Footer/>
    </>
  );
};

export { Quizzpage };
