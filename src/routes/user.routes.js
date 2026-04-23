import {Router} from "express"; //import router from express
import  {registerUser}  from "../controllers/user.controller.js";

const router = Router() //just like we have made app in express , make router in Router

router.route("/register").post(registerUser) // now we will telll router as "router.route.apply("nextPathName".post("the_function_we_want_to_show"))" 
//http://localhost:8000/api/v1/users/register

export default router ;