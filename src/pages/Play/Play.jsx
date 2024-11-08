import "./Play.css";
import Arrow from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Play() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    key: "",
    name: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjA0ZGNkMWU3ZDUxN2I1OGUyODQ0ZjY4ZjQzMWMyNSIsIm5iZiI6MTczMDY2NDI4Ny4wNzA4NzM3LCJzdWIiOiI2NTc3MWJmNjRiZmE1NDAwZmU3ZjNmNGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Kba3JAOu0mAbdNF6fAzcZJHPhnaiq1xNmW64T5VdPCY",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img src={Arrow} alt="Arrow" onClick={() => {navigate('/')}} />
      {apiData.key && (
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          width="90%"
          height="90%"
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Play;