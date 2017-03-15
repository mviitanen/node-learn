const fs = require('fs'),
      spawn = require('child_process').spawn,
      filename = process.argv[2];


if(!filename) {
  throw Error("Please add a file name");
}

fs.watch(filename, function(){
  let ls = spawn('ls', ['-ls', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");
