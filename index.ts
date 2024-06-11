import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
app.use(cookieParser())


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
    // console.log(req.cookies.__clerk_db_jwt)
    // console.log(req)
    res.send("user's token is: " + req.cookies.__clerk_db_jwt)
})
