import {  useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io"
import { Data } from "./Topics";
import { IoClose } from "react-icons/io5";
import CheckBox from "./CheckBox";
import { LuAlarmClock } from "react-icons/lu";

function Exam() {

const {setOpenExam}:any = useContext(Data)
    const [timer , setTimer] = useState("00:00");
const [seconds,setSeconds] = useState(60);
const [mins,setMins] = useState(15);
const [solutions , setSolutions]:any = useState([])

const [question,setQuestion] = useState(0)

useEffect(() => {
  const setInter = setInterval(() => {
if (seconds > 0){
      setSeconds((e) => e - 1)
}
    if (seconds <= 0){
  setMins((e) => e - 1)
  setSeconds(3)
}

setTimer(`${mins < 10 ? `0${mins}` : mins}:${seconds < 10 ? `0${seconds}` : seconds}`)
},1000)

if (mins == 0 && seconds == 0){
  clearInterval(setInter)
  setTimer(`00:00`)
  console.log(0)
}
  return () => clearInterval(setInter)
})

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





useEffect(() => {
const data_exam:any = localStorage.getItem("exam_data")
const time_exam:any = localStorage.getItem("timeExam")
const transtoParse = JSON.parse(data_exam);
console.log(transtoParse.length )
if (transtoParse && transtoParse.length >= 1){
    setSolutions(transtoParse)
    setQuestion(transtoParse[transtoParse.length - 2].idQuestion)
    setSeconds(time_exam.split(":")[1])
     setMins(time_exam.split(":")[0])
    setTimer(`${mins}:${seconds}`)
    console.log(timer)
  }
},[])


const calcQuestion =  (a:number) => {

  const filter = solutions.filter((e:{idQuestion:number}) => e.idQuestion === exam[question].id)

  if (filter.length === 0){
    solutions.push({
      Solution:exam[question].solutions[a],
        idQuestion:exam[question].id,
        current:a
    });
    setSolutions(solutions)
        localStorage.setItem("exam_data" , JSON.stringify(solutions))
  } else {
    const editInSolution = solutions.map((e:{idQuestion:number}) => e.idQuestion === exam[question].id ? {...e , Solution:exam[question].solutions[a] , current:a} : e);
    setSolutions(editInSolution)
    localStorage.setItem("exam_data" , JSON.stringify(editInSolution))
  }
}







  return (
      <div className="window fixed z-50 left-0 top-0 w-full h-full bg-[#292929b4]">

        <div className="exam p-[30px] bg-[#445bc3] rounded-xl   h-fit w-[500px] max-md:w-full max-md:h-full  absolute left-1/2 top-1/2 translate-[-50%] z-9">
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
        <div className="time flex justify-center items-center" >
<div  className="main flex font-semibold gap-2 text-2xl justify-center rounded-xl py-[10px] h-fit px-[25px] bg-yellow-300" style={{boxShadow:"0 0 50px 20px hsla(0,0%,100%,.2)"}}>
<LuAlarmClock  />
<h1>{timer}</h1>
</div>
        </div>
        <div className="questions flex  justify-center gap-5 mt-[30px] ">
         
        
           {Array.from(Array(exam.length) , (_e, a )=> (
      <div onClick={() => {setQuestion(a)}} className={`item cursor-pointer  p-[10px] w-[50px] flex justify-center items-center h-[50px] rounded-full border-2 border-[#b8c0e7] ${question == a ? "bg-white text-black" : "text-white"}`}>
      {a+1}
    </div>
      ))}
        </div>
        <div className="window text-black  p-[15px] bg-white rounded-xl mt-5">
    <div className="question w-full">
         <div className="title_question text-2xl">
          <h1>{question + 1}.</h1>
          <p>
          {exam[question]?.Question}
          </p>
          </div>
          <div className="solutions mt-10 flex flex-col gap-6">
{exam[question]?.solutions.map((e,a) => (
    <div className={`solution flex justify-start gap-2  rounded-md duration-500 ${solutions[question]?.current === a ? "bg-[#5d7aff] text-white" : "bg-white"}`} key={a} onClick={() => {
      calcQuestion(a)      
    }} style={{boxShadow:"0 0 20px 10px rgba(68,91,195,.1411764706)"}}>
    <div className="check border-r-[1px] w-[50px] flex items-center   justify-center border-r-[rgba(160,160,160,.3019607843)]">    
    <CheckBox name={a.toString()} event={() => calcQuestion(a)} index={solutions[question]?.current === a} />
    </div>
    <div className="text p-5">
    <label htmlFor='sol_one' className='text-xl '>{e}</label>
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
