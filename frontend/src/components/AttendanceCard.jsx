import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AttendanceCard() {
  const [fullName, setFullName] = useState("");
  const [time, setTime] = useState("");
  console.log(fullName);
  console.log(time);

  const createAttendance = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/create-attendance", {
        fullName: fullName,
        time: time,
      });

      toast.success("Attendance create successfully");
      setFullName("");
      setTime("");
      fetchAllAllattendance()
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("Failed to take your attendance");
    }
  };

  // FETCHED ALL ATTENTION

  const [attendance, setAttendance] = useState(null);

  const fetchAllAllattendance = async () => {
    try {
      const res = await axios.get("http://localhost:5000/get-all-attendance");
      console.log(res.data.data);
      setAttendance(res.data.data);
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("Unable to fetch all attendance");
    }
  };

  

  useEffect(() => {
    fetchAllAllattendance();
  }, []);

  const deleteAttendance = async (_id) => {
    // console.log(_id)
    try {
      const res = await axios.delete(`http://localhost:5000/delele-single-attendance/${_id}`)
      toast.success("Delete successfully")
      fetchAllAllattendance()
    } catch (error) {
      console.log("something went wrong")
      toast.error("Delete Failed")
    }
  };

  return (
    <div>

    {/* // attendancecreate form */}
      <form
        onSubmit={createAttendance}
        className="w-4/12 border border-gray-200 p-8 space-y-2 mx-auto shadow-xl"
      >
        {/* <p>{fullName} {time}</p> for the check */}
        <div className="flex flex-col">
          <label htmlFor="Full Name">Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            type="text"
            id="Full Name"
            placeholder="Enter your full name"
            className="border border-gray-200 outline-0 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Time">Time</label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            type="text"
            id="Time"
            placeholder="Enter your entry time"
            className="border border-gray-200 outline-0 px-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-600 text-white py-1.5 px-6 rounded-md "
          >
            Create Attendance
          </button>
        </div>
      </form>

      {/* attendance table */}

     

        {
          attendance?.map((eachAttendance, index)=>(
            <div key={index} className="flex items-center gap-4 mb-4">

            <p>{index + 1 }</p>
            <p>{eachAttendance.fullName}</p>
            <p>{eachAttendance.time}</p>
            <p>{eachAttendance._id}</p>
            <button onClick={()=>deleteAttendance(eachAttendance._id)} className="text-white bg-red-500 text-sm px-4 py-1 rounded-md">Delete</button>
           
          </div>
          ))
        }



    </div>
  );
}
