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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const testUser = {
    _id: "63eb96f413f8db0ad69be4ca",
    name: 'dinesh',
    email: "dinesh@gmail.com",
    dob: "04-07-2000"
};
const post_user = {
    name: "test_user",
    email: "test_mail@gmail.com",
    dob: "01-01-2000",
};
describe("GET /users/:id - get user by id", () => {
    it("it should get user", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).get(`/users/${testUser._id}`);
        expect(result.status).toEqual(200);
        expect(result.body.user.name).toEqual(testUser.name);
        expect(result.body.user.email).toEqual(testUser.email);
        expect(result.body.user.dob).toEqual(testUser.dob);
    }));
});
describe("POST /users- post user ", () => {
    it("it should create  user", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post(`/users`)
            .send(post_user);
        expect(result.status).toEqual(200);
        expect(result.body.saved_user.name).toEqual(post_user.name);
        expect(result.body.saved_user.email).toEqual(post_user.email);
        expect(result.body.saved_user.dob).toEqual(post_user.dob);
    }));
});
describe("DELETE /users/:id - delete user by id ", () => {
    it("it should delete  user with that perticular id", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).delete(`/users/${testUser._id}`)
            .send(post_user);
        expect(result.status).toEqual(200);
        expect(result.body.deleted_user.name).toEqual(testUser.name);
        expect(result.body.deleted_user.email).toEqual(testUser.email);
        expect(result.body.deleted_user.dob).toEqual(testUser.dob);
    }));
});
