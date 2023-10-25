const path = require('path');


exports.contactuscontroller = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','form.html'))
  }