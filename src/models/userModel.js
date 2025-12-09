import pool from "../config/db.js";

export const getAllUsersService = async () => {
    const response = await pool.query("SELECT * FROM users");
    return response.rows;
};

export const getUserByIdService = async (id) => {
    const response = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    return response.rows[0];
};

export const createUserService = async (name, email) => {
    const response = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    return response.rows;
};

export const updateUserByIdService = async (id, name, email) => {
    const response = await pool.query("UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *", [name, email, id]);
    console.log('response: ', response);
    return response.rows[0];
};

export const deleteUserByIdService = async (id) => {
    const response = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]);
    return response.rows[0];
};
