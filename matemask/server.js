const exprss=require("express");
const app =exprss();


//how to using res.sendFile ?
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html');

});
const server = app.listen(4000);
console.log(server.address().port);