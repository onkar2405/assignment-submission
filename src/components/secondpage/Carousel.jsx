import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const cards = [
  "AI.png",
  "/Mobile.png",
  "/IFrame.png",
  "AI.png",
  "/Mobile.png",
  "/IFrame.png",
];

const cardsPerPage = 3;

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div>
      <div className="flex justify-between">
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
            <div key={index} className="flex-shrink-0 w-1/3">
              <FeatureCard src={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
