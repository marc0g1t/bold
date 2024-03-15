import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { FaSmileBeam } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";

const First = ({ handleSearchClick }) => {
  return (
    <div className="h-screen w-[300px] border-r-2 p-[12px] z-40">
      <div className="text-[30px] font-bold pt-[25px] pb-[50px] px-[12px]">
        Instagram
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <IoMdHome className="w-[30px] h-[30px]" />
        </div>
        <div className="font-bold ml-[16px]">Home</div>
      </div>
      <div
        onClick={handleSearchClick}
        className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg"
      >
        <div>
          <IoSearch className="w-[30px] h-[30px]" />
        </div>
        <div className=" ml-[16px]">Search</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <MdExplore className="w-[30px] h-[30px]" />
        </div>
        <div className="ml-[16px]">Explore</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <BsCameraReelsFill className="w-[30px] h-[30px]" />
        </div>
        <div className="ml-[16px]">Reels</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <FiMessageSquare className="w-[30px] h-[30px]" />
        </div>
        <div className="f ml-[16px]">Messages</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <FaRegHeart className="w-[30px] h-[30px]" />
        </div>
        <div className=" ml-[16px]">Notifications</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <MdCreateNewFolder className="w-[30px] h-[30px]" />
        </div>
        <div className=" ml-[16px]">Create</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <FaSmileBeam className="w-[30px] h-[30px]" />
        </div>
        <div className=" ml-[16px]">Profile</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] mt-[440px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <FaThreads className="w-[30px] h-[30px]" />
        </div>
        <div className=" ml-[16px] ">Threads</div>
      </div>
      <div className="flex items-center p-[12px] my-[4px] hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
        <div>
          <CgDetailsMore className="w-[30px] h-[30px]" />
        </div>
        <div className=" ml-[16px]">More</div>
      </div>
    </div>
  );
};
export default First;
