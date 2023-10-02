// Import the required modules using CommonJS syntax
import express from "express";
import Route from "./Routes/Routers.js";
const app = express()
import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://babaralibj362:OE4c770SXVBI3eLy@cluster0.bxoqdnd.mongodb.net/GameTrain')

const port = 4000;
const hostName = '0.0.0.0';
app.use(express.json());

// Route
app.use('/user',Route)
//check of the db is connect
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
//server connection
app.listen(port, hostName, () => {
  console.log('The server is listening at port ' + port);
});













// import { createServer } from 'http'
// import url from 'url'
// import fs from 'fs'
// import { express } from 'express';

// const port = 4000
// const hostName = "localhost"

// const server = createServer((req, res) => {

//   const parsedUrl = url.parse(req.url, true)
//   const { optionalVariable } = parsedUrl.query

//   console.log("🚀  file: test.js:13  server ~ optionalVariable:", optionalVariable)

//   if (req.url === '/home') {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.end('This is home page')
//   }

//   else if (parsedUrl.pathname === '/products?abc=testing') {
//     let param1 = optionalVariable || param1
//     res.end('this is your PRODUCTS PAGE ' + param1)
    
//     fs.readFile('../node-learning/script.js', 'utf-8', (err, data) => {
//       if (err)
//         throw err
//       else
//         console.log("🚀  file: test.js:26  fs.readFile ~ data:", data)
//     })
//   }
//   else {
//     res.end("This Route doesn't Exist")
//   }
// })

// server.listen(port, hostName, () => {
//   console.log(`Server is working fine at ==> ${hostName}:${port}`)
// })




// app.get('/singleHome/:data', (req, res) => {
//   console.log("🚀  file: script.js:9  app.get ~ req:", req.query.khan)
//   console.log("🚀  file: script.js:9  app.get ~ req:===", req.params)
//   try {
//     // res.status(200).json({ message: 'You are at your Single-homePage no ' + req.params.data })
//     res.status(200).json({ message: 'You are at your Single-homePage no ' + req.query.khan })
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

// app.get('/listHome', (req, res) => {
//   try {
//     res.status(200).json({ message: 'You are at your homePage2' })
//   } catch (error) {
//     console.log("🚀  file: script.js:14  app.get ~ error:", error)

//     res.status(500).json({ message: error.message })
//   }

// })


// app.listen(port, hostName, () => {
//   console.log('server is running at port ' + port)
// })