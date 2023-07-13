import { getUserDetails, loginUser, registerUser } from "../service/user.js";

const getUserDetailsController = async (req, res) => {
  const allUsers = await getUserDetails();
  res.send(allUsers);
};

const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginUser(email, password);
  res.send(user);
};

const registerUserController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const registerNewUser = await registerUser(
    firstName,
    lastName,
    email,
    password
  );
  res.send(registerNewUser);
};

export {
  getUserDetailsController,
  registerUserController,
  loginUserController,
};
