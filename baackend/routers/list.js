const router= require("express").Router();
const User=require("../models/user");
const List= require("../models/list");

router.post("/addTask",async(req,res)=>
{
    try {
        const{title,body,email}=req.body;
        const existingUser=await User.findOne({email});
        console.log(req.body)
        if(existingUser)
        {
            const list = new List({title,body,user:existingUser});
            await list.save().then(()=>
            {
                res.status(200).json({list})
            });
            existingUser.list.push(list);
            existingUser.save();

    
        }
        
    } catch (error) {
       console.log(error); 
    }
   
});


//UPDATE 

router.put("/updateTask/:id",async(req,res)=>
{
    try {
        const{title,body,email}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
          const list = await List.findByIdAndUpdate(req.params.id,{title,body});
           list.save().then(()=> res.send("updated"));
          

    
        }
        
    } catch (error) {
       console.log(error); 

    }
   
});


//Delete
router.delete("/deleteTask/:id",async(req,res)=>
{
    try {
        const{email}=req.body;
        const existingUser=await User.findOneAndUpdate({email},{$pull:{list:req.params.id}});
        if(existingUser)
        {
          await List.findByIdAndDelete(req.params.id).then(()=>
            res.send("deleted"));
         

    
        }
        
    } catch (error) {
       console.log(error); 

    }
   
});


//GET ALL TASKS

router.get("/getAll/:id",async(req,res)=>
{
    try {
        const list =  await List.find({user:req.params.id});
        res.status(200).json({list});
    } catch (error) {
        
    }
})


module.exports = router;