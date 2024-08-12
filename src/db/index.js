import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const Connectdb =async ()=>{
  try{
  
    const ConnectionInstance = await mongoose.connect
    (`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`CONNECTED AT : ${ConnectionInstance.connection.host}`);
  }
  catch(error){
     console.log("Error during Connection",error);
     process.exit(1); //shows process exited due to an issue 
     
  }
}

export default Connectdb