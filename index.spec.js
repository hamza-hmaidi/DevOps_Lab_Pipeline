const request = require("supertest");
const app = require("./index");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
//   describe("Test the root path", () => {
//     test("It should return hamza", done => {
//       request(app)
//         .get("/")
//         .then(response => {
//           expect(response.).toBe(200);
//           done();
//         });
//     });
});