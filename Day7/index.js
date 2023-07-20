import { createReadStream, createWriteStream } from "fs";
import csvParser from "csv-parser";

const csvFilePath = "input.csv";
const jsonFilePath = "output.json";
csvToJson(csvFilePath, jsonFilePath);

function csvToJson(csvFilePath, jsonFilePath) {
  const inputStream = createReadStream(csvFilePath, { encoding: "utf-8" });
  const outputStream = createWriteStream(jsonFilePath, { encoding: "utf-8" });
  const data = [];
  inputStream
    .pipe(csvParser())
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", () => {
      const jsonData = JSON.stringify(data, null, 2);
      outputStream.write(jsonData);
      outputStream.end();
      console.log("CSV to JSON conversion completed successfully!");
    })
    .on("error", (err) => {
      console.error("Error while converting CSV to JSON:", err);
    });
}
