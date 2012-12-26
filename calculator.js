 
function calculate() {
var P = document.getElementById("P").value;
var L = document.getElementById("L").value;


if ( P == "" && L == "" ) {window.alert("Введите данные")}
if ( P == "" && L != ""  ) {window.alert("Введите мощность.")}
if ( P != "" && L == "" ) {window.alert("Введите длину линии.")}

P=parseFloat(P.replace(/\,/, "."));

L=parseFloat(L.replace(/\,/, "."));

var U = document.getElementById("U").value;
var gamma = document.getElementById("gamma").value;
var dU = document.getElementById("dU").value;
var faza = document.getElementById("faza").value;
var par = document.getElementById("par").value;
var lepn = document.getElementById("lepn").value;
lepn = parseFloat(lepn);
var alfa;
U = parseFloat(U);
if ( gamma == "Al" && U == 0.22 && faza == "1" ){ alfa = 0.13;}
else { if ( gamma == "Al" && U == 0.38 && faza == "1" ){ alfa = 0.0437;}
        else { if ( gamma == "Al" && U == 0.66 && faza == "1" ){ alfa = 0.0145;}
		        else { if ( gamma == "Cu" && U == 0.22 && faza == "1" ){ alfa = 0.0777;}
				       else { if ( gamma == "Cu" && U == 0.38 && faza == "1"){ alfa = 0.0261;}
					          else { if ( gamma == "Cu" && U == 0.66 && faza == "1"){ alfa = 0.00865;}
							        else { if ( gamma == "Al" && U == 0.22 && faza == "3"){ alfa = 65.3/1000;}
									       else { if ( gamma == "Cu" && U == 0.22 && faza == "3" ){ alfa = 38.9/1000;}
										         else { if ( gamma == "Al" && U == 0.38 && faza == "3"){ alfa = 21.9/1000;}
												       else { if ( gamma == "Cu" && U == 0.38 && faza == "3"){ alfa = 13.1/1000;}
													         else { if ( gamma == "Al" && U == 0.66 && faza == "3"){ alfa = 7.25/1000;}
															       else { if ( gamma == "Cu" && U == 0.66 && faza == "3"){ alfa = 4.33/1000;}
																        else { if ( gamma == "Al" && U == 6 && faza == "3"){ alfa = 0.0875/1000;}
																		     else { if ( gamma == "Cu" && U == 6 && faza == "3"){ alfa = 0.0523/1000;}
																			      else { if ( gamma == "Al" && U == 10 && faza == "3"){ alfa = 0.0316/1000;}
																				       else { if ( gamma == "Cu" && U == 10 && faza == "3"){ alfa = 0.0189/1000;}
																					          else { if (  gamma == "Al" ||  "Cu" && U == 6 || 10 && faza == "1"){window.alert("Нет данных для этого варианта. \n Не выбирайте напряжение 6 и 10 кВ и одну фазу.")}
																							        else { window.alert("Ошибка")
																									
																									}
																							  
																							  }
																					   }
																				  }
																			 }
																		}
																   }
															 }
													   }
												 }
										   }
									}
							  }
					   }
				}
		}
}
var S = (parseFloat(alfa)*(parseFloat(P)*parseFloat(L))/parseFloat(dU))/parseFloat(par);
var MassS = [0, 0.5, 0.75, 1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240 ];
var x = 1; 
var i = MassS[x];
while (i<S) { 
 x++;
     i = MassS[x];
     
} 
if ( lepn > i ) { i = lepn;}
document.getElementById("S").value = S;
if ( S <= 240){document.getElementById("Sv").value = i;}
if ( S > 240){
document.getElementById("Sv").value = "не сущ.";
window.alert("Расчитанное сечение превышает 240 мм2\n Способы решения сложивщейся ситуации. \n 1. Уменьшите мощность или длину провода.\n 2. Соедините в параллель несколько проводов \n изменив п.4 расчета.\n 3. Увеличте значение напряжения.\n 4. Увеличте допустимую потерю напряжения в п. 7 расчетано не более 10%.");}
}
function calculate0() {
var P = L = "";
gamma = "Al";
dU = 5;
S = "";
U = 0.22;
Sv = "";
document.getElementById("P").value = P;
document.getElementById("L").value = L;
document.getElementById("U").value = U;
document.getElementById("gamma").value = gamma;
document.getElementById("dU").value = dU;
document.getElementById("S").value = S;
document.getElementById("Sv").value = Sv;
}
function xxxx(id) {

	//window.alert("U" + U);
	 var U = document.getElementById("U").value;
	var faza = document.getElementById("faza").value;

	if ( U == "0.22") {document.getElementById("faza").value = "1";}
	if ( U == "0.38" || U ==  "0.66" || U ==  "6" || U ==  "10") {document.getElementById("faza").value = "3";}
	if ( U == "0.22" && lep == "Kl") {document.getElementById("lepn").value = "4";}
	if ( U == "0.38" && lep == "Kl") {document.getElementById("lepn").value = "4";}
	if ( U == "0.66" && lep == "Kl") {document.getElementById("lepn").value = "4";}
	if ( U == "6" && lep == "Kl") {document.getElementById("lepn").value = "10";}
	if ( U == "10" && lep == "Kl") {document.getElementById("lepn").value = "16";}

}