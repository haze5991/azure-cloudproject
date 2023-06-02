const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req,res) => {
    res.json([
        {
           "id":"1",
           "title":"Book Review: Harry Potter & The Philosopher Stone" 
        },
        {
            "id":"2",
            "title":"Harry Potter & The Chamber of Secret"
        },
        {
            "id":"3",
            "title":"Harry Potter & The Prisoner of Azkaban"
        }
    ])
})

app.listen(4000, () => {
    console.log('listening for request on port 4000')
})