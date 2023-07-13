import bcrypt from "bcrypt";
import _ from "lodash";
import { userModel } from "../Models/user.js";
import jwt from "jsonwebtoken";

const getUserDetails = async () => {
  try {
    const users = await userModel.find();
    return users;
  } catch (error) {
    return error.message;
  }
};

const loginUser = async (emailEntered, passwordEntered) => {
  try {
    const user = await userModel.findOne({ email: emailEntered });
    if (!user) {
      throw new Error("Email or Password is not valid");
    }

    const isPasswordCorrect = await bcrypt.compare(
      passwordEntered,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Email or Password is not valid");
    }
    const mySecretKey = process.env.SECRET_CODE;
    console.log(mySecretKey);

    const payLoad = {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    };

    const jwtToken = jwt.sign(payLoad, mySecretKey);
    return { token: jwtToken, message: "Logged In " };
  } catch (error) {
    return error.message;
  }
};

const registerUser = async (firstName, lastName, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    };

    const userCreated = await userModel.create(newUser);
    if (userCreated) {
      return userCreated;
    } else {
      throw new Error("User can not created ");
    }
  } catch (error) {
    return error.message;
  }
};

export { getUserDetails, registerUser, loginUser };
