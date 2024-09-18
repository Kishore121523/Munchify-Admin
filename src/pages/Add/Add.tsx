import { useState } from "react"
import { assets } from "../../assets/assets"

const Add = () => {
  const [image, setImage] = useState<File | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,_25px)] mt-[50px] font-[#6d6d6d] font-[16px]">
      <form className="flex flex-col gap-[20px] ">
          <div className="flex flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image?URL.createObjectURL(image):assets.upload_area} className="w-[120px] md:w-[200px] cursor-pointer" alt="" />
            </label>
            <input onChange={handleImageChange} type="file" id="image" hidden required />
          </div>
          <div className="flex flex-col gap-[10px] w-[max(40%,_280px)]">
            <p>Product Name</p>
            <input className="p-[10px]" type="text" name="name" id="name" placeholder="Enter product name" />
          </div>
          <div className="flex flex-col gap-[10px] w-[max(40%,_280px)]">
            <p>Product Description</p>
            <textarea className="p-[10px]" name="description" id="description" rows={6} placeholder="Enter product description" required></textarea>
          </div>
          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <p>Product Category</p>
              <select className="max-w-[120px] p-[10px]" name="category" id="category">
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
              <input className="max-w-[120px] p-[10px]" type="number" name="price" id="price" placeholder="$20" />
            </div>
          </div>
          <button type="submit" className="max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer">Add</button>
      </form>
    </div>
  )
}

export default Add
