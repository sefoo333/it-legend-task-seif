import { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Data2 } from './Video_section'

function Leaderboard() {
        const {setOpen2}:any = useContext(Data2)


        const comments = ["كمل اكتر عايزين نشوفك من ضمن الليدبورد المرة الجايية 🔥" , "كمل كلها خطوات وتوصل للهدف المطلوب متحمسين تبقا في الليدبورد المرة الجاي"]
    
  return (
     <div className="window fixed z-50 left-0 top-0 w-full h-full bg-[#292929b4]">

       <div className="loadboard p-[30px] bg-white text-black rounded-xl   h-fit w-[25%] max-md:w-[90%]  absolute left-1/2 top-1/2 translate-[-50%] z-9" >
        <div className="close flex justify-end cursor-pointer" onClick={() => {
        setOpen2((e:boolean) => !e)
       }}>
                <IoMdClose size={25} className='text-[#a3a3a3]' />
              </div>
<div className="title text-center text-2xl">
<h1 className='text-purple-900'>Course Shown Name Here</h1>
<h2 className='text-purple-950 font-semibold mt-1'>Leadboard</h2>
</div>
<div className="comment mt-5 flex gap-3 p-[15px] bg-slate-300 rounded-xl text-xl text-dir items-center  " style={{fontFamily:' "Cairo", sans-serif'}}>
  <h1 style={{direction:"rtl"}}>عاااش يا علي  ,{comments[Math.floor(Math.random() * 2)]}</h1>
  <div className="emoji text-6xl">
    💪
  </div>
</div>
<div className="leaderboard mt-16 flex flex-col gap-5">
  <div className="square w-full h-15  rounded-xl" style={{boxShadow:"0 0 20px 10px rgba(68,91,195,.1411764706)"}}></div>
  <div className="square w-full h-15  rounded-xl" style={{boxShadow:"0 0 20px 10px rgba(68,91,195,.1411764706)"}}></div>
  <div className="square w-full h-15 rounded-xl " style={{boxShadow:"0 0 20px 10px rgba(68,91,195,.1411764706)"}}></div>
  <div className="square w-full h-15 rounded-xl " style={{boxShadow:"0 0 20px 10px rgba(68,91,195,.1411764706)"}}></div>
</div>
</div>
        
      </div> 
  )
}

export default Leaderboard
