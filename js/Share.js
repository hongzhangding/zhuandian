function fn(date) {
	var search1 = document.getElementsByClassName("search1")[0];

	var html = "";
	for(var i = 0; i < date.s.length; i++) {
		html += '<li><a target="_blank" href="https://www.baidu.com/s?wd=' + date.s[i] + '">' + date.s[i] + '</a></li>'
	}
	search1.innerHTML = html;
}
window.onload = function() {
	var input_search = document.getElementsByClassName("input_search")[0];
	var clicks = document.getElementById("clicks");
	var search1 = document.getElementsByClassName("search1")[0];

	input_search.onkeyup = function() {
		if(input_search.value != "") {
			search1.style.display = "block";
			var script = document.createElement("script");
			script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.value + "&cb=fn"
			document.body.appendChild(script);
		} else {
			search1.style.display = "none";
		}
	}
    clicks.onclick=function(){
    	    var clicks = document.getElementById("clicks");
	        clicks.href="https://www.baidu.com/baidu?wd="+input_search.value+"";
    }

}