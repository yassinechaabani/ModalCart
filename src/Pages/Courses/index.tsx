import Course from "../../Components/Course"
import './index.css'
import { RootState } from "../../data/store"
import { useSelector } from "react-redux"

export default function Courses(){

    //We should get courses data from store using useSelector() 
    const {coursesData} =useSelector((state:RootState)=>state.courses)

   return (
    <div className="courses">
        {
            coursesData?.length>0 && coursesData?.map(({title,price,id})=>(
                   <Course title={title} price={price} id={id}/>
            ))
        }
    </div>
   ) 
}