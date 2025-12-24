import {
    getAllUsersService,
    getUserByIdService,
    createUserService,
    updateUserByIdService,
    deleteUserByIdService
} from "../models/userModel.js";

export const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    });
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService();
        handleResponse(res, 200, "Users fetched successfully.", users);
    }
    catch(error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(id);
        if (!user) {
            return handleResponse(res, 404, "User not found.");
        }
        handleResponse(res, 200, "User fetched successfully.", user);
    }
    catch(error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User created successfully.", newUser);
    }
    catch(error) {
        next(error);
    }
};

export const updateUserById = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const user = await updateUserByIdService(id, name, email);
        if (!user) {
            return handleResponse(res, 404, "User not found.");
        }
        handleResponse(res, 200, "User updated successfully.", user);
    }
    catch(error) {
        next(error);
    }
};

export const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUserByIdService(id);
        if (!deletedUser) {
            return handleResponse(res, 404, "User not found.");
        }
        handleResponse(res, 200, "User deleted successfully.", deletedUser);
    }
    catch(error) {
        next(error);
    }
};
