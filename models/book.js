const mongoose=require("mongoose")

const schema=mongoose.Schema(
    {
        "title":String,
        "author":String,
        "pubYear":String,
        "price":String

    }
)
let librarymodel=mongoose.model("books",schema)
module.exports(librarymodel)