import express from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} from "../controllers/userController.js";
import validateUser from "../middlewares/validateUser.js";

const router = express.Router();
router.get("/users", validateUser, getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", validateUser, updateUserById);
router.delete("/users/:id", deleteUserById);

export default router;