const express = require("express");
const router = express.Router();
const messengersController = require("../controllers/MessengersController");

router.get("/", messengersController.index);
router.get("/fetch-all", messengersController.getAll);
router.post("/create", messengersController.createData);
// router.get("/

router.get("/:id", messengersController.getByID);
// router.get("/user/:id", messengersController.getByUserID);
router.put("/update", messengersController.updatedData);
router.delete("/delete", messengersController.deleteData);

module.exports = router;