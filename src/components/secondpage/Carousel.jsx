import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const cards = [
  "AI.png",
  "Mobile.png",
  "IFrame.png",
  "AI.png",
  "Mobile.png",
  "IFrame.png",
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < cards.length - cardsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Get the latest in Privacy</h1>

        <div className="flex gap-2">
          <button
            className={`p-2 border rounded-xl bg-white border-gray-400 ${
              currentIndex === 0 ? "cursor-not-allowed text-gray-400" : ""
            }`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>

          <button
            className={`p-2 border rounded-xl bg-white border-gray-400 ${
              currentIndex >= cards.length - cardsPerPage
                ? "cursor-not-allowed text-gray-400"
                : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex >= cards.length - cardsPerPage}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="overflow-hidden mt-6">
        <div
          className="flex transition-transform duration-300 gap-6"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1 md:w-1/2 lg:w-1/3 xl:w-1/3"
            >
              <FeatureCard src={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
