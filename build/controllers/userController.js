"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.postUser = exports.getUsers = void 0;
const userSchema_1 = require("../model/userSchema");
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.id;
    try {
        let user = yield userSchema_1.User.findById(userId);
        if (user === null || user === void 0 ? void 0 : user.name) {
            return res.json({ "user": user });
        }
        return res.status(404).json({ "message": "user not found" });
    }
    catch (error) {
        res.status(404).json({
            "message": "check the database connection"
        });
    }
});
exports.getUsers = getUsers;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, dob } = req.body;
        try {
            const user = new userSchema_1.User({
                name,
                email,
                dob
            });
            const savedUser = yield user.save();
            return res.status(200).json({
                "message": "user saved",
                "saved_user": savedUser
            });
        }
        catch (error) {
            return res.status(400).json({
                "message": "unable to save the user check db connection"
            });
        }
    }
    catch (error) {
        return res.status(501).json({
            "message": "please check the body"
        });
    }
});
exports.postUser = postUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userId = req.params.id;
        try {
            let user = yield userSchema_1.User.findByIdAndDelete(userId);
            if (user === null || user === void 0 ? void 0 : user.name) {
                return res.status(200).json({
                    "message": "user deleted sucessfully",
                    "deleted_user": user
                });
            }
            else {
                return res.status(404).json({
                    "message": "user not found"
                });
            }
        }
        catch (error) {
            res.status(400).json({
                "message": "please check db connection"
            });
        }
    }
    catch (error) {
        res.status(401).json({
            "message": "please provide user Id"
        });
    }
});
exports.deleteUser = deleteUser;
