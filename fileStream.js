const { Readable } = require("stream");

const inStream = new Readable({
    read() {}
});

inStream.push
("Section AE need to more serious about thier career");
inStream.push
("From next time if anyone found not working thier laptop thier attendance will be not marked");
inStream.push("welcome to block 6");
inStream.push(null);

inStream.pipe(process.stdout);