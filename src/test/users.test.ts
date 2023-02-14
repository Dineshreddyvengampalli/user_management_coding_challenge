
import request from 'supertest'
import app from '../app'


const testUser = {
    _id : "63eb96f413f8db0ad69be4ca",
    name : 'dinesh',
    email: "dinesh@gmail.com",
    dob: "04-07-2000"
}
const post_user = {
    name : "test_user",
    email : "test_mail@gmail.com",
    dob : "01-01-2000",
}




describe("GET /users/:id - get user by id", () => {
it("it should get user", async () => {
    const result = await request(app).get(`/users/${testUser._id}`);
    expect(result.status).toEqual(200)
    expect(result.body.user.name).toEqual(testUser.name)
    expect(result.body.user.email).toEqual(testUser.email)
    expect(result.body.user.dob).toEqual(testUser.dob)
});
});

describe("POST /users- post user ", () => {
    it("it should create  user", async () => {
        const result = await request(app).post(`/users`)
        .send(post_user)
        expect(result.status).toEqual(200)
        expect(result.body.saved_user.name).toEqual(post_user.name)
        expect(result.body.saved_user.email).toEqual(post_user.email)
        expect(result.body.saved_user.dob).toEqual(post_user.dob)
        });
    });


describe("DELETE /users/:id - delete user by id ", () => {
    it("it should delete  user with that perticular id", async () => {
        const result = await request(app).delete(`/users/${testUser._id}`)
        .send(post_user)
        expect(result.status).toEqual(200)
        expect(result.body.deleted_user.name).toEqual(testUser.name)
        expect(result.body.deleted_user.email).toEqual(testUser.email)
        expect(result.body.deleted_user.dob).toEqual(testUser.dob)
        });
    });
