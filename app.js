import express from 'express';

const app = express();

const PORT = 5000;

//define a default route
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Seriver is running at http://localhost:${PORT}`);
});