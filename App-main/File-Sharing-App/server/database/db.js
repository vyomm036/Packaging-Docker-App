import mongoose from "mongoose";
const DBConnection = async ()=>{
    try {
       await mongoose.connect('mongodb+srv://22it111:shrey%40123@cluster0.ui854.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser : true})
        console.log('Databse connected');
    } catch (error) {
        console.error('Error while connecting with database',error.message);
    }
}

export default DBConnection;