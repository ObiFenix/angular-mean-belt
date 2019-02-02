const mongoose = require('mongoose');

let ReviewSchema = new mongoose.Schema({
    customer:     { type: String, required: [true, 'Please, the name field must be filled'], minlength: [3, 'Name must be at least three character long'], trim: true },
    content:      { type: String, required: [true, 'Please, the name field must be filled'], minlength: [3, 'Your review must be at least three character long'], trim: true },
    stars:        { type: Number, required: [true, 'Please, must select a number of stars for rating.'], default: 1},
    // restaurantId: { type: mongoose.Schema.ObjectId, ref : 'restaurants' }
    _restaurantId: { type: String }
}, { timestamps: true });

let RestaurantSchema = new mongoose.Schema({
    name:    { type: String, required: [true, 'The name field must be filled'], minlength: [3, 'Must be at least three character long'], unique: [true, 'This name already exist!'], trim:true },
    cuisine: { type: String, required: [true, 'The type field must be filled'], minlength: [3, 'Must be at least three character long'], trim: true },
    // reviews: [ReviewSchema]
  }, { timestamps: true });

const Restaurant = mongoose.model('Restaurants', RestaurantSchema);
const Review = mongoose.model('Reviews', ReviewSchema);
module.exports = { Review, Restaurant };
