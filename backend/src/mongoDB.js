import mongoose from  "mongoose";







const MongoDB = async () =>{
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);
        if(response.ok){
            console.log(response)
        }
    } catch (error) {
        console.log("error",error)
    }
}




export default MongoDB;
