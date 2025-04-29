import { FaLongArrowAltRight } from "react-icons/fa"
import image from "../assets/image.png"
import imag2 from "../assets/image2.jpg"
import image3 from "../assets/image3.png"
import { useEffect, useState } from "react"
function Comments() {

  const comments = [{
    Name:"Seifeldeen Ali",
    image:image
  },
  {
    Name:"Ali Mohamed",
    image:imag2
  },
  {
    Name:"Gamal Mostafa",
    image:image3
  },
]


const [saved,setSaved] = useState("")

const saveComment = (e:string) => {
  if (e !== ""){
    localStorage.setItem("comment_on_writing" , JSON.stringify(e));
  }
}

useEffect(() => {
  const save:any = localStorage.getItem("comment_on_writing");
  if (JSON.parse(save) !== ""){
    setSaved(JSON.parse(save))
  }
},[])
  return (
    <div className="comments_section text-black  max-md:my-0 max-md:mx-auto  max-md:w-[90%]" id="comments">
    <h1 className='text-3xl font-semibold mt-[70px] '>Comments</h1>
    <div className="content w-full mt-[25px] flex flex-col gap-[90px]">
     <div className="comments">
    
      {comments.map((e , a) => (
         <div key={a} className="comment border-b-[1px] border-b-gray-300 py-[35px] pb-[40px]">
         <div className="text flex gap-9 items-start">
          <img src={e.image} className='w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px] object-cover rounded-full' alt="test" />
        <div className="text flex flex-col ">
      <div className="two mb-4">
      <h1 className='text-xl font-semibold'>{e.Name}</h1>
      <span className='text-[17px] font-medium text-gray-500'>Oct 10,2021</span>
      </div>
          <p className='w-full text-[#939393]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
         </div>
        </div>
      ))}
     </div>
    <form action="" onSubmit={(e) => {
      e.preventDefault()
localStorage.setItem("comment_on_writing" , JSON.stringify(""))
    }}>
      <textarea defaultValue={saved} onChange={(e) => {
        saveComment(e.target.value)
      }} className='w-full h-[180px] bg-white p-[20px] ' name="comment_massege" id="massege" style={{boxShadow:"0px 0px 20px #00000010"}} placeholder='write a comment'></textarea>
      <div className="button flex py-[20px] text-xl mt-[10px] px-[25px] items-center gap-[10px] bg-[#41b69d] text-white w-fit rounded-md cursor-pointer">
      <input type="submit" className="cursor-pointer" value="Submit Review" />
<FaLongArrowAltRight />
      </div>
    </form>
    </div>
    </div>
  )
}

export default Comments
