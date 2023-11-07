const mongoose = require("mongoose")

const restaurant_scheme = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    city: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: [{
        mealtype: Number,
        name: String
    }],
    Cuisine: [{
        cuisine: Number,
        name: String
    }]
})

module.exports = mongoose.model("Restaurant_data", restaurant_scheme, "Restaurant_data")