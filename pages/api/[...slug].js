import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  req.headers.cookie = "";

  proxy.web(req, res, {
    target: "https://js-post-api.herokuapp.com/",
    changeOrigin: true,
    selfHandleResponse: false,
  });

  //   res.status(200).json({ name: "Catch all paths" });
}
