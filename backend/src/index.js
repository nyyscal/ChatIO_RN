import express from "express"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import "dotenv/config"

const app = express()

app.all("/api/auth/{*any}", toNodeHandler(auth));
// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth
app.use(express.json());


app.get("/",(req,res)=>{
  res.send("Server is up and running!")
})

app.listen(3000,()=>{
  console.log(`Server is running on http://localhost:3000`)
})

