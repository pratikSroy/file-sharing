const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const PORT = process.env.PORT || 3000
 
app.use('/api/files', require('./routes/files'))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})