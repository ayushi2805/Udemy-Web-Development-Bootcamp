var arr = [];
var i=0;

function reverse(array){
	for(var i=array.length-1; i>=0; i--)
		console.log(array[i]);
}

function isUniform(array){
	var first = array[0];
	for(var i=1; i<array.length; i++)
		if(first !== array[i])
			return false;
	return true;
}

function max(array){
	var max=array[0];
	for(var i=1; i<array.length; i++){
		if(max<array[i])
			max=array[i];
	}
	return max;
}

function sum(array){
	var sum=0;
	for(var i=0;i<array.length-1;i++)
		sum+=array[i];
	return sum;
}