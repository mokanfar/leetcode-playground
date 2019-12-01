let _ = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < _.length; i++) {
  //logic
}

for (a of _) {
  //iterable only
}

for (var [key, value] of _) {
  console.log(key + "'s _ is: " + value);
}

for (a in _) {
  //index #
}

while (i < _.length) {
  //logic
  i++;
}

_.forEach(function(v) {
  //console.log(v);
});

function a(b) {
  //logic
  return b;
}

if(_.length){
//logic
}

elseif(!_.length) {
//logic
}

