import ArrowCard from "./ArrowCard";

const ArrowCardsWrapper = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 mt-8 m-auto min-w-[300px] sm:min-w-[500px] md:min-w-[700px] lg:min-w-[900px]">
      <ArrowCard src={"overview.png"} />
      <ArrowCard src={"IFrame.png"} />
    </div>
  );
};

export default ArrowCardsWrapper;
