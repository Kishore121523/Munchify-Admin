import { useState } from "react"
import { assets } from "../../assets/assets"
import axios from "axios"
import { toast } from 'react-toastify';
interface AddProps{
  url:string
}

const Add = ({url}:AddProps) => {
  const [image, setImage] = useState<File | null>(null)
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const onChangeFieldHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e?.target.name;
    const value = e?.target.value;
    setData(data => ({...data, [name]:value}))

  };

  const onSubmiteHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", data.price)
    formData.append("category", data.category)
    if (image) {
    formData.append("image", image);
    }

    const response = await axios.post(`${url}/api/food/add`, formData)

    if (response.data.success){
      setData({
          name:"",
          description:"",
          price:"",
          category:"Salad",
      })
      setImage(null)
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className="w-[70%] ml-[max(5vw,_25px)] mt-[50px] font-[#6d6d6d] font-[16px]">
      <form className="flex flex-col gap-[20px]" onSubmit={onSubmiteHandler}>
          <div className="flex flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img 
                src={image?URL.createObjectURL(image):assets.upload_area} 
                className="w-[120px] md:w-[200px] cursor-pointer rounded-[10px]" 
                alt="" />
            </label>
            <input 
              onChange={handleImageChange} 
              className="rounded-[10px]"
              type="file" 
              id="image"
              name="image" 
              hidden 
              required />
          </div>

          <div className="flex flex-col gap-[10px] w-[max(40%,_280px)]">
            <p>Product Name</p>
            <input 
              onChange={onChangeFieldHandler} 
              name="name" 
              value={data.name} 
              className="p-[10px]" 
              type="text" 
              id="name" 
              placeholder="Enter product name" />
          </div>

          <div className="flex flex-col gap-[10px] w-[max(40%,_280px)]">
            <p>Product Description</p>
            <textarea 
              onChange={onChangeFieldHandler} 
              name="description" 
              value={data.description} 
              className="p-[10px]" 
              id="description" 
              rows={6} 
              placeholder="Enter product description" 
              required> 
            </textarea>
          </div>

          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <p>Product Category</p>
              <select 
                onChange={onChangeFieldHandler} 
                className="max-w-[120px] p-[10px]" 
                name="category" 
                id="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Product Price</p>
              <input 
                onChange={onChangeFieldHandler} 
                name="price" 
                value={data.price} 
                className="max-w-[120px] p-[10px]" 
                type="number" 
                id="price" 
                placeholder="20" />
            </div>
          </div>
          <button 
            type="submit" 
            className="max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer">
              Add
          </button>
      </form>
    </div>
  )
}

export default Add
