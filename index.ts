import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("server is saying hello world!")
})
const PORT = 4000
app.listen(PORT, () => {
    console.log("server running on port http://localhost:" + PORT)
})

app.get('/posts', (req, res) => {
    res.send("some posts")
})

app.post('/checkAuthToken', (req, res) => {
    console.log(req)
    res.send("user's token is:")
})
