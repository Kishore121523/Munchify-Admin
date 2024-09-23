import axios from "axios"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ListProps{
  url:string
}

interface FoodItem {
  _id: string;
  image: string;
  name: string;
  category: string;
  price: number;
}

const List = ({url}:ListProps) => {
  
  const [list, setList] = useState<FoodItem[]>([]);


  const fetchList = async() =>{
    const response = await axios.get(`${url}/api/food/list`)

    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error(response.data.message)
    }
  }

  const removeFood = async(foodId:string) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }

  useEffect(()=>{
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="w-[70%] ml-[max(5vw,_25px)] mt-[50px] font-[#6d6d6d] font-[16px]">
      <p>Food Added:</p>
      <div className="">
        <div className=" hidden md:grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[15px] md:gap-[10px] py-[12px] px-[15px] border border-solid border-[#cacaca] text-[13px] bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[15px] md:gap-[10px] py-[12px] px-[15px] border border-solid border-[#cacaca] text-[13px]">
              <img src={`${url}/images/`+item.image} alt="" className="w-[80px]" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className="cursor-pointer text-[#d7442a] font-bold">X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
