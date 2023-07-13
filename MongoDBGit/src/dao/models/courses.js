import mongoose from 'mongoose';

const courseCollection ='courses';

const courseSchema= mongoose.Schema({
     title:{
        type:String,
        require:true
     },
     description:{
        type:String,
        require:true
     }
})

const courseModel =mongoose.model(courseCollection,courseSchema)
export default courseModel;
