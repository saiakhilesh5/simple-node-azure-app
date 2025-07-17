// api/hello/index.js
module.exports = async function (context, req) {
  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { message: "Hello from Azure API!" },
  };
};
