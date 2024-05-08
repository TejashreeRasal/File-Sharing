import mongoose from "mongoose";


const DBConnection = async () => {
    const MONGODB_URI =  `mongodb+srv://kbtug21178:kbtug21178@kbtug21178.l9rciis.mongodb.net/?retryWrites=true&w=majority&appName=kbtug21178`;
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected successfully');
    }catch (error) {
        console.error ('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
