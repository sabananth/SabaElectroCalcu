function calculate(){
	let unit=Number(document.getElementById('unt').value);
	let sum;
	if(unit<=60){
		if(unit<=30){
			sum=(unit*2.50)+30;				//unit price=2.50Rs,fixed rate=30
		}
		else {
			sum=(30*2.50)+((unit-30)*4.85)+60;				//u.p=4.85,f.r=60
		}
	}
	else{
		 if(unit<=90){
			sum=(60*7.85)+(((unit-60)*10)+90);
		}
		else if(unit<=120){
			sum=(60*7.85)+(30*10.00)+(unit-90)*27.75+480;
		}
		else if(unit<=180){
			sum=(60*7.85)+(30*10)+(30*27.75)+(unit-120)*32+480;
		}
		else{
			sum=(60*7.85)+(30*10)+(30*27.75)+(60*32)+(unit-180)*45+540;
		}
	}
document.getElementById('rslt').innerHTML="<h2>"+(sum)+" Rs"+"</h2>";
}


