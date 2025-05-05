import express from "express"
import mongoose from "mongoose"
import cors from "cors"


// 1 server configuration
const app= express()

//2middlewsare
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
    // origin : ["http://localhost:5173", "knatipur.com"]  if we add new one
}))



 // 3db connestion 

 try {

    mongoose.connect("mongodb+srv://karkiamit036:T8vC3SIGRcssKWCZ@cluster0.s3wezzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("database connected successfull")
 } catch (error) {
    console.log("couldnot connext to dtabase, error")
 }

//5 make the attendanance  schema table

const attendananceSchema = mongoose.Schema({
  fullName : {type: String, required:true},   
  time : {type:String, required:true}

})

const Attendance = mongoose.model("Attendance",attendananceSchema )


//6 create attendance

app.post("/create-attendance", async (req, res)=>{
  try {
    
    const newlyCreatedAttendance = await Attendance.create(req.body)

    return res.status(201).json({
      success: true,
      msg: " your attendance has been recorded",
      data: newlyCreatedAttendance
    })
   
    
  } catch (error) {

    return res.status(500).json({
      success: false,
      msg: "something went wrong",
      data: null,
      error
    })
    
  }
})

//7 get all attendance
app.get("/get-all-attendance", async (req, res)=>{
  try {

    const allAttendance = await Attendance.find()
    return res.status(200).json({
      success: true,
      msg: " all attendance fetched successfully",
      data:allAttendance
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something went wrong",
      data: null,
      error
    })
  }
})

//8get single attendane
app.get("/get-single-attendance/:id", async (req, res)=>{
  try {

    const singleAttendance = await Attendance.findById(req.params.id)

    if (!singleAttendance) {
      return res.status(404).json({
        success: false,
        msg: "The attendance you are lookinf does not exist",
        data: null
      })
    }
    return res.status(200).json({
      success: true, 
      msg: "single attendance fetch successfully",
      data: singleAttendance
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something went wrong",
      data: null,
      error
    })
  }
})

//9 update attendance
app.patch("/update-attendance/:id", async (req, res)=>{

  try {

    const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.id, req.body , {new:true})
    return res.status(200).json({
      success: true,
      msg: "Your attendance has been updated",
      data:updatedAttendance
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something went wrong",
      data: null,
      error
    })
  }
})

//10 delete attendance
app.delete("/delele-single-attendance/:id", async (req, res)=>{

  try {

    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id)

    if(!deletedAttendance){
      return res.status(404).json({
        success: false,
        msg: "The attendnce you are trying to delte doesnot exist",
        data:null
      })
    }


    return res.status(200).json({
      success: true,
      msg: "Your attendance has been deleted",
      data: deletedAttendance
    })    

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something went wrong",
      data: null,
      error
    })
  }
})
 





//4 expose the port 
app.listen(5000,()=>{
    console.log("server is running at 5000")
})
