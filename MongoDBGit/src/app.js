import express from 'express';
import mongoose from 'mongoose';
import viewRouter from './routes/views.router.js'
import courseRouter from './routes/courses.router.js'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app=express();

mongoose.set('strictQuery',false)

const connection = mongoose.connect('mongodb+srv://andrealopez1904:12345@pruebasatrack.o5jdvvx.mongodb.net/?retryWrites=true&w=majority')

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
app.use('/',viewRouter)
app.use('/api/course',courseRouter);

const server =app.listen(8080,()=>console.log("Server Arriba"))