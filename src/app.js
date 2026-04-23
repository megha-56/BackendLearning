import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app =express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))



//routes import ,"userRouter" is "router" in the user.routes.js file, we just imported as diff name ,becuase export was default
import userRouter from "./routes/user.routes.js";

//routes declaration,here when we go on route /api/v2/users , so control will get passed to the "userRouter" 
app.use("/api/v1/users",userRouter)//we are using app.use , because we have written the routes in separate file so iddleware is needed
////http://localhost:8000/api/v1/users/register



export default app