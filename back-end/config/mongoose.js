let path     = require('path'),
    fs       = require('fs'),
    mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/obifenix_db');

let models_path = path.join(__dirname, './../models');      // create a variable that points to the models folder
fs.readdirSync(models_path).forEach(function (file) {       // read all of the files in the models_path and require (run) each of the javascript files
    if (file.indexOf('.js') >= 0) {                         // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});
