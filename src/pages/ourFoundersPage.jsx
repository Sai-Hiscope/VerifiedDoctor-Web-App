import React from "react";
import "./ourFoundersPage.css";
import Cards from "../components/Cards";
import Fotter from "../components/footer";

// Image imports
import Anji from "../assets/Images/foundersImg/anji.jpg";
import Alekhya from "../assets/Images/foundersImg/alekhya.jpg";
import Bhadru from "../assets/Images/foundersImg/bhadru.jpg";
import Durga from "../assets/Images/foundersImg/Durga.jpg";
import Kiran from "../assets/Images/foundersImg/kiran.jpg";
import Mohan from "../assets/Images/foundersImg/mohan.jpg";
import Pavan from "../assets/Images/foundersImg/Pavan P.jpg";
import Praveen from "../assets/Images/foundersImg/Praveen.jpg";
import Sai from "../assets/Images/foundersImg/sai.jpg";
import Sandeep from "../assets/Images/foundersImg/sandeep.jpg";
import SaiSakth from "../assets/Images/foundersImg/SaiSakth.jpg";
import Shiva from "../assets/Images/foundersImg/Shiva.jpg";
import Vyshanavi from "../assets/Images/foundersImg/Vaishanavi.jpg";

const FounderPage = () => {
  const founderDetails = [
    {
      name: "Anjaneyulu Kadari",
      role: "Software Developer, Digital Marketing",
      image: Anji,
    },
    { name: "Pavan P", role: "Team Lead", image: Pavan },
    { name: "Alekhya Padala", role: "Java Developer", image: Alekhya },
    { name: "Bhadru Lotavath", role: "Java Developer", image: Bhadru },
    { name: "Praveen Puvvala", role: "Java Developer", image: Praveen },
    { name: "KiranVenkat Bishetti", role: "Software Developer", image: Kiran },
    { name: "Mohan Bishetti", role: "Data Analyst, Designer", image: Mohan },
    { name: "Durga Prasad", role: "Finance Department", image: Durga },
    { name: "Sandeep Kumar M", role: "Full Stack Developer", image: Sandeep },
    { name: "Sai Saketh", role: "Data Engineer", image: SaiSakth },
    { name: "Shiva Banoth", role: "Full Stack Developer", image: Shiva },
    { name: "Vaishnavi G", role: "Full Stack Developer", image: Vyshanavi },
  ];

  return (
    <div className="founderPage-main">
      <div className="founderpage-founder">
        <div className="founderpage-founder-div-img">
          <img
            className="founderpage-founder-img"
            src={Sai}
            alt="Sai Madiraju"
          />
        </div>
        <h2 className="founderpage-founder-h2">
          Sai Madiraju <br />
          Founder & CEO
          <p className="founderpage-founder-p">
            Founder Of: Hiscope Cyberlinks <br />
            EVAAP (Employment Verification and Academic Proofing) <br />
            VDr (Verified Doctor)
          </p>
        </h2>
      </div>
      <h2 className="founderpage-developer-h2">DEVELOPERS</h2>
      <div className="founderpage-developers">
        <ul className="founderpage-developers-ul">
          {founderDetails.map((founder, index) => (
            <Cards key={index} details={founder} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FounderPage;
