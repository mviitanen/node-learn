const fs = require('fs'),
      filename = process.argv[2];


fs.watch(filename, function(){
  console.log("File " + filename + " just changed!");
});

console.log("Now watching " + filename + " for changes...");
