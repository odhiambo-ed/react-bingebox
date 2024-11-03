import { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import cards_data from "../../assets/cards/Cards_data";
import "./Cards.css";

function Cards({ title }) {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
    return () => {
      cardsRef.current.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="cards">
      <h2>{title ? title : "Popular on NetFlix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="single-card">
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Add PropTypes validation
Cards.propTypes = {
  title: PropTypes.string,
};

export default Cards;