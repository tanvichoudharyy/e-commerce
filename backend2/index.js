const express=require("express")
const mongoose= require("mongoose")
const userRoute=require('./route/User.js')
const bookRoute=require('./route/Book.js')
const cors=require('cors')

const app =express()
const PORT=4000

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user',userRoute);

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const mongConnection=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bookPractical")
        console.log("connected to database")
    } catch (error) {
    console.log("error in connecting DB:", error);
    }
}

mongConnection()