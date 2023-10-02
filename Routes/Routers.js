import express from 'express';
const app= express();
import {postAll,getAll,deleteId,getById,updateById} from '../Controllers/controll.js';
const Route=express.Router();

Route.get('/get',getAll)
Route.post('/post',postAll)
Route.get('/get/:id',getById)
Route.put('/update/:id',updateById)
Route.delete('/delete/:id',deleteId)


export default Route ; 
