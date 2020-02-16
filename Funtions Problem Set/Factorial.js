function Factorial(num){
	var fact=1;
	if (num===0 || num===1) {
		return fact;
	}
	for(;num>1;num--){
		fact*=num;
	}
	return fact;
}