import { Router } from "express";
import Courses from "../dao/dbManagers/courses.js";

const coursesManager= new Courses();

const router =Router ();

router.get('/',async(req,res)=>{
    let courses=await coursesManager.getAll();
    console.log(courses)
    res.render('courses',{courses})
})
export default router;