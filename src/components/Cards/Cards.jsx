import { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import cards_data from "../../assets/cards/Cards_data";
import "./Cards.css";

function Cards({ title }) {
  const cardsRef = useRef();

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjA0ZGNkMWU3ZDUxN2I1OGUyODQ0ZjY4ZjQzMWMyNSIsIm5iZiI6MTczMDY2NDI4Ny4wNzA4NzM3LCJzdWIiOiI2NTc3MWJmNjRiZmE1NDAwZmU3ZjNmNGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Kba3JAOu0mAbdNF6fAzcZJHPhnaiq1xNmW64T5VdPCY",
      },
    };
    
    
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      )
        .then((res) => res.json())
        .then((res) => )
          .catch((err) => console.error(err));
        
    cardsRef.current.addEventListener("wheel", handleWheel);
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