const mongoose = require("../config/db")
const blogScema = new mongoose.Schema({
    title : String,
    content: String,
})

const blogModel = mongoose.model("blogs", blogScema);

module.exports = blogModel;

