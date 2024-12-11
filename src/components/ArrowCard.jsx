import { GoArrowUpRight } from "react-icons/go";

const ArrowCard = ({ src }) => {
  return (
    <div className="bg-white pl-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mt-4 mr-4">
        <div className="bg-blue-200 w-14 h-8 rounded-xl mr-4"></div>
        <button className="relative rounded-full border-2 border-black p-2 group overflow-hidden hover:bg-black">
          <GoArrowUpRight className=" text-black transition-transform hover:rotate-45 duration-100 group-hover:text-white" />
        </button>
      </div>

      <h2 className="text-lg font-semibold">
        Duis aute irure dolor in reprehenderit
      </h2>
      <p className="mt-8 mb-4 mr-4 text-gray-600 w-60">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>

      <img src={src} alt="Arrow Card" />
    </div>
  );
};

export default ArrowCard;
