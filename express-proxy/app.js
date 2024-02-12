const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const proxy = require("express-http-proxy");
const indexRouter = require("./routes/index");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

/**
 * Listens to the /api path and forwards any request to SF
 */
app.use(
  "/api",
  proxy(getProxiedUrl, {
    proxyReqOptDecorator: getProxiedHeaders,
    proxyReqBodyDecorator: getProxiedBody,
    proxyReqPathResolver: getProxiedPath,
    filter: function (req, res) {
      return req.method == "POST";
    },
    memoizeHost: false,
  })
);

/**
 * Configure your credentials here
 */
const namespace = "omnistudio",
  instanceUrl = "instance_url",
  accessToken = "auth_token";

/**
 *
 * @param {express.Request} req
 */
function getProxiedUrl(req) {
  return instanceUrl;
}

/**
 * Gets the path to be used when sending the request to SF
 * @param {express.Request} req
 */
function getProxiedPath(req) {
  return req.body.url.replace("__NS__", namespace);
}

/**
 * Adds any additional headers to the SF request
 * @param {*} proxyReqOpts
 * @param {express.Request} srcReq
 */
function getProxiedHeaders(proxyReqOpts, srcReq) {
  return new Promise(function (resolve, reject) {
    proxyReqOpts.headers["Authorization"] = "Bearer " + accessToken;
    resolve(proxyReqOpts);
  });
}

/**
 * Transforms the request body into a body that will be sent to SF
 * @param {*} proxyReq
 * @param {express.Request} srcReq
 */
function getProxiedBody(proxyReq, srcReq) {
  return Promise.resolve(srcReq.body.data);
}

module.exports = app;
