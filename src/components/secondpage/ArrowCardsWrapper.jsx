import ArrowCard from "./ArrowCard";

const ArrowCardsWrapper = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 mt-8 m-auto">
      <ArrowCard src={"overview.png"} />
      <ArrowCard src={"IFrame.png"} />
    </div>
  );
};

export default ArrowCardsWrapper;
