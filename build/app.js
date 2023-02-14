"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./model/db");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', user_1.router);
app.use(express_1.default.urlencoded({ extended: true }));
(0, db_1.dbConnection)();
app.listen(3000, () => {
    console.log("server is running on 3000");
});
exports.default = app;
