
// const users = [
//     {
//         name: 'Mattia',
//         surname: 'Parisi',
//         email: 'mattiaparisi@gmail.com',
//         id: 0
//     },
//     {
//         name: 'Alessia',
//         surname: 'Ciccarello',
//         email: 'alessiaciccarello@gmail.com',
//         id: 1
//     },
//     {
//         name: 'Ciccio',
//         surname: 'Belo',
//         email: 'cicciobelo@gmail.com',
//         id: 2
//     },
//     {
//         name: 'Santo',
//         surname: 'Terranova',
//         email: 'santoterranova@gmail.com',
//         id: 3
//     },
//     {
//         name: 'Damiano',
//         surname: 'Pulvirenti',
//         email: 'damianopulvirenti@gmail.com',
//         id: 4
//     },
//     {
//         name: 'Enrico',
//         surname: 'Bruno',
//         email: 'enricobruno@gmail.com',
//         id: 5
//     },
//   ];
import userModel from '../Module/module.js'
export const postAll=async (req,res)=>{
    console.log(req.body); // Testing the route hit
    try {
        const newUser =new userModel(req.body)
        await newUser.save()
        res.status(200).json({ newUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const getAll= async(req,res)=>{
    const user= await userModel.find();
    res.status(200).json(user);
}
export const getById= async(req,res)=>{
    try{
        const { id }=req.params;
        const findId= await userModel.findById(id)
        console.log(findId)
        res.status(200).json(findId)
    }catch(error){
        res.status(404).send(error)
    }
}
//update user
export const updateById= async (req,res) => {
         const { id }= req.params;
         const {email}=req.body;
        //  const findAndReplace= await userModel.findByIdAndUpdate(id,{email},{new:true});
         const findAndReplace = await userModel.findByIdAndUpdate(id, { email }, { new: true });
         try{
            if(!findAndReplace){
              res.status(404).send({ message:"User Not found",success:false})
            }else{
                res.status(200).send({message: " updated succesfully",success:true})
            }
         }catch(eroor){
            console.log(error)
            res.status(500).send({message:"Internale server error", success:false})
         }
}
// delete user
export const deleteId=async (req,res) =>{
    try{
        const { id } = req.params;
        console.log(id)
        const resultId= await userModel.findByIdAndDelete(id)
        res.status(204).send("Deleted successfully");
      } catch (error) {
        res.status(500).json({message:error.message})
      }
}
    
