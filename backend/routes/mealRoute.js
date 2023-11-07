const { mealType, resFilter, navPage } = require("../controllers/mealtypeCtrl")
const router = require("express").Router()

router.get("/meal", mealType)
router.post('/filter', resFilter)
router.get("/restaurant/:id", navPage)

module.exports = router