import { v2 as cloudinary} from "cloudinary"; //FOR UPLOADING ON CLOUDINARY
import fs from "fs" //FILE SYSTEM , HELP TO READ,WTITE,REMOVE FILES ETC, can use unlinkSync To unlink a file

//congiguration,it gives permission, otherwise how would you know who is the user
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_CLOUD_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary=async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response=await cloudinary.uploader.upload
        (localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file has been uploaded on cloudinary",response.url);
        return response;
    }catch(error){
         fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation got failed 
         return null;
    }
}

export {uploadOnCloudinary}


