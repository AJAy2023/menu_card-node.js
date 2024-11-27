
const mongoos  = require('mongoose');
const { boolean } = require('webidl-conversions');

// define the shema  
const  menuItemSchema  = new mongoos.Schema({
    name:{
        type : String,
        required : true
    }, 
    price:{
        type : Number,
        required : true
    },
    taste:{
        type : String,
        enum : ['sweet' , 'spice' , 'sour']
    },
    ingredients: {
        type: [String],
        default: [],
      },
num_sales :{
     type : Number,
     default : 0
}

});

const menuitem  =  mongoos.model('menuitem' , menuItemSchema);
module.exports = menuitem;