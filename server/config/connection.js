const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recipe-builder');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://pantryPal:pantryPal@pantrypal.lradei2.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
