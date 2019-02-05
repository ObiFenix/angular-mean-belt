
let res_ctrl = require('../../controllers/restaurants'),
    rev_ctrl = require('../../controllers/reviews'),
    pathCtrl = require('path');

module.exports = function(app) {
    // Restaurant App Routes
    app.get('/api/reviews/:id', rev_ctrl.getReviews);
    app.post('/api/reviews/:id/new', rev_ctrl.addReview);
    app.get('/api/restaurants', res_ctrl.getRestaurants);               // GET      request for all items data to the database (mongo db)
    app.get('/api/restaurants/:id', res_ctrl.getRestaurant);            // GET      request for single item data to the database (mongo db)
    app.post('/api/restaurants', res_ctrl.addRestaurant);               // POST     request for creating new item data
    app.patch('/api/restaurants/:id/update', res_ctrl.editRestaurant);  // UPDATE   request for updating the item's data provided by the client
    app.get('/api/restaurants/:id/delete', res_ctrl.deleteRestaurant);  // DELETE   request for removing data of the item selected by teh client

    // Unknown Routes Handler
    app.all("*", (req, res, next) => {                              // REDIRECT back to the front-End (client) for any bacd HTTP Request
        res.sendFile(pathCtrl.resolve("./eRevRestaurant/dist/eRevRestaurant/index.html"));
    });

    // route for handling 404 requests(unavailable routes)
    app.use(function (req, res, next) {
        res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
    });
}
