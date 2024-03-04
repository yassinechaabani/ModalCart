import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Layout from "../Components/Layout"
import ContactUs from "../Pages/ContactUs"
import Courses from "../Pages/Courses"
import HomePage from "../Pages/HomePage"
import NotFound from "../Pages/NotFound"
import SingleCourse from "../Pages/SingleCourse"

export default function AppRoutes(){

    return (
        <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/aboutus"/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route path="/courses/">
                    <Route path="" element={<Courses/>}/>
                    <Route path=":id" element={<SingleCourse/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Layout>
        </Router>
    )
}