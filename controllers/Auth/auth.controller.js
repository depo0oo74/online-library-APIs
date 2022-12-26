import userModel from "../../models/user.model.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
const JwtSecret = "alradwa application by node.js";

// ** Login controller
export const login = async (req, res, next) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({
      message: "user is not exist",
    });
  }
  const isPasswordsMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordsMatch) {
    return res.status(400).send({
      message: "password is incorrect",
    });
  }
  // const accessToken = JWT.sign({ username: user.username, email: user.email, phoneNumber: user.phoneNumber }, JwtSecret, { expiresIn: 3000 });
  const accessToken = JWT.sign({ user }, JwtSecret, { expiresIn: 3000 });

  return res.status(200).send({
    username: user.username,
    email: user.email,
    phoneNumber: "0" + user.phoneNumber,
    accessToken,
  });
};

// ** Is USER controller
export const isUser = async (req, res, next) => {
  try {
    const accessToken = req.headers?.authorization?.split(" ")[1];
    if (accessToken) {
      const userPayload = JWT.verify(accessToken, JwtSecret, { complete: true });
      if (userPayload) {
        next();
      }
    } else {
      res.status(401).send({
        message: "User Unauthorized",
      });
    }
  } catch (err) {
    res.status(401).send({
      message: "Invalid Token",
    });
  }
};

// ** Is Admin USER controller
export const isAdminUser = async (req, res, next) => {
  try {
    const accessToken = req.headers?.authorization?.split(" ")[1];
    if (accessToken) {
      const userPayload = JWT.verify(accessToken, JwtSecret, { complete: true });
      const userRole = userPayload.payload.user.role;
      if (userRole === "admin") {
        next();
      } else {
        res.status(401).send({
          message: "User Unauthorized",
        });
      }
    } else {
      res.status(401).send({
        message: "User Unauthorized",
      });
    }
  } catch (err) {
    res.status(401).send({
      message: "Invalid Token",
    });
  }
};
