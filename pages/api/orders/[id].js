import dbConnect from "../../../util/mongo"

import Order from "../../../models/Order"

const handler =async(req,res)=>{
    
    const {method,query:{id}}=req;

    await dbConnect()

    if(method==="GET"){
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
          } catch (err) {
            res.status(500).json(err);
          }

    }
    if(method==="PUT"){
      try{
        const product=await Order.findByIdAndUpdate(id,req.body,{
          new:true
        })
        res.status(201).json(product)
          }
          catch(err){
              res.status(500).josn(err)
          }
      
        
    }
    if(method==="DELETE"){
        
    }
}

export default handler