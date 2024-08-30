const mongoose=require('mongoose');
const connectdata=async()=>{
    let url=`mongodb+srv://sunil:sunil12@cluster0.3pwecso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    await mongoose.connect(url)
    .then(res=>{
        console.log(res);
        console.log("db is connected");
    })
    .catch(err=>{
        console.log(err)
    }
    )
}

module.exports=connectdata