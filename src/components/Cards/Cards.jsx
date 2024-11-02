import cards_data from "../../assets/cards/Cards_data";
import './Cards.css'

console.log(cards_data)
function Cards() {
  return (
    <div className="cards">
      <h2>Popular on NetFlix</h2>
      <div className="card-list">
              {cards_data.map((index, card) => {
                 return <div key={index} className="single-card">
                      <img src={card.image} alt="" />
                      <p>{card.image}</p>
                  </div>
})}
      </div>
    </div>
  );
}

export default Cards