import Music from "./img/music-world.jpeg";
import MusicBanner from "./img/music-banner.jpeg";
import MusicBanner2 from "./img/music-banner2.jpeg";
import MusicBanner3 from "./img/music-banner3.jpeg";
import Kush from "./img/kush.jpeg";
import Jcole from "./img/J.cole.jpeg";
import "./row.css";

function Row() {
  return (
    <section className="row__header">
      <div className="posters">
        <img className="row__poster" src={Music} />
        <img className="row__poster" src={MusicBanner} />
        <img className="row__poster" src={MusicBanner2} />
        <img className="row__poster" src={Jcole} />
        <img className="row__poster" src={MusicBanner3} />
        <img className="row__poster" src={Kush} />
      </div>
    </section>
  );
}

export default Row;
