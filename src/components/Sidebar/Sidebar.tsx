import { NavLink } from "react-router-dom"
import { assets } from "../../assets/assets"

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0 font-[max(1vw,_10px)]">
      <div className="pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <NavLink to="/add" className="flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-[3px_0_0_3px]">
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink to="/list" className="flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-[3px_0_0_3px]">
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        
        <NavLink to="/orders" className="flex items-center gap-[12px] border-[1px] border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-[3px_0_0_3px]">
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
