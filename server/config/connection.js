const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recipe-builder');

//if enviroment vairable mangodb ui exists use this as the connnection string o9ther wise use the second connection string 
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://pantryPal:pantryPal@pantrypal.lradei2.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
