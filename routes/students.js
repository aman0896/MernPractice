const express = require("express");
const studentRouter = express.Router();
const StudentSchema = require("../DBConnect/DBModel/Students");

//CRUD Operation c = create, r = read, u = update, d = delete

//add student details
studentRouter.post("/add", async (req, res) => {
  const studentDetails = req.body;
  if (studentDetails) {
    const result = await new StudentSchema(studentDetails);
    result.save((err, result) => {
      try {
        if (err) {
          return res.status(400).json({ msg: err.message });
        } else {
          return res.status(201).json({ msg: "Student Added Successfully" });
        }
      } catch {}
    });
  }
});

//get list of student
studentRouter.get("/student-list", async (req, res) => {
  const studentData = await StudentSchema.find();
  if (studentData) {
    return res.status(200).json(studentData);
  } else {
    return res.status(404).json({ msg: "details not found" });
  }
});

//get list of student by id
studentRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const studentData = await StudentSchema.findById(id);
  if (studentData) {
    return res.status(200).json(studentData);
  } else {
    return res.status(404).json({ msg: "details not found" });
  }
});

//update student details
studentRouter.patch("/update-student", async (req, res) => {
  const { id, ...rest } = req.body; //desctructure

  const studentData = await StudentSchema.findByIdAndUpdate(id, {
    ...rest,
  });
  if (studentData) {
    return res.status(200).json({ msg: "student details updated" });
  } else {
    return res.status(404).json({ msg: "student details update fail" });
  }
});

//update student details
studentRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params; //desctructure

  console.log(id, "id");

  const studentData = await StudentSchema.findByIdAndDelete(id);
  if (studentData) {
    return res.status(200).json({ msg: "student details deleted" });
  } else {
    return res.status(404).json({ msg: "student details delete fail" });
  }
});

module.exports = studentRouter;
