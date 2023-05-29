const frm = (req, res)=>{
    res.render("test");
}
const test = (req, res)=>{
    console.log(req.body.file);
}
module.exports = {
    frm:frm,
    test:test,
}


