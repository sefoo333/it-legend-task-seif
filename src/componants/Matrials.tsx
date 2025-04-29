import { CiClock2 } from "react-icons/ci";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineAttachMoney, MdOutlinePlayLesson } from "react-icons/md";
import { PiCertificateBold, PiStudentBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

function Matrials() {

    const matriales = [{
        Name:'Duration',
        value:"3 weeks",
        icon:<CiClock2 />
      },
      {
        Name:'Lessons',
        value:"8",
        icon:<MdOutlinePlayLesson  />
      },
      {
        Name:'Enrolled ',
        value:"65 students",
        icon:<PiStudentBold  />
      },
      {
        Name:'Language',
        value:"English",
        icon:<TbWorld  />
      },
      {
        Name:'Instructor',
        value:"Mohamed Ali",
        icon:<LiaChalkboardTeacherSolid />
      },
      {
        Name:'Certificate',
        value:"Yes",
        icon:<PiCertificateBold  />
      },
      {
        Name:'Price',
        value:"80$",
        icon:<MdOutlineAttachMoney  />
      },
      {
        Name:'Duration',
        value:"3 weeks",
        icon:<CiClock2 />
      },
      ]

  return (
    <div className="course_matirals text-black  w-full  max-md:my-0 max-md:mx-auto  max-md:w-[90%]">
    <h1 className='text-3xl font-semibold mt-[50px] '>Course Materials</h1>
    <div className="items grid grid-cols-2 max-md:grid-cols-1 gap-[20px] mt-[20px] w-full bg-white p-[30px]" style={{boxShadow:"0px 0px 20px #00000010"}}>
      {matriales.map((e:{Name:string,value:string,icon:React.ReactNode} , a) => (
      <div key={a} className={`element flex text-[18px]  w-full justify-between items-center  ${a == 6 || a == 7 ? "max-md:border-b-[1px] max-md:border-b-gray-300" : "border-b-[1px] border-b-gray-300"}`}>
    <div className="multipe flex items-center gap-[15px] p-4 ">
   <div className="icon text-2xl">
   {e.icon}
   </div>
    <h1>{e.Name}</h1>
    </div>
        <h1 className='font-medium text-nowrap'>{e.value}</h1>
      </div>
      ))}
    </div>
  </div>
  )
}

export default Matrials
