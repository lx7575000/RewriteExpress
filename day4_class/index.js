var CTOR_NAME = 'initialize';

function Class(obj){
  function ctor(){
    if(!obj.hasOwnProperty(CTOR_NAME)){
      obj[CTOR_NAME] = Object;
    }
      obj[CTOR_NAME].apply(this, arguments);
  }

  for(var key in obj){
  	if(key === CTOR_NAME){
  		continue;
  	}
  	if(!obj.hasOwnProperty(key)){
  		continue;
  	}
  	ctor.prototype[key] = obj[key];
  }

  return ctor;
}

module.exports = Class;