const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 5000;
const app = express()

app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`)
})