const Review = require("../model/review.js");
const Listing = require("../model/listing.js");

module.exports.postReview = async (req, res) => {
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newRev = new Review(req.body.review);
    newRev.author = req.user._id;
    listing.reviews.push(newRev);

    await newRev.save();
    await listing.save();
    req.flash("success", "New Review Posted!");

    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};