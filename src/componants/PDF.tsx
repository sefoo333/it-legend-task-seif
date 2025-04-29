 import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Data } from "./Topics";

function PDF() {
    const {setOpenPDF}:any = useContext(Data)
  return (
    <div className="window fixed z-50 left-0 top-0 w-full h-full bg-[#292929b4]">
    <div className="popup p-[30px] bg-white rounded-xl   h-fit w-[30%] max-md:w-[90%]  absolute left-1/2 top-1/2 translate-[-50%] z-9">
       <div className="close flex justify-end cursor-pointer" onClick={() => setOpenPDF((e:boolean) => !e)}>
         <IoMdClose size={25} className='text-[#a3a3a3]' />
       </div>
         <iframe className='w-full h-[700px] max-md:h-[550px] mt-4'
         src="https://drive.google.com/file/d/1dWch_QClmxO1QNvsr742WoGm3LQYFLmZ/preview" 
         width="640" 
         height="480" 
         allow="autoplay"
         ></iframe>
     </div>
    </div>
  )
}

export default PDF
