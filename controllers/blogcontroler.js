
const blogModel = require("../models/blog");

const homecontroler = (req, res) => {
    res.render("index");
}


const viewcontroler =async (req, res) => {
    const blogs = await blogModel.find({});
    console.log(blogs);
    res.render('views',{blogs});
    console.log("complate viwes...");
}



const blogformcontroler = async (req, res) => {
    console.log(req.body);
    var {editId} = req.body ;
   

    if(!editId){
        const blogdata = new blogModel({
            title : req.body.title,
            content : req.body.content
        });
        await blogdata.save();
    }else{
        await blogModel.findByIdAndUpdate(editId,{
            title : req.body.title,
            content : req.body.content
        })
        console.log("Edit Complate..");
    }
    await res.redirect("/views");
}


const editcontroler =async (req, res) => {
    const id = req.params.id;
    const singleblog = await blogModel.findById(id);
    res.render("edit", {singleblog});
}



const deletcontroler = async (req, res) => {
    const id = req.params.id;

    let blogSingal = await blogModel.findOne({ _id: id })

    await blogModel.deleteOne({ _id: id });
    res.redirect("/views");
}


module.exports = {homecontroler,blogformcontroler,viewcontroler,editcontroler,deletcontroler}