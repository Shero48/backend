const mongoose=require('mongoose');
const connectdata=async()=>{
    let url=`mongodb_url`
    await mongoose.connect(url)
    .then(res=>{
        console.log("db is connected");
    })
    .catch(err=>{
        console.log(err)
    }
    )
}

module.exports=connectdata
