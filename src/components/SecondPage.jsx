import ArrowCardsWrapper from "./secondpage/ArrowCardsWrapper";
import CustomCarousel from "./secondpage/Carousel";
import Content from "./secondpage/Content";
import JobCardWrapper from "./secondpage/JobCardWrapper";

const SecondPage = () => {
  return (
    <div className="w-90 m-auto p-10">
      <Content />

      <ArrowCardsWrapper />

      <div className="mt-20">
        <JobCardWrapper />
      </div>

      <div className="mt-20">
        <CustomCarousel />
      </div>
    </div>
  );
};

export default SecondPage;
