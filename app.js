import express from 'express';

const app = express();

const PORT = 5000;

app.use(express.static('public'));

app.use(express.urlencoded ({ extended: true }))

const appointments = [];

// define a default route
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Confirmation route
app.get('/confirmation', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Admin route
app.get('/admin', (req, res) => {
    res.send(appointments);
});

app.post('/submit-app', (req, res) => {
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,
        timestamp: new Date()
    };

    appointments.push(appointment);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});