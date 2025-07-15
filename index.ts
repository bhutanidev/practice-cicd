import express from "express";

const app = express();

const todos = [
  {
    title: "Buy groceries",
    description: "Pick up milk, eggs, and bread from the supermarket."
  },
  {
    title: "Finish project report",
    description: "Complete the final section and send it to the team by 6 PM."
  },
  {
    title: "Workout",
    description: "Do a 30-minute full-body workout at the gym."
  },
  {
    title: "Read a book",
    description: "Read 20 pages of 'Atomic Habits' before bedtime."
  },
  {
    title: "Fix bug in login page",
    description: "Resolve the error causing incorrect validation on empty fields."
  }
]

app.get("/cpu", (req, res) => {

});
app.get("/",(req,res)=>{res.send("Helloo")})
app.get("/todos",(req,res)=>{
	res.json({todos})
})
app.listen(3000,()=>{
	console.log("Server running on port 3000")
})