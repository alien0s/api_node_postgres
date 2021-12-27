const app = require('./src/app')

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log("Serve's running on port",port)
})