import "./quizz-cards.css";
import {Link} from 'react-router-dom'
import { useQuizzContext } from "../../contexts/quizz-context";

const QuizzCard = ({ items }) => {
    const {quizzDispatch} = useQuizzContext()
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__img">
          <img
            src={items.image}
            alt="card-img"
            className="card__img-c"
          />
        </div>
        <div className="card__name">
          <p className="card__charc-name">{items.category}</p>
          <p className="card__charc-series">Take this quiz to test yourself</p>
          <div className="play__cta">
              <Link to = '/rules'>
              <button className="btn solid__primary play__btn" 
              onClick = {() => quizzDispatch({type : "PLAY_CLICK", payload : items})}
              >Play</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QuizzCard };
