import { TiArrowSortedDown } from "react-icons/ti";
import style from "../modules/App.module.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { createContext, useState } from "react";
import PDF from "./PDF";
import Exam from "./Exam";

export const Data:any = createContext(null)


function Topics() {


    const Mytopics = [{
        Title:"Introduction",
        isOpen:false,
        testMode:false,

    },
{
    Title:"Course Overview",
    isOpen:false,
    testMode:false,

},
{
    Title:"Course Overview",
    isOpen:true,
    testMode:true
},
{
    Title:"Course Exercise / Reference Files",
    isOpen:false,
    testMode:false,

},
{
    Title:"Code Editor Installation (Optional if you have one)",
    isOpen:false,
    testMode:false,

},
{
    Title:"Embedding PHP in HTML",
    isOpen:false,
    testMode:false,

},
{
    Title:"Defining Functions",
    isOpen:false,
    testMode:false,

},
{
    Title:"Function Parameters",
    isOpen:false,
    testMode:false,

},
{
    Title:"Return Values From Functions",
    isOpen:false,
    testMode:true,

},
{
    Title:"Global Variable and Scope",
    isOpen:false,
    testMode:false,

},
{
    Title:"Newer Way of creating a Constant",
    isOpen:false,
    testMode:false,

},
{
    Title:"Constants",
    isOpen:false,
    testMode:false,

},
]

const [pdf,setOpenPDF]:any = useState(false)
const [exam,setOpenExam]:any = useState(false)


  return (
    <>
<div className="sidebar text-black max-md:mt-15 max-md:my-0 max-md:mx-auto  max-md:w-[90%]">
        <h1 className='text-3xl font-semibold  '>Topics for This Course  </h1>
        <div className="video_range my-[20px]">
          <div className="wrapper  w-2/3 flex justify-end">
          <div className={`${style.user_range}`}>
            <span>You</span>
            <TiArrowSortedDown className='absolute text-[#ccc] bottom-[-13px]' />
          </div>
          </div>
        <div className="mt-4 overflow-hidden rounded-full bg-gray-200">

      <div className="h-2 w-2/3 rounded-full bg-[#41b69d]"></div>
    </div>
    <span className="w-2/3 flex justify-end mt-[13px]">63%</span>
        </div>
       
        <details
    className="group topic mt-[45px] p-[20px] border-[1px] border-[#ccc] [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex items-center justify-between gap-1.5 text-gray-900">
    <div className="main">
         <h1 className='text-2xl'>Week 1-4</h1>
         <p className='text-[#777]'>Advanced story telling techniques for writers: Personas, Characters & Plots</p>
         </div>
               <svg
        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <div className="items">
          {Mytopics.slice(0,6).map((e,a) => (
             <div key={a} className="item flex justify-between items-center py-[16px] border-b-[1px] border-b-[#ccc] cursor-pointer" onClick={() => {
                if (e.Title == "Embedding PHP in HTML"){
                    setOpenPDF(true)
                } else if (e.testMode){
                    setOpenExam(true)
                }
             }}>
             <div className="text flex gap-3 items-center">
             <IoDocumentTextOutline size={20} />
             <h1>{e.Title}</h1>
             </div>
             {e.testMode ? (
                 <div className="group flex gap-3 max-md:flex-col">
               <span className="rounded-md bg-green-100 px-2.5 py-0.5  text-md whitespace-nowrap text-green-700">
        Questions 10
      </span>
                 <span className="rounded-md bg-red-100 px-2.5 py-0.5 text-md whitespace-nowrap text-red-700">
         10 Minutes
      </span>
               </div>
             ) : (<MdOutlineLock />)}
            </div>
          ))}
         </div>
  
  </details>
        <details
    className="group topic mt-[45px] p-[20px] border-[1px] border-[#ccc] [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex items-center justify-between gap-1.5 text-gray-900">

    <div className="main">
         <h1 className='text-2xl'>Week 5-8</h1>
         <p className='text-[#777]'>Advanced story telling techniques for writers: Personas, Characters & Plots</p>
         </div>
      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

         <div className="items">
         {Mytopics.slice(6,Mytopics.length).map((e,a) => (
             <div key={a} className="item flex justify-between items-center py-[16px] cursor-pointer border-b-[1px] border-b-[#ccc] gap-7" onClick={() => {
                if (e.testMode){
                  setOpenExam(true)
                }
             }}>
             <div className="text flex gap-3 items-center">
<div className="icon">
<IoDocumentTextOutline size={20} />
</div>
             <h1>{e.Title}</h1>
             </div>
             {e.testMode ? (
                 <div className="group flex gap-3 max-md:flex-col">
               <span className="rounded-md bg-green-100 px-2.5 py-0.5  text-md whitespace-nowrap text-green-700">
        Questions 10
      </span>
                 <span className="rounded-md bg-red-100 px-2.5 py-0.5 text-md whitespace-nowrap text-red-700">
         10 Minutes
      </span>
               </div>
             ) : (<MdOutlineLock />)}
            </div>
          ))}
         </div>
  
  </details>
        </div>
     <Data.Provider value={{pdf,setOpenPDF,exam,setOpenExam}}>
     {pdf ? (
         <PDF />
       ):null}
       
     {exam ? (
         <Exam />
       ):null}
     </Data.Provider>
        </>
  )
}

export default Topics
