module.exports = greet;

function greet(name, drunk){
	if(! drunk){
		return 'Hello, ' + name;
	}else{
		return 'Hello ' + name + ', you look so sexy today';
	}
}