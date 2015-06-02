module.exports = Class;

function Class (obj) {
  var child = obj['initialize'] || function(){};

  for (var item in obj){
    if(item != 'initialize'){
      child[item] = obj[item];
    }
  }
}


// function Class(construct){
// 	var child = construct['initialize'] || function(){};
	
// 	for(var item in construct){
// 		if(item != 'initialize'){
// 			child[item] = construct[item];
// 		}
// 	}
// 	return child;
// }