cdiv=document.getElementById('div1');
function position(event) {
	var x=event.clientX;
	var y=event.clientY;
	if (x>500&&x<840&&y>100&&y<550) {
			cdiv.className="principal2";
			cdiv.innerHTML="Estoy dentro";

	}
	else
	{
		cdiv.className="principal";
		cdiv.innerHTML="Estoy fuera";
	}
}