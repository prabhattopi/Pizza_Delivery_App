import cookie from "cookie"

const handler=(req,res)=>{
 if(req.method==="POST"){
    const {username,password}=req.body;
    if(username===process.env.ADMIN_USERNAME && password===process.env.ADMIN_PASSWORD){
        res.setHeader("Set-Cookie",cookie.serialize("token",process.env.TOKEN,{
         maxAge:60*60,
         sameSite:"strict",
         path:'/',
         httpOnly:true
        
        })

        );
        res.status(200).json("Successful")
    }
    else{
        res.status(400).json("Worng Credential")
    }
 }
}

export default handler;