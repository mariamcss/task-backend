const fs=require("fs")
const object={
    fname:"ahmad",
    lname:"hossam",
    age:22,
    city:"alex"
}

const objectJson=JSON.stringify(object)

//
fs.writeFileSync("dataTask1.json",objectJson)
//
const readJson=fs.readFileSync("dataTask1.json").toString()
// console.log(readJson)

const jsobj=JSON.parse(readJson)
// console.log(jsobj)

jsobj.fname="adel"
jsobj.lname="ahmed"
jsobj.age="40"
jsobj.city="cairo"

const  objJs=JSON.stringify(jsobj)

fs.writeFileSync("dataTask1.json",objJs)
