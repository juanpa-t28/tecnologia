
var d=document.getElementById('div1');
function randommain()
{
	var rx= Math.floor((Math.random()*(1101-10))+10)

var ry= Math.floor((Math.random()*(651-10))+10)
console.log(rx);
d.style.left=rx+"px";
d.style.top=ry+"px";
}

function cli()
{
	randommain();
}


	