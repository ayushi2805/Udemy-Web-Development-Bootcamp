window.onload = function(){
	var lis = document.querySelectorAll("li");

	for (var i = lis.length - 1; i >= 0; i--) {
		lis[i].addEventListener("mouseover", function(){
			this.classList.add("select");
		})

		lis[i].addEventListener("mouseout", function(){
			this.classList.remove("select");
		})

		lis[i].addEventListener("click", function(){
			this.classList.add("done");
		})
	}
}