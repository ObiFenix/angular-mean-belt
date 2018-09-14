const Model = require('../models/restaurant')

module.exports = {

  getReviews: (req, res) => {
    console.log('We are on GET REVIEW =================\n\n');
    console.log('ID: ', req.params.id);
    Model.Review
      .find({_restaurantId: req.params.id}, (err, reviews) => {
        console.log("\n\n=================== | The Reviews |\n", reviews);
        if (err) { return res.json({ message: "Sorry! Something went wrong. No reviews were deleted!", 'errors': err}); }
        else     { return res.json({ message: "Records sent", 'reviews': reviews }); }
    }).sort({ customer: 1 });
  },

  addReview: (req, res) => {
    console.log('We are on ADD REVIEW =================\n\n');
    console.log(req.body);
    // req.body.rating = parseInt(req.body.rating);
    const valid_parans = {
      customer: req.body.customer,
      content: req.body.content,
      stars: req.body.stars
    }
    console.log("\n================| valid_parans |\n", valid_parans);
    Model.Review
      .create(req.body, (err, review) => {
        if (err) { return res.json({'errors': err }); }
        else { return res.json({'success': 'A review has been added'}); }
    });
  }
}


// ================================== | OLD Version |
// const Review = require('../models/review')
//
// module.exports = {
//
//   getReviews: (req, res) => {
//     console.log('We are on GET REVIEW =================\n\n');
//     console.log('ID: ', req);
//       Restaurant.findById(req.params.id, (err, restaurant) => {
//       if (err) { return res.json({ message: "Sorry! Something went wrong. restaurant was not deleted!", 'errors': err}); }
//       else     { return res.json({ message: "Records sent", 'reviews': restaurant.reviews, 'restaurant': restaurant }); }
//       });
//   },
//
//   addReview: (req, res) => {
//     console.log('We are on ADD REVIEW =================\n\n');
//     console.log(req.body);
//     // req.body.rating = parseInt(req.body.rating);
//     Review.create(req.body, (err, review) => {
//       if (err) { return res.json({'errors': err }); }
//       else {
//         Restaurant.findById(req.params.id, (err, restaurant) => {
//           if (err) { return res.json({'errors': err }); }
//           else {
//               restaurant.reviews.push(review);
//               restaurant.save();
//           }
//         }); return res.json({'success': 'A review has been added'});
//       }
//     });
//   }
// }
