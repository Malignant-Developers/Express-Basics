const express = require('express')
const app = express()
const fs = require('fs')

const PORT = 80

app.get('/students', (req, res) => {
    res.send('Student API')
    // const data = fs.readFileSync('./students.json')
    // const students = JSON.parse(data)
    // res.send(students)
})

app.listen(PORT, () => {
    console.log('Express server is up!');  
})