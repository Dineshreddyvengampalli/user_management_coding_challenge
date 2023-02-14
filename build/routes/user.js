"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userController_2 = require("../controllers/userController");
exports.router = express_1.default.Router();
exports.router.get("/users/:id", userController_1.getUsers);
exports.router.post("/users", userController_2.postUser);
exports.router.delete("/users/:id", userController_1.deleteUser);
exports.router.get("/", (req, res, next) => {
    res.json({ msg: "hello from root " });
});
