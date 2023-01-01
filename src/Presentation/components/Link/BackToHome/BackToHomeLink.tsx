import { ChevronLeft } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BackToHomeLink: React.FC = () => {
  const [intervalId, setIntervalId] = useState(0);
  const [left, setLeft] = useState(-160);

  useEffect(() => {
    if (left >= 80) {
      clearInterval(intervalId);
    }
  }, [left]);

  const bringWord = () => {
    const backToHomeWord = document.getElementById("back-to-home-word");

    if (backToHomeWord) {
      if (left < 10) {
        const addLeftInterval = setInterval(() => {
          setLeft((left) => left + 20);
        }, 20);

        setIntervalId(addLeftInterval);
      }
    }
  };

  return (
    <Link to={"/"}>
      <ChevronLeft fontSize="large" onMouseOver={bringWord} />
      <span
        id="back-to-home-word"
        className="absolute mt-2.5"
        style={{ left: `${left}px` }}
      >
        Voltar à página inicial
      </span>
    </Link>
  );
};
