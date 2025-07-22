import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChartLine, FaHistory, FaRegUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoSettingsOutline, IoStatsChart } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { RiHomeFill } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";

export default function Sidebar() {
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
    <aside className="hidden md:block w-[220px] p-4 border-solid border-r border-[#2C2D33] ">
      <div className="sticky top-0">
        {menuData.map((item) => {
          return (
            <button
              key={item.name}
              disabled={item.isDisabled}
              className="flex items-center gap-4 text-[#87888C] hover:text-[#000] hover:bg-[#A9DFD8]  disabled:cursor-not-allowed hover:disabled:bg-[#a9dfd8bb] hover:font-bold duration-300 cursor-pointer mb-4 px-4 py-2 rounded-md w-full not-disabled:bg-[#A9DFD8] not-disabled:text-[#000]"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
