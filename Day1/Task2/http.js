import { readFile } from "node:fs";
import { createServer } from "node:http";

createServer(function (req, res) {
  readFile("users.json", function (err, data) {
    res.write(data);
    return res.end();
  });
}).listen(2413);
