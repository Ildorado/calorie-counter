const fs = require("fs");
const path = require("path");
const axios = require("axios");
const unzipper = require("unzipper");
const XLSX = require("xlsx");

// webpage of downloaded data: https://catalog.data.gov/dataset/mypyramid-food-raw-data
const FOOD_DISPLAY_WORKBOOK_FILE_NAME = "Food_Display_Table.xlsx";
const PUBLIC_PATH = path.join(__dirname, "../public/data");
const ASSETS_PATH = path.join(__dirname, "../src/assets");
const ZIP_PATH = path.join(PUBLIC_PATH, "myfoodapediadata.zip");
const FOOD_DISPAY_WORKBOOK_PATH = path.join(
  PUBLIC_PATH,
  FOOD_DISPLAY_WORKBOOK_FILE_NAME
);
const FOOD_DISPLAY_JSON_PATH = path.join(
  ASSETS_PATH,
  "Food_Display_Table.json"
);
const ZIP_URL =
  "https://inventory.data.gov/dataset/794cd3d7-4d28-4408-8f7d-84b820dbf7f2/resource/6b78ec0c-4980-4ad8-9cbd-2d6eb9eda8e7/download/myfoodapediadata.zip";

async function downloadZip() {
  const writer = fs.createWriteStream(ZIP_PATH);

  const response = await axios({
    url: ZIP_URL,
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

async function unzipFoodData() {
  try {
    const zip = fs
      .createReadStream(ZIP_PATH)
      .pipe(unzipper.Parse({ forceStream: true }));

    for await (const entry of zip) {
      if (entry.path === FOOD_DISPLAY_WORKBOOK_FILE_NAME) {
        entry.pipe(fs.createWriteStream(FOOD_DISPAY_WORKBOOK_PATH));
        console.log("Food display table was downloaded successfully");
      } else {
        entry.autodrain();
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function sheetToJson() {
  const workbook = XLSX.readFile(FOOD_DISPAY_WORKBOOK_PATH);
  const food_data_json = {};
  const food_data_array = XLSX.utils.sheet_to_json(
    workbook.Sheets[workbook.SheetNames[0]]
  );
  for (let i = 0; i < food_data_array.length; i++) {
    food_data_json[food_data_array[i]["Food_Code"]] = food_data_array[i];
  }
  fs.writeFile(
    FOOD_DISPLAY_JSON_PATH,
    JSON.stringify(food_data_json),
    "utf8",
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
}

downloadZip()
  .then(() => unzipFoodData())
  .then(() => sheetToJson());
