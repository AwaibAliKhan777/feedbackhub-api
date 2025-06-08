const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/feedbackhub' , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.log('MongoDB Error:' , err));

app.use('/api/feedback' , feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () =>{
    console.log(`server running on http://localhost:${PORT}`);
});