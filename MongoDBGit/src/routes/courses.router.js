import { Router } from "express";
import Courses from "../dao/dbManagers/courses.js";

const router =Router();
const coursesManager= new Courses();

router.get('/',async(req,res)=>{
    let courses=await coursesManager.getAll();
    res.send({status:"success",payload:courses})
})

export default router;