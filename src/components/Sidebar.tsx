import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChartLine, FaHistory, FaRegUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline, IoStatsChart } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { RiHomeFill } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import Profile from "@/../public/profile.svg";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuData = [
    {
      name: "Dashboard",
      isDisabled: false,
      icon: <RiHomeFill />,
    },
    {
      name: "Profile",
      isDisabled: true,
      icon: <FaRegUser />,
    },
    {
      name: "Leaderboard",
      isDisabled: true,
      icon: <IoStatsChart />,
    },
    {
      name: "Order",
      isDisabled: true,
      icon: <AiOutlineShoppingCart />,
    },
    {
      name: "Product",
      isDisabled: true,
      icon: <PiHandbagLight />,
    },
    {
      name: "Sales Report",
      isDisabled: true,
      icon: <FaChartLine />,
    },
    {
      name: "Message",
      isDisabled: true,
      icon: <FiMessageCircle />,
    },
    {
      name: "Settings",
      isDisabled: true,
      icon: <IoSettingsOutline />,
    },
    {
      name: "Favorite",
      isDisabled: true,
      icon: <IoSettingsOutline />,
    },
    {
      name: "History",
      isDisabled: true,
      icon: <FaHistory />,
    },
    {
      name: "Signout",
      isDisabled: true,
      icon: <VscSignOut />,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#000000bb] bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed z-50 top-0 left-0 w-[220px] bg-[#171821] p-4 border-r border-[#2C2D33] transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block`}
      >
        <div className="sticky top-0">
          <div className="block md:hidden">
            <div className=" flex justify-between items-center gap-4 mb-4">
              <button className="w-[40px] h-[40px] rounded-full bg-gray-600 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={Profile}
                  alt="profile"
                />
              </button>
              <div>
                <button className="mr-2">
                  <GoBell size={24} className="text-white" />
                </button>

                <button>
                  <IoIosArrowDown size={24} className="text-white" />
                </button>
              </div>
            </div>
          </div>
          {menuData.map((item) => (
            <button
              key={item.name}
              disabled={item.isDisabled}
              className="flex items-center gap-4 text-[#87888C] hover:text-[#000] hover:bg-[#A9DFD8] disabled:cursor-not-allowed hover:disabled:bg-[#a9dfd8bb] hover:font-bold duration-300 cursor-pointer mb-4 px-4 py-2 rounded-md w-full not-disabled:bg-[#A9DFD8] not-disabled:text-[#000]"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
