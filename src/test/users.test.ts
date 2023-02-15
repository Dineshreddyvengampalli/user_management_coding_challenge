
import request from 'supertest'
import app from '../app'



interface testUser {
    name : string,
    email : string,
    dob : Date,
    _id? : string
}

var testUser :testUser = {
    name : "test_user",
    email : "test_mail@gmail.com",
    dob : new Date(),
}



describe("POST /users- post user ", () => {
    it("it should create  user", async () => {
        const result = await request(app).post(`/users`)
        .send(testUser)
        testUser._id = result.body.saved_user._id
        expect(result.status).toEqual(200)
        expect(result.body.saved_user.name).toEqual(testUser.name)
        expect(result.body.saved_user.email).toEqual(testUser.email)
        expect(String(new Date(result.body.saved_user.dob))).toEqual(String(new Date(testUser.dob)))
        });
    
});



describe("GET /users/:id - get user by id", () => {
it("it should get user", async () => {
    const result = await request(app).get(`/users/${testUser._id}`);
    expect(result.status).toEqual(200)
    expect(result.body.user.name).toEqual(testUser.name)
    expect(result.body.user.email).toEqual(testUser.email)
    expect(String(new Date(result.body.user.dob))).toEqual(String(new Date(testUser.dob)))
});
});


describe("DELETE /users/:id - delete user by id ", () => {
    it("it should delete  user with that perticular id", async () => {
        const result = await request(app).delete(`/users/${testUser._id}`)
        .send(testUser)
        expect(result.status).toEqual(200)
        expect(result.body.deleted_user.name).toEqual(testUser.name)
        expect(result.body.deleted_user.email).toEqual(testUser.email)
        expect(String(new Date(result.body.deleted_user.dob))).toEqual(String(new Date(testUser.dob)))
        });
});
