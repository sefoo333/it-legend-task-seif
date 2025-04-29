import './App.css'
import Breadcrumb from './componants/Breadcrumb'
import Video_section from './componants/Video_section';
import Comments from './componants/Comments';
import Matrials from './componants/Matrials';
import Topics from './componants/Topics';
import { useEffect } from 'react';

function App() {
 
useEffect(() => {
  const data:any = localStorage.getItem("exam_data")
  if (!JSON.parse(data)){
    localStorage.setItem("exam_data" , JSON.stringify([]))
  }

  localStorage.setItem("videos" , JSON.stringify([{
    video:"https://youtu.be/DB6cE6TRh84?si=DY2ZlEn9-IIR5seH",
    id:1
  },{
    video:"https://www.facebook.com/share/v/15s9M3qamx/",
    id:2
  },
{
  video:"./assets/video.mp4",
  id:3
}
]))
},[])
  

  return (
    <>
      <div className="parent ">
      <div className="main text-black w-full  px-[250px]  py-[15px] max-2xl:px-[60px] max-xl:px-[40px]">
      <div className="container w-full flex   justify-center flex-col">

      <Breadcrumb />
      <h1 className='font-semibold text-5xl mt-[30px] mb-[5px] max-xl:text-4xl'>Starting SEO as your Home</h1>
      </div>
        </div>
      <div className="grid my-0 mx-auto grid-cols-3 max-xl:grid-cols-1 bg-white px-[250px] max-2xl:px-[60px] max-xl:px-[40px] w-fit max-xl:justify-items-center  max-xl:gap-0 gap-[50px]  py-[30px]" >
      <div className="content col-span-2">
        <div className="container w-full flex justify-center flex-col max-xl:w-[100vw]" style={{margin:"0 auto"}}>
      <Video_section />
      <Matrials />
      <div className='xl:hidden'>
      <Topics />
      </div>
      <Comments />
     
      </div>
      
        </div>
        <div className='max-xl:hidden'>
        <Topics />
        </div>

      

      

      
      </div>
      </div>
    </>
  )
}

export default App
