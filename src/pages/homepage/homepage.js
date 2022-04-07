import "./homepage.css";
import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Categories } from "../../database/category";
import { Navigation } from "../../components/navigation/navigation";
import { QuizzCard } from "../../components/quizz-cards/quizz-cards";
import { Footer } from "../../components/footer/footer";
import { useQuizzContext } from "../../contexts/quizz-context";

const Homepage = () => {

  const {quizzDispatch} = useQuizzContext()

  const path = useLocation();

    const testFunc = () => {
      if(path.pathname === "/"){
      quizzDispatch({type : "DISABLE_LEVEL"})
      quizzDispatch({type : "KILL_QUESTION_DATA"})
    }
    }
    useEffect(()=>{
      testFunc()
    },[])

  return (
    <>
      <Navigation />
      <main className="home__main">
        <h1 className = "main__heading">⚡ Choose Category ⚡</h1>
        <div className="space__2rem"></div>
        <section className="quiz__card-section">
            {Categories.map((items) => {
                return(
                    <QuizzCard 
                    key = {items.category}
                    items = {items} 
                    />
                )
            })}
        </section>
      </main>
      <Footer/>
    </>
  );
};

export { Homepage };
