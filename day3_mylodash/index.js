var _ = {

};

_.once = function(fn){
		var hasExecute = false;
		var res = 0;
		return function(){
			if(!hasExecute){
				res = fn();
				hasExecute = true;
				return res;
			}else{
				return res;
			}
		};
};

// _.memoize = function(fn){
// 	var oldres = {};
// 	return function(arg){
// 		if(oldres.hasOwnProperty(arg)){
// 			return oldres[arg];
// 		}else{
// 			oldres[arg] = fn(arg);
// 			return oldres[arg];
// 		}
// 	};
// };

_.memoize = function(fn){
	var cache = {};
	return function(usr){
		if(cache.hasOwnProperty(usr[0])){
			return cache[usr[0]];
		}else{
			var res = fn(usr);
			cache[usr[0]] = res;
			return res; 
		}
	};
};

_.bind = function(fn, arg){
	return fn.apply(arg);
}
module.exports = _;