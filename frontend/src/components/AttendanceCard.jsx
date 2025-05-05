import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AttendanceCard() {
  const [fullName, setFullName] = useState("");
  const [time, setTime] = useState("");

  const createAttendance = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://ams-3jwl.onrender.com/create-attendance", {
        fullName: fullName,
        time: time,
      });

      toast.success("Attendance created successfully");
      setFullName("");
      setTime("");
      fetchAllAllattendance();
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("Failed to take your attendance");
    }
  };

  const [attendance, setAttendance] = useState(null);

  const fetchAllAllattendance = async () => {
    try {
      const res = await axios.get("https://ams-3jwl.onrender.com/get-all-attendance");
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
    try {
      await axios.delete(`https://ams-3jwl.onrender.com/delele-single-attendance/${_id}`);
      toast.success("Deleted successfully");
      fetchAllAllattendance();
    } catch (error) {
      console.log("something went wrong");
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Attendance Form */}
      <form
        onSubmit={createAttendance}
        className="bg-white border border-gray-200 p-6 rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Create Attendance</h2>

        <div className="flex flex-col space-y-1">
          <label htmlFor="Full Name" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            type="text"
            id="Full Name"
            placeholder="Enter your full name"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="Time" className="text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            type="text"
            id="Time"
            placeholder="Enter your entry time"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-5 rounded-md text-sm transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Attendance List */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Attendance Records</h2>

        {attendance?.length === 0 && (
          <p className="text-sm text-gray-500">No attendance records found.</p>
        )}

        <div className="space-y-4">
          {attendance?.map((eachAttendance, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 border rounded-md px-4 py-3"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-700">{index + 1}.</span>
                <span className="text-sm text-gray-800">{eachAttendance.fullName}</span>
                <span className="text-sm text-gray-500">{eachAttendance.time}</span>
              </div>
              <button
                onClick={() => deleteAttendance(eachAttendance._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-1.5 rounded-md transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
