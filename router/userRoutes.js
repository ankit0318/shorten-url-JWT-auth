const express = require("express");
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
} = require("../controllers/controllers");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);

router
    .route("/:id")
    .get(getUserById)
    .patch(updateUserById);

module.exports = router;
