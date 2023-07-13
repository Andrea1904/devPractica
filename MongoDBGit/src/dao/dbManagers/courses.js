import courseModel from "../models/courses.js";

export default class Courses{
    constructor(){
        console.log("Estamos trabajando con mongo")
    }
    getAll=async()=>{
        let courses= await courseModel.find().lean() // busqueda
        return courses
        
     
      /*
        let courses= await courseModel.updateOne()
        let courses= await courseModel.updateMany()

        let courses= await courseModel.insertOne()
        let courses= await courseModel.insertMany().find()

        let courses= await courseModel.deleteOne()
        let courses= await courseModel.deleteMany()*/
        
    }
}