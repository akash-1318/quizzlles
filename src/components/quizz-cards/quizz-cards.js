import "./quizz-cards.css";

const QuizzCard = ({items}) => {
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
            <button className="btn solid__primary">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QuizzCard };
