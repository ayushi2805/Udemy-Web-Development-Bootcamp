var list = document.querySelectorAll("li");

for(var i=0;i<list.length;i++){
    list[i].addEventListener("click", function(){
		this.style.color="pink";
    }
)
}