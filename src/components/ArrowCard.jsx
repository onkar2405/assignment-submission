import { GoArrowUpRight } from "react-icons/go";

const ArrowCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <div className="bg-blue-200 w-14 h-8 rounded-xl mr-4"></div>
        <h2 className="text-lg font-semibold">
          Duis aute irure dolor in reprehenderit
        </h2>
        <button className="relative rounded-full border-2 border-black p-2 group overflow-hidden hover:bg-black">
          <GoArrowUpRight className=" text-black transition-transform hover:rotate-45 duration-200 group-hover:text-white" />
        </button>
      </div>

      <p className="mt-8 text-gray-600">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default ArrowCard;
