import inquirer from "inquirer";
import qrcode from "qrcode";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Type in your URL:", name: "URL" },
  ])
  .then((answers) => {
    const url = answers.URL;

    qrcode.toFile("qr_img.png", url, (error) => {
      if (error) {
        console.error("An error occurred while generating the QR code:", error);
      } else {
        console.log("QR code generated successfully!");
      }
    });
    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
