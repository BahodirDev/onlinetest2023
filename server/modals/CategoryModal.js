const {Schema,model} = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
  
},{
    timestamps: true,
});

const Category = model("Catgory", userSchema);
module.exports = Category;
