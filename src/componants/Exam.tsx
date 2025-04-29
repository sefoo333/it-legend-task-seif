import { useContext, useEffect, useState } from "react";
import { CiAlarmOn } from "react-icons/ci"
import { IoIosArrowBack } from "react-icons/io"
import { Data } from "./Topics";
import { IoClose } from "react-icons/io5";

function Exam() {

const {setOpenExam}:any = useContext(Data)
    const [timer , setTimer] = useState("00:00");


  let seconds = 60;
  let mins = 15;
useEffect(() => {
  if (mins <= 0){
    clearInterval(0)
  }
 return () =>  {setInterval(() => {
    seconds--
  
    if (seconds <= 0 && mins >= 1){
      seconds = 5
      mins--
    }
    
    setTimer(`${mins}:${seconds}`)
    
  },1000)
}
  
},[])


const exam = [{
    Question:"Among the following states of India, which one has the oldest rock formations in the country?",
    solutions:["Solution1" , "Solution2" , "Solution3" , "Solution4"],
    id:1
},
{
    Question:"Among the following states of India, which one has the oldest rock formations in the country?2",
    solutions:["Solution1" , "Solution2" , "Solution3" , "Solution4"],
    id:2
},
{
    Question:"Among the following states of India, which one has the oldest rock formations in the country?3",
    solutions:["Solution1" , "Solution2" , "Solution3" , "Solution4"],
    id:3
}
,{
    Question:"Among the following states of India, which one has the oldest rock formations in the country?4",
    solutions:["Solution1" , "Solution2" , "Solution3" , "Solution4"],
    id:4
},
]




const [solutions , setSolutions]:any = useState([])

const [question,setQuestion] = useState(0)

useEffect(() => {
const data_exam:any = localStorage.getItem("exam_data")
const time_exam:any = localStorage.getItem("timeExam")
const transtoParse = JSON.parse(data_exam);

if (transtoParse && transtoParse.length > 1){
    setSolutions(transtoParse)
    setQuestion(transtoParse[transtoParse.length - 1].id)
    seconds = time_exam.split(":")[1]
    mins = time_exam.split(":")[0]
    setTimer(`${mins}:${seconds}`)
    console.log(timer)
  } else {
    localStorage.setItem("exam_data" , JSON.stringify([{}]))
  }
  if (transtoParse && transtoParse.length >= 4){
    localStorage.setItem("exam_data" , JSON.stringify([]))
  }
},[])



  return (
      <div className="window fixed z-50 left-0 top-0 w-full h-full bg-[#292929b4]">

        <div className="exam p-[30px] bg-[#445bc3] rounded-xl   h-fit w-[25%] max-md:w-[30rem] max-md:w-full max-md:h-full  absolute left-1/2 top-1/2 translate-[-50%] z-9">
        <div className="close absolute cursor-pointer" onClick={() => {
    if (question <= 0){
      setOpenExam(false)
      window.localStorage.setItem("timeExam" , timer)
    }else {
        setQuestion((e) => e - 1)
    }
}}>
<IoIosArrowBack size={25} className='text-[#a3a3a3]' />
        </div>
        <div className="close absolute cursor-pointer right-5" onClick={() => {
           
           setOpenExam(false)
           window.localStorage.setItem("timeExam" , timer)

}}>
<IoClose size={25} className='text-[#a3a3a3]' />
        </div>
        <div className="time flex justify-center " >
<div  className="main flex items-center font-semibold gap-2 text-2xl justify-center rounded-xl py-[10px] px-[25px] bg-yellow-300" style={{boxShadow:"0 0 50px 20px hsla(0,0%,100%,.2)"}}>
<CiAlarmOn />
<h1>{timer}</h1>
</div>
        </div>
        <div className="questions flex justify-center gap-5 mt-[30px] ">
         
        
           {Array.from(Array(exam.length) , (_e, a )=> (
      <div className={`item  p-[10px] w-[50px] flex justify-center items-center h-[50px] rounded-full border-2 border-[#a3a3a3] ${question == a ? "bg-white text-black" : "text-white"}`}>
      {a+1}
    </div>
      ))}
        </div>
        <div className="window text-black  p-[15px] bg-white rounded-xl mt-5">
    <div className="question w-full">
         <div className="title_question text-2xl">
          <h1>{question + 1}.</h1>
          <p>
          {exam[question].Question}
          </p>
          </div>
          <div className="solutions mt-10 flex flex-col gap-6">
{exam[question].solutions.map((e,a) => (
    <div className="solution flex justify-start gap-2    rounded-md" style={{boxShadow:"0 0 20px 10px rgba(68,91,195,.1411764706)"}}>
    <div className="check border-r-[1px] w-[50px] flex items-center   justify-center border-r-[rgba(160,160,160,.3019607843)]">
    <input type="checkbox" className=' size-5 my-0.5 bg-transparent rounded border-gray-300 shadow-sm'  name="" id="sol_one" onChange={(e) =>{
      if(question == exam.length){
        window.localStorage.setItem("timeExam" , timer)
      }
        setSolutions([...solutions,{
            solution: exam[question].solutions[a],
            id:exam[question].id
        }])
        window.localStorage.setItem("exam_data" , JSON.stringify(solutions))
            setQuestion((e) => e + 1)
            setTimeout(() => {
                e.target.checked = false
            },100)
            if(question == exam.length - 1){
              setOpenExam(false)
            }
        
    }} />
    </div>
    <div className="text p-5">
    <label htmlFor='sol_one' className='text-xl font-medium'>{e}</label>
    </div>
    </div>
))}

          </div>
    </div>
         </div>
       </div>
      </div> 
  )
}

export default Exam
