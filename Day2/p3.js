const fs = require('fs');
const newdata="at the end of file"
fs.appendFile("./data.txt",newdata,(err) =>{
    if(err)
        console.error(error);
    else
    console.log("Data append successfully")
})