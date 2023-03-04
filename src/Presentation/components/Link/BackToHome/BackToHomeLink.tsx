import { ChevronLeft } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../style/animations/slide.css";
import "./backToHome.css";

export const BackToHomeLink: React.FC = () => {
  const [slide, setSlide] = useState(false);

  return (
    <Link to={"/"}>
      <ChevronLeft fontSize="large" onMouseOver={() => setSlide(!slide)}/>
      <span
        id="back-to-home-word"
        className={`absolute mt-2.5 ${slide ? 'slide' : ''}`}
      >
        Voltar à página inicial
      </span>
    </Link>
  );
};


