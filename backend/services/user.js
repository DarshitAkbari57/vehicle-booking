const db = require("../models");

class UserService {
  getUserById = async (id) => {
    try {
      const response = await db.User.findOne({
        where: { id },
      });
      return JSON.parse(JSON.stringify(response));
    } catch (error) {
      console.log("error : ", error.message);
    }
  };

  getUserEmail = async (email) => {
    try {
      const response = await db.User.findOne({
        where: { email },
      });
      return JSON.parse(JSON.stringify(response));
    } catch (error) {
      console.log("error : ", error.message);
    }
  };

  updateUser = async (data) => {
    try {
      const response = await db.User.update(data, {
        where: { id: data.id },
      });
      return JSON.parse(JSON.stringify(response));
    } catch (error) {
      console.log("error : ", error.message);
    }
  };

  createUser = async (data) => {
    try {
      const response = await db.User.create(data);
      return JSON.parse(JSON.stringify(response));
    } catch (error) {
      console.log("error : ", error.message);
    }
  };
}
module.exports = new UserService();
