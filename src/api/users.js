import api from "./api";

const users = {
    getUsers() {
        return api.get("/users");
    }
};

export default users;
