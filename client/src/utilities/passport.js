import axios from "axios";

export default {

    // Saves a book to the database
    authenticateUser: function (userData) {
        return axios.post("/auth/login", userData);
    }
};