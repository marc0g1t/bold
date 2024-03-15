import Image from "next/image";
import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";

export const Second = () => {
  return (
    <div className="-z-20">
      <motion.div
        exit={{ x: "-100%" }}
        animate={{ x: "200px" }}
        initial={{ y: 0, x: "-100%" }}
        className="h-screen w-[396px]"
      >
        <div className="w-100% h-[190px] border-b-2">
          <div className="text-[25px] font-bold p-6">Search</div>
          <div className="pl-[15px] pt-[30px]">
            <input
              className="w-[364px] h-[40px] p-4 rounded-md border bg-[#f2f2f2]"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex px-[24px] py-[8px] space-x-[236px] mt-[10px]">
          <div className="font-[600]">Recent</div>
          <div className="text-[#0064e0]">Clear all</div>
        </div>
        <div className="px-[24px] py-[8px] flex items-center hover:cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="w-[56px] h-[44px]">
            <Image
              className="rounded-[50px]"
              src="/mcs.jpeg"
              width={44}
              height={44}
            />
          </div>
          <div>
            <div className="font-bold">mcsgroupofficial</div>
            <div className="">MCS Group • Following </div>
          </div>
          <div className="ml-[100px]">
            <MdCancel className="w-[22px] h-[22px]" />
          </div>
        </div>
        <div className="px-[24px] py-[8px] flex items-center hover:bg-[#f2f2f2] rounded-lg">
          <div className="w-[56px] h-[44px]">
            <Image
              className="rounded-[50px]"
              src="/mcs.jpeg"
              width={44}
              height={44}
            />
          </div>
          <div>
            <div className="font-bold">mcsgroupofficial</div>
            <div className="">MCS Group • Following </div>
          </div>
          <div className="ml-[100px]">
            <MdCancel className="w-[22px] h-[22px]" />
          </div>
        </div>
        <div className="px-[24px] py-[8px] flex items-center hover:bg-[#f2f2f2] rounded-lg">
          <div className="w-[56px] h-[44px]">
            <Image
              className="rounded-[50px]"
              src="/mcs.jpeg"
              width={44}
              height={44}
            />
          </div>
          <div>
            <div className="font-bold">mcsgroupofficial</div>
            <div className="">MCS Group • Following </div>
          </div>
          <div className="ml-[100px]">
            <MdCancel className="w-[22px] h-[22px]" />
          </div>
        </div>
        <div className="px-[24px] py-[8px] flex items-center hover:bg-[#f2f2f2] rounded-lg">
          <div className="w-[56px] h-[44px]">
            <Image
              className="rounded-[50px]"
              src="/mcs.jpeg"
              width={44}
              height={44}
            />
          </div>
          <div>
            <div className="font-bold">mcsgroupofficial</div>
            <div className="">MCS Group • Following </div>
          </div>
          <div className="ml-[100px]">
            <MdCancel className="w-[22px] h-[22px]" />
          </div>
        </div>
        <div className="px-[24px] py-[8px] flex items-center hover:bg-[#f2f2f2] rounded-lg">
          <div className="w-[56px] h-[44px]">
            <Image
              className="rounded-[50px]"
              src="/mcs.jpeg"
              width={44}
              height={44}
            />
          </div>
          <div>
            <div className="font-bold">mcsgroupofficial</div>
            <div className="">MCS Group • Following </div>
          </div>
          <div className="ml-[100px]">
            <MdCancel className="w-[22px] h-[22px]" />
          </div>
        </div>
        <div className="px-[24px] py-[8px] flex items-center hover:bg-[#f2f2f2] rounded-lg">
          <div className="w-[56px] h-[44px]">
            <Image
              className="rounded-[50px]"
              src="/mcs.jpeg"
              width={44}
              height={44}
            />
          </div>
          <div>
            <div className="font-bold">mcsgroupofficial</div>
            <div className="">MCS Group • Following </div>
          </div>
          <div className="ml-[100px]">
            <MdCancel className="w-[22px] h-[22px]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
