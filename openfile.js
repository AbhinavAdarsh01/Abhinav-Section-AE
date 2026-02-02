const fs = require("fs");

fs.open("demo.txt", "r", (error, fd) => {
    if (error) {
        console.log("Error in opening the file");
        return;
    }

    console.log("File opened successfully");
    console.log("File Descriptor:", fd);

    fs.close(fd, (err) => {
        if (err) {
            console.log("Error closing file");
        } else {
            console.log("File closed successfully");
        }
    });
});
