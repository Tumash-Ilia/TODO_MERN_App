const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/todo', require('./routes/todo.route'))

/**
 * Hlavni nodeJs stranka, pripojeni k db a spusteni aplikaci
 * @returns {Promise<void>}
 */

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.vo4vq.mongodb.net/todo?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ' + PORT)
        })
    } catch (e) {
        console.error(e)
    }
}
start()