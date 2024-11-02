import Card from '../../assets/cards/Cards_data.js';
import './Cards.css'

function Cards() {
  return (
      <div className='cards'>
          <h2>Popular on NetFlix</h2>
          <div className="card-list">
              {Card.map((index, card) => (
                  <div key={index} className="single-card">
                      <img src={card.image} alt="" />
                      <p>{ card.image}</p>
                  </div>
              ))
              }
          </div>
    </div>
  )
}

export default Cards