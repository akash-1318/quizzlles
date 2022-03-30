import "./homepage.css";
import { Categories } from "../../database/category";
import { Navigation } from "../../components/navigation/navigation";
import { QuizzCard } from "../../components/quizz-cards/quizz-cards";
import { Footer } from "../../components/footer/footer";
const Homepage = () => {
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
