import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../assets/hero_banner.jpg";
import HeroTitle from "../../assets/hero_title.png";
import "./Home.css";
import Play from "../../assets/play_icon.png";
import Info from "../../assets/info_icon.png";
import Card from "../../components/Cards/Cards";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={HeroBanner} alt="" className="banner-image" />
        <div className="hero-content">
          <img src={HeroTitle} alt="" className="content-image" />
          <p>
            Discover his ties to a secret ancient order, a young man living in a
            modern Istabul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="hero-button">
            <button className="btn">
              <img src={Play} alt="Play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={Info} alt="Info" />
              More Info
            </button>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
