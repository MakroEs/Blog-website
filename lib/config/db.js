import moongose from "mongoose";

 export const ConnectDB=async ()=>{
    await moongose.connect('mongodb+srv://MakroES:E402033e@cluster0.yssmu.mongodb.net/MAKROBLOG')
    console.log("DB Connectted")
}