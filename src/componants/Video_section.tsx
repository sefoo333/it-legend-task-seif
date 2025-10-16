import { MdOutlineLeaderboard } from "react-icons/md";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { BiComment } from "react-icons/bi";
import { TbUserQuestion } from "react-icons/tb";
import thumb from "../assets/thumb.png"
import video from "../assets/video.mp4"
import style from "../modules/App.module.css";
import ReactPlayer from 'react-player';
import {createContext, useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Leaderboard from "./Leaderboard";

export const Data2:any = createContext(false)

// (progress: number) => void
function Video_section() {


  const [FullTime , setFullTime] = useState(0)
  const [video_time , setTime] = useState(0)
  const [Watched , setDone] = useState(false)
  const [Sticked , setSticked] = useState(false)
  const [open2,setOpen2]:any = useState(false)



  useEffect(() => {
    const getData:string | any = localStorage.getItem("video_state");
    const transtoParse = JSON.parse(getData);
if(transtoParse){
  setDone(transtoParse.Watched)
} 
  },[localStorage.length])

  


  window.onscroll = function () {
if(window.scrollY >= 500){
setSticked(true)
} else {
setSticked(false)
}
  }



  useEffect(() => {
document.addEventListener("fullscreenchange", async () => {
     const element = document.fullscreenElement;
    if (element) {
      const orientation = (screen.orientation || (screen as any).orientation) as any;
      if (orientation && orientation.lock) {
        try {
          await orientation.lock('landscape');
          console.log("Rotated to landscape 🔄");
        } catch (err) {
          console.warn("Orientation lock not supported:", err);
        }
      }
    }

});
  },[])
 


  const CalcTime = (playedSeconds:number , ) => {

  const view_range = ((Math.floor(playedSeconds) / FullTime) * 100).toFixed()
  setTime(playedSeconds)
  if(+view_range > 80){
    setDone(true)
  }
console.log(Sticked)
  window.localStorage.setItem("video_state",JSON.stringify({
    video_time_all:FullTime,
    Video_state:Math.floor(video_time) ,
    Watched:Watched,
  }))
} 


const getLastTime = (e:{seekTo:(e:number , type?: "seconds" | "fraction") => void}) => {
   const time:string | any = localStorage.getItem("video_state");
      if (JSON.parse(time).Video_state){
        e.seekTo(JSON.parse(time).Video_state, "seconds");
      }
}

  return (
  <>
      <Data2.Provider value={{open2,setOpen2}}>
    <div className="section_video ">
     <div className={`group 
     duration-500 transition-all
    
     ${Sticked
      ? 'relative max-md:fixed max-md:left-[0px] max-md:top-0 max-md:w-full max-md:h-36  max-md:z-50'
      : 'relative px-[2px]'
  }
`}>
       {Watched ? (
         <IoIosCheckmarkCircle size={35}  className={`text-green-500 bg-white rounded-full right-[30px]  max-md:left-[16px] top-[40px] absolute  ${Sticked ? "max-md:top-[15px]" : "max-md:top-[50px]"} max-md:top-[22px] ${Sticked ? "max-md:right-[80px]" : "max-md:right-[33px]"}`} />
       ):null}
    <div className={`  w-full ${Sticked ? "max-md:h-75 max-sm:h-65 max-md:w-full " : "max-md:h-85"}`}>
    <ReactPlayer 



onReady={(e) =>getLastTime(e)} controls={true}  onProgress={(e:{playedSeconds:number}) => CalcTime(e.playedSeconds)} onDuration={(e) => {
  console.log(e)
  setFullTime(e)
}} style={{width:"100% !important"}}  width={"100%"} className={`object-cover max-md:!h-full max-md:w-[90%] !h-[600px] `} light={thumb} playIcon={<></>} url={video} />
    </div>
     </div>

      <div className="tools flex gap-[15px] py-[20px]">
        
      <div className={`${style.video_button}`}
      onClick={() => {
        setOpen2(true)
      }}
      >
      <MdOutlineLeaderboard />
        </div>
        <a href="#comments" className={`${style.video_button}`} >
<BiComment />
        </a>
        <div className={`${style.video_button}`}>
<LuMessageCircleQuestion />
        </div>
        <div className={`${style.video_button}`}>
<TbUserQuestion />
        </div>
      </div>
      </div>
      {open2 ? (
        <Leaderboard />
      ):null}
      </Data2.Provider>
  </>
  )
}

export default Video_section
