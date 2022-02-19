const fs = require("fs");

const xlsx = require('xlsx')

// let buffer = fs.readFileSync("./example.json");

// //console.log(buffer)

// let data = JSON.parse(buffer);
 // This methods is used to covert buffer or any type of  data to json



let jsonFile = require('./example.json') // requiring JSON File
//console.log(data)

jsonFile.push({
  name: "Thor",
  "last Name": "Odinson",
  isAvenger: true,
  friends: ["Tony", "Peter", "Bruce"],
  age: 102,
  address: {
    planet: "Asgard",
  },
});

// pushing a new object into JSON File

//console.log(data)

let stringData = JSON.stringify(jsonFile);
// converting json data into string so that we can write it in other files

//console.log(stringData)

fs.writeFileSync("example.json", stringData);

// writing to json file

console.log("JSON file Updated");



    let newWB = xlsx.utils.book_new();
    // Creating a new WorkBook
    let newWS = xlsx.utils.json_to_sheet(jsonFile);
    // Json is converted to sheet format (rows and cols)
    xlsx.utils.book_append_sheet(newWB, newWS,'Avengers');
    xlsx.writeFile(newWB,'abc.xlsx');




    let wb = xlsx.readFile('abc.xlsx');

    let excelData = wb.Sheets['Avengers'];
    let ans = xlsx.utils.sheet_to_json(excelData);
    console.log(ans)




