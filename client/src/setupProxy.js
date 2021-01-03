const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/students", { target: "http://localhost:5400/" })
  );
  app.use(
    createProxyMiddleware("/api/getStudentInformation", {
      target: "http://localhost:5400/",
    })
  );
  app.use(
    createProxyMiddleware("/api/getStudentCourses", {
      target: "http://localhost:5400/",
    })
  );
  app.use(
    createProxyMiddleware("/api/addStudentCourse", {
      target: "http://localhost:5400/",
    })
  );
  app.use(
    createProxyMiddleware("/api/users/logIn", {
      target: "http://localhost:5400/",
    })
  );
  app.use(
    createProxyMiddleware("/api/users/register", {
      target: "http://localhost:5400/",
    })
  );
};
