import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { courses } from "../../util/constant"
import './index.css'

export default function SingleCourse(){

    const {id}=useParams()

    const course=courses?.find((el)=>el.id === Number(id))
    useEffect(()=>{
        if (Number(id)>1){
            toast.success('aa',{position:'top-center'})
            toast.error('aa',{position:'bottom-right'})
            toast.info('aa')
        }
    },[id])
   
    return (
        <div className="single-course-container">
        <h1>SINGLE COURSE PAGE</h1>
            <h1>COURSE TITLE : {course?.title}</h1>
            <h1>COURSE PRICE: {course?.price}</h1>
            <h1>COURSE DURATION: {course?.duration}</h1>
            <h1>COURSE DESCRIPTION: {course?.description}</h1>
        </div>
    )
}