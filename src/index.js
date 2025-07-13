// import express from "express"
// import cors from "cors"
import dotenv from "dotenv"
// import pool from "./config/db.js"
import pkg from "pg";
const {Client}= pkg
dotenv.config()

console.log("Hi from index.js")

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,
})  

client.connect()

client.query('SELECT * FROM public."Users" ', (err, res)=>{
  if(!err){
    console.log(res.rows)   
  }
  else{
    console.error(err.message)
  }
  client.end()
})


// const app = express()

// const PORT = process.env.PORT || 3001

// //Middleware    

// app.use(express.json())
// app.use(cors())

// // Routes

// // Error handling middleware

// //Test [pstgres cpnnection

// app.get("/", async(req, res) => {
//   const result = await pool.query("SELECT current_database()")   
//   res.send("Connected to " + result.rows[0].current_database)
// })

// // Server runnign
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`)
// })