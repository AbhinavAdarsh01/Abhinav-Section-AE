const fs = require("fs").promises;
const {promisify} = require("util");
const abhinav = promisify(require("fs").readFile);

fs.writeFile("helloFile.txt",
    "today we are learning file system",
    (error)=>{
        if (error){
            console.log("error in creating the file");
        }else{
            console.log("File is created");
        }

})
fs.readFile("helloFile.txt","utf-8",(error,data)=>{
    if(error){
        console.log("error in reading the file")
    }else{
        console.log("Simple cB_data:",data);
    }

})
async function readFileData() {
    try{
        let data = await fs.readFile("helloFile.txt", "utf-8")
        console.log("Async File Data:", data)
    }catch(error){
        console.error("Error in loading file", error)
    }
}

readFileData();

async function readWithPromisify(){
    try{
        const fileData = await abhinav("helloFile.txt", "utf-8");
        console.log("Custom promises data:",  fileData)
    }catch(err){
        console.error(err)
    }
    
}
readWithPromisify();