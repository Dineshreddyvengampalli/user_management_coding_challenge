import { connect } from 'mongoose';
import { connection } from "mongoose";




export const dbConnection = async()=>{
    await connect('mongodb://127.0.0.1:27017/test')

}

connection.on('connected',()=>{
    console.log('connected to database')
})

connection.on("error", (error) => {
    console.error("error", error);
});

connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
});