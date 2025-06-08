const express = require('express');
const router  = express.Router();
const {submitFeedback,getFeedbacks} = require('../controllers/feedbackController');


router.get('/' , (req,res)=>{
    res.send('Feedback API is working')
});

router.post('/' , submitFeedback);

router.get('/all',getFeedbacks);

module.exports = router;