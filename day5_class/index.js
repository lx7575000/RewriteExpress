var CTOR_NAME = 'initialize'

function extend(child, parent){
	if(typeof parent === 'undefined'){
		parent = Object;
	}

	child.__supper__ = parent;
	child.prototype.__proto__ = parent.prototype;
	
	var currentClass = child;

	child.prototype.super = function(methodName){
		var args = [].splice.call(arguments, 1);
		currentClass = currentClass.__supper__;
		var result = currentClass.prototype[methodName].apply(this, args);
		currentClass = child;
		return result;
	}
}

function Class(obj, parent){
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

	extend(ctor, parent);
	return ctor;
}

module.exports = Class;