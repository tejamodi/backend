const meals = require("../models/mealtype.json")
const Restaurant_data = require("../models/restaurant_schema")

const mealType = (req, res) => {
    try {
        const result = meals
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}


const resFilter = async (req, res) => {
    try {
        let { location, cuisine, lcost, hcost, mealtype, page, sort } = req.body

        page = page ? page : 1

        sort = sort === "true" ? -1 : 1


        let payload = {};
        const itemsPerPage = 2;
        let startIndex = itemsPerPage * page - itemsPerPage
        let endIndex = itemsPerPage * page

        if (mealtype) {
            payload["type.name"] = { $in: mealtype }
        }
        if (mealtype && location) {
            payload["type.name"] = { $in: mealtype }
            payload["city_name"] = { $in: location }
        }
        if (mealtype && cuisine) {
            payload["type.name"] = { $in: mealtype }
            payload["Cuisine.name"] = { $in: cuisine }
        }
        if (mealType && lcost && hcost) {
            payload["type.name"] = { $in: mealtype }
            payload["cost"] = { $lte: parseInt(hcost) }
            payload["cost"] = { $gte: parseInt(lcost) }
        }
        if (mealtype && location && cuisine) {
            payload["type.name"] = { $in: mealtype }
            payload["city_name"] = { $in: location }
            payload["Cuisine.name"] = { $in: cuisine }
        }
        if (mealtype && cuisine && hcost && lcost) {
            payload["type.name"] = { $in: mealtype }
            payload["Cuisine.name"] = { $in: cuisine }
            payload["cost"] = { $lte: parseInt(hcost) }
            payload["cost"] = { $gte: parseInt(lcost) }
        } if (mealtype && location && cuisine && hcost && lcost) {
            payload["type.name"] = { $in: mealtype }
            payload["city_name"] = { $in: location }
            payload["Cuisine.name"] = { $in: cuisine }
            payload["cost"] = { $lte: parseInt(hcost) }
            payload["cost"] = { $gte: parseInt(lcost) }
        }

        const restaurant = await Restaurant_data.find(payload).sort({ cost: sort })
        const result = restaurant.slice(startIndex, endIndex)
        const fullData = restaurant
        res.json({
            result: result,
            full: fullData
        })

    } catch (error) {
        console.log(error)
    }
}

const navPage = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Restaurant_data.findById(id)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { mealType, resFilter, navPage }