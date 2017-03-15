const fs = require('fs'),
      spawn = require('child_process').spawn,
      filename = process.argv[2];

if(!filename) {
  throw Error("Please add a file name");
}

fs.watch(filename, function(){
  let ls = spawn('ls', ['-ls', filename]);
  let output= '';
  ls.stdout.on('data', function(chunk){
    output += chunk.toString();
  });

  ls.on('close', function(){
    let parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);
  });
  ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");
