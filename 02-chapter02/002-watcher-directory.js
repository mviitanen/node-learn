const fs = require('fs');

fs.watch('/Users/viitanenm/', {recursive: true}, function(){
  process.stdout.write('.');
});

console.log("Now watching '/Users/viitanenm/' for changes...");
