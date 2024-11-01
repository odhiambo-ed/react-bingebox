import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../assets/hero_banner.jpg';
import HeroTitle from '../../assets/hero_title.png';
import './Home.css';

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
        </div>
      </div>
    </div>
  );
}

export default Home