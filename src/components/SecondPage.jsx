import ArrowCardsWrapper from "./ArrowCardsWrapper";
import Content from "./Content";
import CustomCarousel from "./Carousel";
import JobCardWrapper from "./JobCardWrapper";

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
