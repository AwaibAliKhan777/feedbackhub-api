const Feedback = require('../models/Feedback');
const submitFeedback = async(req,res) =>{
    try{
        const{ name , email , message , rating , category } = req.body;

        const newFeedback = new Feedback({
            name , 
            email,
            message,
            rating,
            category,
        });

        await newFeedback.save();
        res.status(201).json({success:true , message:'Feedback submitted'});
    } catch(error){
        console.error(error);
        res.status(500).json({success:false , message:'server error'});
    }
};

const getFeedbacks = async(req,res)=>{
    try{
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    }catch(error){
        console.error(error);
        res.status(500).json({success:false, message:'Server Error'});
    }
};

module.exports = {
    submitFeedback,
    getFeedbacks
};