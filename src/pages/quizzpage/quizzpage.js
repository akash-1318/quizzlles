import "./quizzpage.css";
import { Navigation } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";
import { Question } from "../../components/question/question";

const Quizzpage = () => {
    
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
