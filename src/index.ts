import dotenv from "dotenv"
import app from "./app";

dotenv.config();

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})

//74:e2:0c:f1:ea:89