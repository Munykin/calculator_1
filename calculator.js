

function calculate() {
var marka1 = document.getElementById("marka1").value;
var marka2 = document.getElementById("marka2").value;
var marka3 = document.getElementById("marka3").value; 
var marka4 = document.getElementById("marka4").value; 
var P = document.getElementById("P").value;
var L = document.getElementById("L").value;
var dU = document.getElementById("dU").value;
var cosfi = document.getElementById("cosfi").value;
if ( P == "" || L == "" || cosfi == "" || dU == "") {window.alert("Введите данные")}
if ( P == "" && L != "" && cosfi != "" && dU != "" ) {window.alert("Введите мощность.")}
if ( P != "" && L == "" && cosfi != "" && dU != "") {window.alert("Введите длину линии.")}
if ( P != "" && L != "" && cosfi == "" && dU != "") {window.alert("Введите косинус.")}
if ( P != "" && cosfi != "" && L != "" && dU == "") {window.alert("Введите потерю напряжения.")}


P=parseFloat(P.replace(/\,/, "."));
if ( P < 0) {window.alert( "Мощность должна быть больше 0")}
var lep = document.getElementById("lep").value;

cosfi=parseFloat(cosfi.replace(/\,/, "."));
if ( cosfi < 0.1 || cosfi > 1) {window.alert( "cosfi должен быть в пределах от 0.1 до 1.")}
var tgfi = Math.sqrt((1/(parseFloat(cosfi)*parseFloat(cosfi)))-1);
var U = document.getElementById("U").value;
var gamma = document.getElementById("gamma").value;

L=parseFloat(L.replace(/\,/, "."));

dU=parseFloat(dU.replace(/\,/, "."));
if (dU == "" ) { window.alert ("Вы не ввели допустимые потери напряжения. \n Будет указано 5%");
                dU = 5;
        document.getElementById("dU").value = dU;
}
var faza = document.getElementById("faza").value;
var par = document.getElementById("par").value;
var lepn = document.getElementById("lepn").value;
lepn = parseFloat(lepn);

var sposob1 = document.getElementById("sposob1").value;
var sposob2 = document.getElementById("sposob2").value;
var sposob3 = document.getElementById("sposob3").value;
var sposob4 = document.getElementById("sposob4").value;
var sposob5 = document.getElementById("sposob5").value;
var sposob6 = document.getElementById("sposob6").value;
var sposob7 = document.getElementById("sposob7").value; //ТАБЛИЦА 1.3.10
var sposob8 = document.getElementById("sposob8").value; //ТАБЛИЦА 1.3.11
var sposob9 = document.getElementById("sposob9").value; //ТАБЛИЦА 1.3.13
var sposob10 = document.getElementById("sposob10").value; //ТАБЛИЦА 1.3.14
var sposob11 = document.getElementById("sposob11").value; //ТАБЛИЦА 1.3.15
var sposob12 = document.getElementById("sposob12").value; //ТАБЛИЦА 1.3.16
var sposob13 = document.getElementById("sposob13").value; //ТАБЛИЦА 1.3.17
var sposob14 = document.getElementById("sposob14").value; //ТАБЛИЦА 1.3.18
var sposob15 = document.getElementById("sposob15").value; //ТАБЛИЦА 1.3.19
var sposob16 = document.getElementById("sposob16").value; //ТАБЛИЦА 1.3.20
var sposob17 = document.getElementById("sposob17").value; //ТАБЛИЦА 1.3.21
var sposob18 = document.getElementById("sposob18").value; //ТАБЛИЦА 1.3.22
var sposob19 = document.getElementById("sposob19").value; //ТАБЛИЦА 1.3.29
var sposob20 = document.getElementById("sposob20").value; //ТАБЛИЦА 1.3.31
var sposob21 = document.getElementById("sposob21").value; //ТАБЛИЦА 2.4
var sposob22 = document.getElementById("sposob22").value; //ТАБЛИЦА 2.41
 var tip = document.getElementById("tip").value;
var alfa1;
var alfa2;
var lep;
var XLSR;
var dUa;
var dUap;
var F;
var Fv;
var Razm;
var MP = (parseFloat(P)/parseFloat(cosfi)) * parseFloat(L);
var MQ = parseFloat(P) * parseFloat(tgfi) * parseFloat(L);
U = parseFloat(U);
var Q = P * tgfi;
var S = Math.sqrt((P*P)+(Q*Q));
var tip = document.getElementById("tip").value;
var Ir; // Расчетный ток.
var K1 = 1; // к-т учитывает темературу окружающей среды.
var K2 = 1; // к-т учитывает число проложенных в траншее кабелей.
var K3 = 1; // к-т учитывает кратковременный или продолжительный режим работы.
var K4 = 1; // к-т учитывает сечение кабеля и его место при крокладке в блоке.
var K5 = 1; // к-т учитывает напряжение кабеля при прокладке в блоке.
var K6 = 1; // к-т учитывает общую среднесуточную нагрузку при прокладке в блоке.
var K7 = 1; // к-т учитывает прокладку кабеля в двух параллельых блоках одинаковой конфигурации.
var K8 = 1; // к-т учитывает прокладку проводов в коробах и лотках.
var K9 = 1; // к-т учитывает увеличение допустимой нагрузки на кабели до 10 кВ при аварийном режиме.
var K10 = 1; // к-т учитывает расположение шин на изоляторов.

var FN; // Выбранное сечение проводника по нагреву.
if (faza == "3") {Ir = ((S*1000)/(Math.sqrt(3)*parseFloat(U)*1000))/par;}
else { Ir = ((S*1000)/(parseFloat(U)*1000))/par;
}

var Id = K1*K2*K3*K4*K5*K6*K7*K8*K9*K10*Ir; // Ток который должен выдерживать провод с учетом условий прокладки.

//ТАБЛИЦА 1.3.4 MassCu_izol_pvx_otkryto Допустимый длительный ток для проводов и шнуров с резиновой и поливинилхлоридной изоляцией с медными жилами 
var MassSechCu_izol_pvx_otkryto = [0, 0.5, 0.75, 1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400 ]; // Сечения для открыто проложенных.
var MassTok_Cu_izol_pvx_otkryto = [0, 11, 15, 17, 20, 23, 26, 30, 34, 41, 46, 50, 62, 80, 100, 140, 170, 215, 270, 330, 385, 440, 510, 605, 695, 830 ]; // Ток для открыто проложенных.
var MassTok_Cu_izol_pvx_v_trube2_1 = [0, 0, 0, 16, 18, 19, 24, 27, 32, 38, 42, 46, 54, 70, 85, 115, 135, 185, 225, 275, 315, 360]; // Ток для проводов проложенных в трубе двух одножильных.
var MassTok_Cu_izol_pvx_v_trube3_1 = [0, 0, 0, 15, 16, 17, 22, 25, 28, 35, 39, 42, 51, 60, 80, 100, 125, 170, 210, 255, 290, 330 ]; // Ток для проводов проложенных в трубе трех одножильных.
var MassTok_Cu_izol_pvx_v_trube4_1 = [0, 0, 0, 14, 15, 16, 20, 25, 26, 30, 34, 40, 46, 50, 75, 90, 115, 150, 185, 225, 260 ]; // Ток для проводов проложенных в трубе четырех одножильных.
var MassTok_Cu_izol_pvx_v_trube_2_1_1 = [0, 0, 0, 15, 16, 18, 23, 25, 28, 32, 37, 40, 48, 55, 80, 100, 125, 160, 195, 245, 295 ]; // Ток для проводов проложенных в трубе одного двухжильного.
var MassTok_Cu_izol_pvx_v_trube_3_1_1 = [0, 0, 0, 14, 14.5, 15, 19, 21, 24, 27, 31, 34, 43, 50, 70, 85, 100, 135, 175, 215, 250 ]; // Ток для проводов проложенных в трубе одного трехжильного.



//ТАБЛИЦА 1.3.5 MassAlizolpvxotkryto Допустимый длительный ток для проводов с резиновой и поливинилхлоридной изоляцией с алюминиевыми жилами 

var MassSechAlizolpvxotkryto = [0, 2, 2.5, 3, 4, 5, 6, 8, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400 ]; // Сечения для открыто проложенных.
var MassTok_Al_izol_pvx_otkryto = [0, 21, 24, 27, 32, 36, 39, 46, 60, 75, 105, 130, 165, 210, 255, 295, 340, 390, 465, 535, 645 ]; // Ток для открыто проложенных.
var MassTok_Al_izol_pvx_v_trube2_1 = [0, 19, 20, 24, 28, 32, 36, 43, 50, 60, 85, 100, 140, 175, 215, 245, 275 ]; // Ток для проводов проложенных в трубе двух одножильных.
var MassTok_Al_izol_pvx_v_trube3_1 = [0, 18, 19, 22, 28, 30, 32, 40, 47, 60, 80, 95, 130, 165, 200, 220, 255 ]; // Ток для проводов проложенных в трубе трех одножильных.
var MassTok_Al_izol_pvx_v_trube4_1 = [0, 15, 19, 21, 23, 27, 30, 37, 39, 55, 70, 85, 120, 140, 175, 200 ]; // Ток для проводов проложенных в трубе четырех одножильных.
var MassTok_Al_izol_pvx_v_trube_2_1_1 = [0, 17, 19, 22, 25, 28, 31, 38, 42, 60, 75, 95, 125, 150, 190, 230 ]; // Ток для проводов проложенных в трубе одного двухжильного.
var MassTok_Al_izol_pvx_v_trube_3_1_1 = [0, 17, 19, 22, 25, 28, 31, 38, 42, 60, 75, 95, 125, 150, 190, 230 ]; // Ток для проводов проложенных в трубе одного трехжильного.


//ТАБЛИЦА 1.3.6 MassCu_izol_bron_otkryto Допустимый длительный ток для проводов с медными жилами с резиновой изоляцией в металлических защитных оболочках и кабелей с медными жилами с резиновой изоляцией в свинцовой, поливинилхлоридной, найритовой или резиновой оболочке, бронированных и небронированных 

var MassSechCu_izol_bron_otkryto = [0, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240 ]; // Одножильные  открыто проложенные.
var MassTok_Cu_izol_bron_1zhila_vozd = [ 0, 23, 31, 38, 60, 75, 105, 130, 165, 210, 250, 295, 340, 390, 465 ]; // Ток для одножильных проложенных в воздухе.
var MassTok_Cu_izol_bron_2zhily_vozd = [0, 21, 29, 38, 55, 70, 90, 105, 135, 165, 200, 230, 270, 310]; // Ток для двухжильных проложенных в воздухе.
var MassTok_Cu_izol_bron_2zhily_zemlya = [0, 34, 42, 55, 80, 105, 135, 160, 205, 245, 295, 340, 390, 440 ]; //  Ток для двухжильных проводов проложенных в земле.
var MassTok_Cu_izol_bron_3zhily_vozd = [0, 19, 27, 32, 42, 60, 75, 90, 110, 140, 170, 200, 235, 270 ]; // Ток для трехжильных проложенных в воздухе.
var MassTok_Cu_izol_bron_3zhily_zemlya = [ 0, 29, 38, 46, 70, 90, 115, 140, 175, 210, 255, 295, 335, 385 ]; //Ток для трехжильных проложенных в земле.
var MassTok_Cu_izol_bron_4zhily_vozd = [0, 19, 27, 32, 42, 60, 75, 90, 110, 140, 170, 200, 235, 270 ]; // Ток для четырехжильных проложенных в воздухе.
var MassTok_Cu_izol_bron_4zhily_zemlya = [0, 29, 38, 46, 70, 90, 115, 140, 175, 210, 255, 295, 335, 385]; // Ток для четырехжильных проложенных в земле.

//ТАБЛИЦА 1.3.7 MassAl_izol_bron_otkryto Допустимый длительный ток для проводов с алюминиевыми жилами с резиновой изоляцией в металлических защитных оболочках и кабелей с медными жилами с резиновой изоляцией в свинцовой, поливинилхлоридной, найритовой или резиновой оболочке, бронированных и небронированных 

var MassSechAl_izol_bron_otkryto = [0, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240 ]; // Сечения.
var MassTok_Al_izol_bron_otkryto = [0, 23, 31, 38, 60, 75, 105, 130, 165, 210, 250, 295, 340, 390, 465 ]; // Ток для одножильных проложенных в воздухе.
var MassTok_Al_izol_bron_2zhily_vozd = [ 0, 21, 29, 38, 55, 70, 90, 105, 135, 165, 200, 230, 270, 310]; // Ток для двухжильных проложенных в воздухе.
var MassTok_Al_izol_bron_2zhily_zemlya = [0, 34, 42, 55, 80, 105, 135, 160, 205, 245, 295, 340, 390, 440]; // Ток для двухжильных проводов проложенных в земле.
var MassTok_Al_izol_bron_3zhily_vozd = [0, 19, 27, 32, 42, 60, 75, 90, 110, 140, 170, 200, 235, 270]; // Ток для трехжильных проложенных в воздухе.
var MassTok_Al_izol_bron_3zhily_zemlya = [0, 29, 38, 46, 70, 90, 115, 140, 175, 210, 255, 295, 335, 385 ]; // Ток для трехжильных проложенных в земле.
var MassTok_Al_izol_bron_4zhily_zemlya = [0, 26.68, 34.96, 42.32, 64.4, 82.8, 105.8, 128.8, 161, 193.2, 234.6, 271.4, 308.2, 354.2 ]; // Ток для трехжильных проложенных в земле.
var MassTok_Al_izol_bron_4zhily_vozd = [0, 17.5, 24.84, 29.44, 38.64, 55.2, 69, 82.8, 101.2, 128.8, 156.4, 184, 216.2, 248.4]; // Ток для трехжильных проложенных в воздухе.

//ТАБЛИЦА 1.3.8  Допустимый длительный ток для переносных шланговых легких и средних шнуров, переносных шланговых тяжелых кабелей, шахтных гибких шланговых, прожекторных кабелей и переносных проводов с медными жилами 

var MassSechCu_shlang = [0, 0.5, 0.75, 1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70 ]; // Сечения одножильные.
var MassTok_Cu_shlang_1zhila = [0, 0, 0, 0, 0, 40, 50, 65, 90, 120, 160, 190, 235, 290 ]; // Ток для одножильных.
var MassTok_Cu_shlang_2zhila = [0,  12, 16, 18, 23, 33, 43, 55, 75, 95, 125, 150, 185, 235]; // Ток для двухжильных.
var MassTok_Cu_shlang_3zhila = [0, 0, 14, 16, 20, 28, 36, 45, 60, 80, 105, 130, 160, 200]; // Ток для трехжильных.

//ТАБЛИЦА 1.3.9  Допустимый длительный ток для переносных шланговых с медными жилами с резиновой изоляцией кабелей для торфопредприятий

var MassSechCu_shlang_torf = [0, 6, 10, 16, 25, 35, 50, 70 ]; // Сечения.
var MassTok_Cu_shlang_torf05 = [0, 44, 60, 80, 100, 125, 155, 190 ]; // Ток для напряжения 0,5кВ.
var MassTok_Cu_shlang_torf3 = [0, 45, 60, 80, 105, 125, 155, 195]; // Ток для напряжения 3кВ.
var MassTok_Cu_shlang_torf6 = [0, 47, 65, 85, 105, 130, 160 ]; // Ток для напряжения 6кВ.

//ТАБЛИЦА 1.3.10  Допустимый длительный ток для шланговых с медными жилами с резиновой изоляцией кабелей для передвижных электроприемников 

var MassSechCu_shlang_peredv = [0, 16, 25, 35, 50, 70, 95, 120, 150 ]; // Сечения.
var MassTok_Cu_shlang_peredv_3 = [0, 85, 115, 140, 175, 215, 260, 305, 345]; // Ток для напряжения 3кВ.
var MassTok_Cu_shlang_peredv_6 = [0, 90, 120, 145, 180, 220, 265, 310, 350 ]; // Ток для напряжения 6кВ.

//ТАБЛИЦА 1.3.11  Допустимый длительный ток для проводов с медными жилами с резиновой изоляцией для электрифицированного транспорта 1, 3 и 4 кВ  

var MassSechCu_elektrificir = [0, 1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 350 ]; // Сечения.
var MassTok_Cu_elektrificir = [0, 20, 25, 40, 50, 65, 90, 115, 150, 185, 230, 285, 340, 390, 445, 505, 590, 670, 745]; // Ток.

// Раздел 2 КАБЕЛИ С БУМАЖНОЙ ИЗОЛЯЦИЕЙ

//ТАБЛИЦА 1.3.13  Допустимый длительный ток для кабелей с медными жилами с бумажной пропитанной маслоканифольной и нестекающей массами изоляцией в свинцовой оболочке, прокладываемых в земле 

var MassSech_Cu_maslo_bron_zemlya = [0, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 625, 800 ]; // Сечения.
var MassTok__Cu_maslo_bron_1_zemlya = [0, 0, 140, 175, 235, 285, 360, 440, 520, 595, 675, 755, 880, 1000, 1220, 1400, 1520, 1700 ]; // Ток для одножильных до 1 кВ в земле.
var MassTok__Cu_maslo_bron_2_zemlya = [0, 80, 105, 140, 185, 225, 270, 325, 380, 435, 500 ]; // Ток для двухжильных до 1 кВ в земле.
var MassTok__Cu_maslo_bron_3_zemlya_3kV = [0, 70, 95, 120, 160, 190, 235, 285, 340, 390, 435, 490, 570 ]; // Ток для трехжильных до 3 кВ в земле.
var MassTok__Cu_maslo_bron_3_zemlya_6kV = [0, 0, 80, 105, 135, 160, 200, 245, 295, 340, 390, 440, 510 ]; // Ток для трехжильных  6 кВ в земле.
var MassTok__Cu_maslo_bron_3_zemlya_10kV = [0, 0, 0, 95, 120, 150, 180, 215, 265, 310, 355, 400, 460 ]; // Ток для трехжильных  10 кВ в земле.
var MassTok__Cu_maslo_bron_4_zemlya_10kV = [0, 0, 85, 115, 150, 175, 215, 265, 310, 350, 395, 450 ]; // Ток для четырехжильных до 1 кВ в земле.

//ТАБЛИЦА 1.3.14  Допустимый длительный ток для кабелей с медными жилами с бумажной пропитанной маслоканифольной и нестекающей массами изоляцией в свинцовой оболочке, прокладываемых в воде 

var MassSech_Cu_maslo_bron_voda = [0, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240 ]; // Сечения.
var MassTok__Cu_maslo_bron_3_voda_3kV = [0, 0, 210, 250, 305, 375, 440, 505, 565, 615, 715  ]; // Ток для трехжильных до 3 кВ в воде.
var MassTok__Cu_maslo_bron_3_voda_6kV = [ 0, 135, 170, 205, 255, 310, 375, 430, 500, 545, 625 ]; // Ток для трехжильных до 3 кВ в воде.
var MassTok__Cu_maslo_bron_3_voda_10kV = [0, 120, 150, 180, 220, 275, 340, 395, 450, 510, 585 ]; // Ток для трехжильных до 3 кВ в воде.
var MassTok__Cu_maslo_bron_3_voda_1kV = [ 0, 0, 195, 230, 285, 350, 410, 470 ]; // Ток для четырехжильных  до 1 кВ в воде.

//ТАБЛИЦА 1.3.15  Допустимый длительный ток для кабелей с медными жилами с бумажной пропитанной маслоканифольной и нестекающей массами изоляцией в свинцовой оболочке, прокладываемых в воздухе 


var MassSech_Cu_maslo_bron_voda = [0, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 625, 800 ]; // Сечения.
var MassTok__Cu_maslo_bron_1_vozdux_1kV = [ 0, 0, 95, 120, 160, 200, 245, 305, 360, 415, 470, 525, 610, 720, 880, 1020, 1180, 1400 ]; // Ток для одножильных до 1 кВ в воздухе.
var MassTok__Cu_maslo_bron_2_vozdux_1kV = [ 0, 55, 75, 95, 130, 150, 185, 225, 275, 320, 375 ]; // Ток для двухжильных до 1 кВ в воздухе.
var MassTok__Cu_maslo_bron_3_vozdux_3kV = [ 0, 45, 60, 80, 105, 125, 155, 200, 245, 285, 330, 375, 430 ]; // Ток для трехжильных до 3 кВ в воздухе.
var MassTok__Cu_maslo_bron_3_vozdux_6kV = [0, 0, 55, 65, 90, 110, 145, 175, 215, 250, 290, 325, 375  ]; // Ток для трехжильных  6 кВ в воздухе.
var MassTok__Cu_maslo_bron_3_vozdux_10kV = [ 0, 0, 0, 60, 85, 105, 135, 165, 200, 240, 270, 305, 350 ]; // Ток для трехжильных  10 кВ в воздухе.
var MassTok__Cu_maslo_bron_4_vozdux_1kV = [ 0, 0, 0, 80, 100, 120, 145, 185, 215, 260, 300, 340 ]; // Ток для четырехжильных  1 кВ в воздухе.

//ТАБЛИЦА 1.3.16  Допустимый длительный ток для кабелей с алюминиевыми жилами с бумажной пропитанной маслоканифольной и нестекающими массами изоляцией в свинцовой или алюминиевой оболочке, прокладываемых в земле


var MassSech_Al_maslo_bron_zemlya = [0, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 625, 800 ]; // Сечения.
var MassTok__Al_maslo_bron_1_zemlya = [0, 0, 110, 135, 180, 220, 275, 340, 400, 460, 520, 580, 675, 770, 940, 1080, 1170, 1310 ]; // Ток для одножильных до 1 кВ в земле.
var MassTok__Al_maslo_bron_2_zemlya = [0, 60, 80, 110, 140, 175, 210, 250, 290, 335, 385 ]; // Ток для двухжильных до 1 кВ в земле.
var MassTok__Al_maslo_bron_3_zemlya_3kV = [ 0, 55, 75, 90, 125, 145, 180, 220, 260, 300, 335, 380, 440 ]; // Ток для трехжильных до 3 кВ в земле.
var MassTok__Al_maslo_bron_3_zemlya_6kV = [0, 0, 60, 80, 105, 125, 155, 190, 225, 260, 300, 340, 390 ]; // Ток для трехжильных  6 кВ в земле.
var MassTok__Al_maslo_bron_3_zemlya_10kV = [0, 0, 0, 75, 90, 115, 140, 165, 205, 240, 275, 310, 355 ]; // Ток для трехжильных  10 кВ в земле.
var MassTok__Al_maslo_bron_4_zemlya_10kV = [ 0, 0, 65, 90, 115, 135, 165, 200, 240, 270, 305, 345 ]; // Ток для четырехжильных до 1 кВ в земле.

//ТАБЛИЦА 1.3.17  Допустимый длительный ток для кабелей с алюминиевыми жилами с бумажной пропитанной маслоканифольной и нестекающей массами изоляцией в свинцовой оболочке, прокладываемых в воде 

var MassSech_Al_maslo_bron_voda = [0, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240 ]; // Сечения.
var MassTok__Al_maslo_bron_3_voda_3kV = [ 0, 0, 160, 190, 235, 290, 340, 390, 435, 475, 550 ]; // Ток для трехжильных до 3 кВ в воде.
var MassTok__Al_maslo_bron_3_voda_6kV = [ 0, 105, 130, 160, 195, 240, 290, 330, 385, 420, 480 ]; // Ток для трехжильных 6 кВ в воде.
var MassTok__Al_maslo_bron_3_voda_10kV = [ 0, 90, 115, 140, 170, 210, 260, 305, 345, 390, 450 ]; // Ток для трехжильных 10 кВ в воде.
var MassTok__Al_maslo_bron_3_voda_1kV = [ 0, 0, 150, 175, 220, 270, 315, 306 ]; // Ток для четырехжильных  до 1 кВ в воде.

//ТАБЛИЦА 1.3.18  Допустимый длительный ток для кабелей с алюминиевыми жилами с бумажной пропитанной маслоканифольной и нестекающей массами изоляцией в свинцовой или алюминиевой оболочке, прокладываемых в воздухе


var MassSech_Al_maslo_bron_voda = [0, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 625, 800 ]; // Сечения.
var MassTok__Al_maslo_bron_1_vozdux_1kV = [ 0, 0, 75, 90, 125, 155, 190, 235, 275, 320, 360, 405, 470, 555, 675, 785, 910, 1080 ]; // Ток для одножильных до 1 кВ в воздухе.
var MassTok__Al_maslo_bron_2_vozdux_1kV = [ 0, 42, 55, 75, 100, 115, 140, 175, 210, 245, 290 ]; // Ток для двухжильных до 1 кВ в воздухе.
var MassTok__Al_maslo_bron_3_vozdux_3kV = [ 0, 35, 46, 60, 80, 95, 120, 155, 190, 220, 255, 290, 330 ]; // Ток для трехжильных до 3 кВ в воздухе.
var MassTok__Al_maslo_bron_3_vozdux_6kV = [ 0, 0, 42, 50, 70, 85, 110, 135, 165, 190, 225, 250, 290 ]; // Ток для трехжильных  6 кВ в воздухе.
var MassTok__Al_maslo_bron_3_vozdux_10kV = [0, 0, 0, 46, 65, 80, 105, 130, 155, 185, 210, 235, 270  ]; // Ток для трехжильных  10 кВ в воздухе.
var MassTok__Al_maslo_bron_4_vozdux_1kV = [ 0, 0, 45, 60, 75, 95, 110, 140, 165, 200, 230, 360 ]; // Ток для четырехжильных  1 кВ в воздухе.

//ТАБЛИЦА 1.3.19  Допустимый длительный ток для трехжильных кабелей напряжением 6 кВ с медными жилами с обедненнопропитанной изоляцией в общей свинцовой оболочке, прокладываемых в земле и воздухе 

var MassSech_Cu_maslo_bron_3vz_6kV = [0, 16, 25, 35, 50, 70, 95, 120, 150  ]; // Сечения.
var MassTok__Cu_maslo_bron_3z_6kV = [ 0, 90, 120, 145, 180, 220, 265, 310, 355  ]; // Ток для трехжильных 6 кВ в земле.
var MassTok__Cu_maslo_bron_3v_6kV = [ 0, 65, 90, 110, 140, 170, 210, 245, 290 ]; // Ток для двухжильных 6 кВ в воздухе.

//ТАБЛИЦА 1.3.20  Допустимый длительный ток для трехжильных кабелей напряжением 6 кВ с алюминиевыми жилами с обндненнопропитанной изоляцией в общей свинцовой оболочке, прокладываемых в земле и воздухе 

var MassSech_Al_maslo_bron_3vz_6kV = [0, 16, 25, 35, 50, 70, 95, 120, 150  ]; // Сечения.
var MassTok__Al_maslo_bron_3z_6kV = [ 0, 70, 90, 110, 140, 170, 205, 240, 275  ]; // Ток для трехжильных 6 кВ в земле.
var MassTok__Al_maslo_bron_3v_6kV = [ 0, 50, 70, 85, 110, 130, 160, 190, 225 ]; // Ток для двухжильных 6 кВ в воздухе.

//ТАБЛИЦА 1.3.21  Допустимый длительный ток для кабелей с отдельно освинцованными медными жилами с бумажной пропитанной маслоканифольной и нестекающей массами изоляцией, прокладываемых в земле, воде, воздухе 
var MassSech_Cu_maslo_bron_3zvv_2035kV = [ 0, 25, 35, 50, 70 ,95, 120, 150, 185 ]; // Сечения.
var MassTok__Cu_maslo_bron_3z_20kV = [ 0, 110, 135, 165, 200, 240, 275, 315, 355 ]; // Ток для трехжильных 20 кВ в земле.
var MassTok__Cu_maslo_bron_3voda_20kV = [ 0, 120, 145, 180, 225, 275, 315, 350, 390 ]; // Ток для двухжильных 20 кВ в воде.
var MassTok__Cu_maslo_bron_3vozd_20kV = [0, 85, 100, 120, 150, 180, 205, 230, 265 ]; // Ток для двухжильных 20 кВ в воздухе.
var MassTok__Cu_maslo_bron_3z_35kV = [ 0, 0, 0, 0, 0, 0, 270, 310 ]; // Ток для трехжильных 35 кВ в земле.
var MassTok__Cu_maslo_bron_3voda_35kV = [ 0, 0, 0, 0, 0, 0, 290 ]; // Ток для двухжильных 35 кВ в воде.
var MassTok__Cu_maslo_bron_3vozd_35kV = [ 0, 0, 0, 0, 0, 0, 205, 230 ]; // Ток для двухжильных 35 кВ в воздухе.

//ТАБЛИЦА 1.3.22  Допустимый длительный ток для кабелей с отдельно освинцованными алюминиевыми жилами с бумажной пропитанной маслоканифольной и нестекающей массами изоляцией, прокладываемых в земле, воде, воздухе 
var MassSech_Cu_maslo_bron_3zvv_2035kV = [ 0, 25, 35, 50, 70 ,95, 120, 150, 185 ]; // Сечения.
var MassTok__Cu_maslo_bron_3z_20kV = [ 0, 85, 105, 125, 155, 185, 210, 240, 275  ]; // Ток для трехжильных 20 кВ в земле.
var MassTok__Cu_maslo_bron_3voda_20kV = [ 0, 90, 110, 140, 175, 210, 245, 270, 300 ]; // Ток для двухжильных 20 кВ в воде.
var MassTok__Cu_maslo_bron_3vozd_20kV = [0, 65, 75, 90, 115, 140, 160, 175, 205 ]; // Ток для двухжильных 20 кВ в воздухе.
var MassTok__Cu_maslo_bron_3z_35kV = [ 0, 0, 0, 0, 0, 0, 210, 240 ]; // Ток для трехжильных 35 кВ в земле.
var MassTok__Cu_maslo_bron_3voda_35kV = [ 0, 0, 0, 0, 0, 0, 225 ]; // Ток для двухжильных 35 кВ в воде.
var MassTok__Cu_maslo_bron_3vozd_35kV = [ 0, 0, 0, 0, 0, 0, 160, 175 ]; // Ток для двухжильных 35 кВ в воздухе.

// Раздел 3 Неизолированные провода и шины
//ТАБЛИЦА 1.3.29  Допустимый длительный ток для неизолированных проводов по ГОСТ 839-80
var MassSech_Al_Cu_neizol_provod = [ 0, 10, 16, 25, 35, 50, 70, 95, 120, 120, 120, 150, 150, 150, 185, 185, 185, 240, 240, 240, 300, 300, 330, 330, 400, 400, 500, 500, 600, 700 ]; // Сечения.
var MassTok__Al_neizol_provod_AS_vne = [0, 84, 111, 142, 175, 210, 265, 330, 390, 375, 450, 450, 450, 520, 510, 515, 605, 610, 610, 710, 690, 680, 730, 830, 825, 860, 960, 945, 1050, 1180    ]; // Вне помещений АС, АСКС, АСК, АСКП.
var MassTok__Al_neizol_provod_AS_vnutri = [0, 53, 79, 109, 135, 165, 210, 260, 313, 0, 365, 365, 0, 430, 425, 0, 505, 505, 0, 600, 585, 0, 0, 713, 705, 0, 830, 815, 920, 1040 ]; //  Внутри помещений АС, АСКС, АСК, АСКП.
var MassTok__Cu_neizol_provod_M_vne = [0, 95, 133, 183, 223, 275, 337, 422, 485, 0, 570, 0, 0, 650, 0, 0, 760, 0, 0, 880, 0, 0, 0, 1050, 0, 0, 0, 0, 0, 0 ]; // Вне помещений М.
var MassTok__Al_neizol_provod_A_AKP_vne = [ 0, 0, 105, 136, 170, 215, 265, 320, 375, 0, 440, 0, 0, 500, 0, 0, 590, 0, 0, 680, 0, 0, 0, 0, 815, 0, 0, 980, 0, 1100, 0 ]; //  Вне помещений А, АКП.
var MassTok__Cu_neizol_provod_M_vnutri = [0, 60, 102, 137, 173, 219, 268, 341, 395, 0, 465, 0, 0, 540, 0, 0, 685, 0, 0, 740, 0, 0, 0, 0, 895, 0, 0, 0, 0, 0, 0  ]; // Внутри помещений М.
var MassTok__Al_neizol_provod_A_AKP_vnutri = [0, 0, 75, 106, 130, 165, 210, 255, 300, 0, 355, 0, 0, 410, 0, 0, 490, 0, 0, 570, 0, 0, 0, 690, 0, 0, 820, 0, 955, 0 ]; // Внутри помещений А и АКП.


//Таблица 1.3.31.
//Допустимый длительный ток для шин прямоугольного сечения

var MassSech_Al_Cu_neizol_shina_pryamoug = [0, "15*3", "20*3", "25*1", "30*4", "40*4", "40*5", "50*5", "60*6", "80*6", "100*6", "60*8", "80*8", "100*8", "120*8", "60*10", "80*10", "100*10", "120*10" ]; // Сечения.
var MassSech_Al_Cu_neizol_shina_pryamoug_znach = [0, 45, 60, 25, 120, 160, 200, 250, 360, 480, 600, 480, 640, 800, 960, 600, 800, 1000, 1200 ]; // Сечения.
var MassTok__Cu_neizol_shina_pryamoug1 = [0, 210, 275, 340, 475, 625, 700, 860, 955, 1125, 1480, 1810, 1320, 1690, 2080, 2400, 1475, 1900, 2310, 2650 ]; // Медные шины 1 шт на фазу или полюс.
var MassTok__Cu_neizol_shina_pryamoug2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1740, 2110, 2470, 2160, 2620, 3060, 3400, 2560, 3100, 3610, 4100   ]; // Медные шины 2 шт на фазу или полюс.
var MassTok__Cu_neizol_shina_pryamoug3 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2240, 2720, 3170, 2790, 3370, 3930, 4340, 3300, 3990, 4650, 5200   ]; // Медные шины 3 шт на фазу или полюс.
var MassTok__Cu_neizol_shina_pryamoug4 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5300, 5900   ]; // Медные шины 4 шт на фазу или полюс.
var MassTok__Al_neizol_shina_pryamoug1 = [ 0, 165, 215, 265, 365, 480, 540, 665, 740, 870, 1150, 1425, 1025, 1320, 1625, 1900, 1155, 1480, 1820, 2070   ]; // Алюминиевые шины 1 шт на фазу или полюс.
var MassTok__Al_neizol_shina_pryamoug2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1350, 1630, 1935, 1680, 2040, 2390, 2650, 2010, 2410, 2860, 3200   ]; // Алюминиевые шины 2 шт на фазу или полюс.
var MassTok__Al_neizol_shina_pryamoug3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1720, 2100, 2500, 2180, 2620, 3050, 3380, 2650, 3100, 3650, 4100    ]; // Алюминиевые шины 3 шт на фазу или полюс.
var MassTok__Al_neizol_shina_pryamoug4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4150, 5650    ]; // Алюминиевые шины 4 шт на фазу или полюс.



//Допустимые токовые нагрузки на защищенные провода СИП-3 (в соответствии с ТУ 16.К71-272-98 и SFS 5791) приведены в таблице 2.4. 

var MassSech_Al_SIP3 = [0,35, 50, 70, 95, 120, 150 ]; // Сечения.
var MassTok__Al_SIP3 = [0, 200, 245, 310, 370, 430, 485 ]; // Открыто.

//Допустимые токовые нагрузки на защищенные провода СИП-4  Таблица 2.41

var MassSech_Al_SIP4 = [0,10, 35, 50, 70, 95, 120 ]; // Сечения.
var MassTok__Al_SIP4 = [0, 76, 160, 195, 240, 300, 340  ]; // Открыто.

var z = 0;// Ток выбранного по нагреву провода
var y = 0; // Номер строки в таблице сечения по наргеву
var i = 0; // Сечение выбранного по потерям наряжения провода

 // window.alert("sposob22=" + sposob22);
if ( sposob1==0 && sposob2==0 && sposob3==0 && sposob4==0 && sposob5==0 && sposob6 ==0&& sposob7==0 && sposob8==0 && sposob9==0 && sposob10==0 && sposob11==0 && sposob12==0 && sposob13==0 && sposob14==0 && sposob15==0 && sposob16==0  && sposob17==0 && sposob18==0  && sposob19==0 && sposob20==0 && sposob21==0 && sposob22==0 && tip == 0) { window.alert ("Выберите Кабель провод или шину в п.5 расчета."); 
z = NaN; 
i = NaN;}
//window.alert ("sposob=" + sposob1)
if ( sposob1==0 && sposob2==0 && sposob3==0 && sposob4==0 && sposob5==0 && sposob6 ==0&& sposob7==0 && sposob8==0 && sposob9==0 && sposob10==0 && sposob11==0 && sposob12==0 && sposob13==0 && sposob14==0 && sposob15==0 && sposob16==0  && sposob17==0 && sposob18==0  && sposob19==0 && sposob20==0 && sposob21==0 && sposob22==0 && tip != 0) { window.alert ("Выберите тип провода или кабеля."); 
z = NaN; 
i = NaN;}
/*if ( sposob1!=0 || sposob2!=0 || sposob3!=0 || sposob4!=0 || sposob5!=0 || sposob6 !=0 || sposob7!=0 || sposob8!=0 || sposob9!=0 || sposob10!=0 || sposob11!=0 || sposob12 !=0 || sposob13 !=0 || sposob14==0 || sposob15 !=0 || sposob16 !=0  || sposob17 !=0 || sposob18 !=0  || sposob19 !=0 || sposob20 !=0 || sposob21 !=0 || sposob22!=0 && tip != 0) { window.alert ("Выберите условия прокладки."); 
z = NaN; 
i = NaN;}
*/
while (z<Id) { 
 y++; 

if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_otkryto"  ) { z = MassTok_Cu_izol_pvx_otkryto[y];  }
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube2_1") { z = MassTok_Cu_izol_pvx_v_trube2_1[y];}
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube3_1") { z = MassTok_Cu_izol_pvx_v_trube3_1[y]; }
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube4_1") { z = MassTok_Cu_izol_pvx_v_trube4_1[y]; }
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube_2_1_1") { z = MassTok_Cu_izol_pvx_v_trube_2_1_1[y]; }
if (tooltipsposob1.style.display == 'block' &&  marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube_3_1_1") { z = MassTok_Cu_izol_pvx_v_trube_3_1_1[y]; }

 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_otkryto") { z = MassTok_Al_izol_pvx_otkryto[y];  }  
 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube2_1") { z = MassTok_Al_izol_pvx_v_trube2_1[y]; }  
 if ( tooltipsposob2.style.display == 'block' && marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube3_1") { z = MassTok_Al_izol_pvx_v_trube3_1 [y];}  
 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube4_1") { z = MassTok_Al_izol_pvx_v_trube4_1[y]; }  
 if ( tooltipsposob2.style.display == 'block' && marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube_2_1_1") { z = MassTok_Al_izol_pvx_v_trube_2_1_1[y]; }  
 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube_3_1_1") { z = MassTok_Al_izol_pvx_v_trube_3_1_1[y]; }  
 
  if (tooltipsposob3.style.display == 'block' &&  marka1 == "tabl136" && sposob3 == "Cu_izol_bron_1zhila_vozd") { z = MassTok_Cu_izol_bron_1zhila_vozd [y];  }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 =="Cu_izol_bron_2zhily_vozd" ) { z = MassTok_Cu_izol_bron_2zhily_vozd[y]; }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 =="Cu_izol_bron_2zhily_zemlya" ) { z = MassTok_Cu_izol_bron_2zhily_zemlya [y];}  
 if (tooltipsposob3.style.display == 'block' && marka1 == "tabl136" && sposob3 =="Cu_izol_bron_3zhily_vozd" ) { z = MassTok_Cu_izol_bron_3zhily_vozd[y]; }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 == "Cu_izol_bron_3zhily_zemlya") { z = MassTok_Cu_izol_bron_3zhily_zemlya[y]; }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 == "Cu_izol_bron_4zhily_vozd" ) { z = MassTok_Cu_izol_bron_4zhily_vozd[y]; } 
  if (tooltipsposob3.style.display == 'block' && marka1 == "tabl136" && sposob3 == "Cu_izol_bron_4zhily_zemlya") { z = MassTok_Cu_izol_bron_4zhily_zemlya[y];  }  
  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 == "Al_izol_bron_1zhila_vozd") { z = MassTok_Al_izol_bron_1zhila_vozd [y];  }  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 =="Al_izol_bron_2zhily_vozd" ) { z = MassTok_Al_izol_bron_2zhily_vozd[y]; }  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 =="Al_izol_bron_2zhily_zemlya" ) { z = MassTok_Al_izol_bron_2zhily_zemlya [y];}  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 =="Al_izol_bron_3zhily_vozd" ) { z = MassTok_Al_izol_bron_3zhily_vozd[y]; }  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 == "Al_izol_bron_3zhily_zemlya") { z = MassTok_Al_izol_bron_3zhily_zemlya[y]; }  
 if ( tooltipsposob4.style.display == 'block'&& marka1 == "tabl137" && sposob4 == "Al_izol_bron_4zhily_vozd" ) { z = MassTok_Al_izol_bron_4zhily_vozd[y]; } 
 if (tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 == "Al_izol_bron_4zhily_zemlya") { z = MassTok_Al_izol_bron_4zhily_zemlya[y];  }  
  
 if ( tooltipsposob5.style.display == 'block' && marka1 == "tabl138" && sposob5 == "Cu_shlang_1zhila") { z = MassTok_Cu_shlang_1zhila[y]; }  
 if ( tooltipsposob5.style.display == 'block' && marka1 == "tabl138" && sposob5 == "Cu_shlang_2zhila") { z = MassTok_Cu_shlang_2zhila [y];}  
 if ( tooltipsposob5.style.display == 'block' && marka1 == "tabl138" && sposob5 == "Cu_shlang_3zhila") { z = MassTok_Cu_shlang_3zhila[y]; } 
  
  if ( tooltipsposob6.style.display == 'block' && marka1 == "tabl139" && sposob6 == "Cu_shlang_torf05") { z = MassTok_Cu_shlang_torf05[y]; }  
  if ( tooltipsposob6.style.display == 'block' && marka1 == "tabl139" && sposob6 == "Cu_shlang_torf3")  { z = MassTok_Cu_shlang_torf3[y]; } 
  if ( tooltipsposob6.style.display == 'block' && marka1 == "tabl139" && sposob6 == "Cu_shlang_torf6") { z = MassTok_Cu_shlang_torf6[y]; } 

   if (tooltipsposob7.style.display == 'block' &&  marka1 == "tabl1310" && sposob7 == "Cu_shlang_peredv_3") { z = MassTok_Cu_shlang_peredv_3[y]; }  
  if ( tooltipsposob7.style.display == 'block' && marka1 == "tabl1310" && sposob7 == "Cu_shlang_peredv_6")  { z = MassTok_Cu_shlang_peredv_6[y]; } 
 
   if ( tooltipsposob8.style.display == 'block' && marka1 == "tabl1311" && sposob8 == "Cu_elektrificir") { z = MassTok_Cu_elektrificir[y]; }  
 
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_1_zemlya") { z = MassTok__Cu_maslo_bron_1_zemlya[y]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_2_zemlya") { z = MassTok__Cu_maslo_bron_2_zemlya[y]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_3_zemlya_3kV") { z = MassTok__Cu_maslo_bron_3_zemlya_3kV[y]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_3_zemlya_6kV") { z = MassTok__Cu_maslo_bron_3_zemlya_6kV[y]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_3_zemlya_10kV") { z = MassTok__Cu_maslo_bron_3_zemlya_10kV[y]; }
   if (tooltipsposob9.style.display == 'block' &&  marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_4_zemlya_10kV") { z = MassTok__Cu_maslo_bron_4_zemlya_10kV[y]; }
   
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_3kV") { z = MassTok__Cu_maslo_bron_3_voda_3kV[y]; }
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_6kV") { z = MassTok__Cu_maslo_bron_3_voda_6kV[y]; }
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_10kV") { z = MassTok__Cu_maslo_bron_3_voda_10kV[y]; }
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_1kV") { z = MassTok__Cu_maslo_bron_3_voda_1kV[y]; }

   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_1_vozdux_1kV") { z = MassTok__Cu_maslo_bron_1_vozdux_1kV[y]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_2_vozdux_1kV") { z = MassTok__Cu_maslo_bron_2_vozdux_1kV[y]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_3_vozdux_3kV") { z = MassTok__Cu_maslo_bron_3_vozdux_3kV[y]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_3_vozdux_6kV") { z = MassTok__Cu_maslo_bron_3_vozdux_6kV[y]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_3_vozdux_10kV") { z = MassTok__Cu_maslo_bron_3_vozdux_10kV[y]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_4_vozdux_1kV") { z = MassTok__Cu_maslo_bron_4_vozdux_1kV[y]; }
   
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_1_zemlya") { z = MassTok__Al_maslo_bron_1_zemlya[y]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_2_zemlya") { z = MassTok__Al_maslo_bron_2_zemlya[y]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_3_zemlya_3kV") { z = MassTok__Al_maslo_bron_3_zemlya_3kV[y]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_3_zemlya_6kV") { z = MassTok__Al_maslo_bron_3_zemlya_6kV[y]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_3_zemlya_10kV") { z = MassTok__Al_maslo_bron_3_zemlya_10kV[y]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_4_zemlya_10kV") { z = MassTok__Al_maslo_bron_4_zemlya_10kV[y]; }
   
   if ( tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_3kV") { z = MassTok__Al_maslo_bron_3_voda_3kV[y]; }
   if (  tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_6kV") { z = MassTok__Al_maslo_bron_3_voda_6kV[y]; }
   if (  tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_10kV") { z = MassTok__Al_maslo_bron_3_voda_10kV[y]; }
   if (  tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_1kV") { z = MassTok__Al_maslo_bron_3_voda_1kV[y]; }
   
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_1_vozdux_1kV") { z = MassTok__Al_maslo_bron_1_vozdux_1kV[y]; }
   if ( tooltipsposob14.style.display == 'block' &&  marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_2_vozdux_1kV") { z = MassTok__Al_maslo_bron_2_vozdux_1kV[y]; }
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_3_vozdux_3kV") { z = MassTok__Al_maslo_bron_3_vozdux_3kV[y]; }
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_3_vozdux_6kV") { z = MassTok__Al_maslo_bron_3_vozdux_6kV[y]; }
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_3_vozdux_10kV") { z = MassTok__Al_maslo_bron_3_vozdux_10kV[y]; }
   if ( tooltipsposob14.style.display == 'block' &&  marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_4_vozdux_1kV") { z = MassTok__Al_maslo_bron_4_vozdux_1kV[y]; }
   
   if (  tooltipsposob15.style.display == 'block' && marka2 == "tabl1319" && sposob15 == "Cu_maslo_bron_3z_6kV") { z = MassTok__Cu_maslo_bron_3z_6kV[y]; }
   if ( tooltipsposob15.style.display == 'block' && marka2 == "tabl1319" && sposob15 == "Cu_maslo_bron_3v_6kV") { z = MassTok__Cu_maslo_bron_3v_6kV[y]; }
   
   if ( tooltipsposob16.style.display == 'block' && marka2 == "tabl1320" && sposob16 == "Al_maslo_bron_3z_6kV") { z = MassTok__Al_maslo_bron_3z_6kV[y]; }
   if ( tooltipsposob16.style.display == 'block' && marka2 == "tabl1320" && sposob16 == "Al_maslo_bron_3v_6kV") { z = MassTok__Al_maslo_bron_3v_6kV[y]; }
   
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3z_20kV") { z =MassTok__Cu_maslo_bron_3z_20kV [y]; }
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3voda_20kV") { z = MassTok__Cu_maslo_bron_3voda_20kV[y]; }
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3vozd_20kV") { z = MassTok__Cu_maslo_bron_3vozd_20kV[y]; }
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3z_35kV") { z =MassTok__Cu_maslo_bron_3z_35kV [y]; }
   if (tooltipsposob17.style.display == 'block' &&  marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3voda_35kV") { z = MassTok__Cu_maslo_bron_3voda_35kV[y]; }
   if (tooltipsposob17.style.display == 'block' &&  marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3vozd_35kV") { z =MassTok__Cu_maslo_bron_3vozd_35kV [y]; }
   
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3z_20kV") { z =MassTok__Al_maslo_bron_3z_20kV [y]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3voda_20kV") { z = MassTok__Al_maslo_bron_3voda_20kV[y]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3vozd_20kV") { z = MassTok__Al_maslo_bron_3vozd_20kV[y]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3z_35kV") { z = MassTok__Al_maslo_bron_3z_35kV[y]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3voda_35kV") { z = MassTok__Al_maslo_bron_3voda_35kV[y]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3vozd_35kV") { z = MassTok__Al_maslo_bron_3vozd_35kV[y]; }
 
    if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_AS_vne") { z = MassTok__Al_neizol_provod_AS_vne[y]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_AS_vnutri") { z = MassTok__Al_neizol_provod_AS_vnutri[y]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Cu_neizol_provod_M_vne") { z = MassTok__Cu_neizol_provod_M_vne[y]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_A_AKP_vne") { z = MassTok__Al_neizol_provod_A_AKP_vne[y]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Cu_neizol_provod_M_vnutri") { z = MassTok__Cu_neizol_provod_M_vnutri[y]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_A_AKP_vnutri") { z = MassTok__Al_neizol_provod_A_AKP_vnutri[y]; }

    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug1") { z = MassTok__Cu_neizol_shina_pryamoug1[y]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug2") { z = MassTok__Cu_neizol_shina_pryamoug2[y]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug3") { z = MassTok__Cu_neizol_shina_pryamoug3[y]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug4") { z = MassTok__Cu_neizol_shina_pryamoug4[y]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug1") { z = MassTok__Al_neizol_shina_pryamoug1[y]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug2") { z = MassTok__Al_neizol_shina_pryamoug2[y]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug3") { z = MassTok__Al_neizol_shina_pryamoug3[y]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug4") { z = MassTok__Al_neizol_shina_pryamoug4[y]; }
    
    if ( tooltipsposob21.style.display == 'block' && marka4 == "tabl24" && sposob21 == "Al_SIP3") { z = MassTok__Al_SIP3[y]; }
    
    if ( tooltipsposob22.style.display == 'block' && marka4 == "tabl241" && sposob22 == "Al_SIP4") { z = MassTok__Al_SIP4[y]; }

if (y >100) { window.alert("Ошибка y Обновите страницу");
                              z= 99999;}

}

if ( marka1 == "tabl134" ) { FN = MassSechCu_izol_pvx_otkryto[y]; }
if ( marka1 == "tabl135" ) { FN = MassSechAlizolpvxotkryto[y];}
if ( marka1 == "tabl136" ) { FN = MassSechCu_izol_bron_otkryto[y];}
if ( marka1 == "tabl137" ) { FN = MassSechAl_izol_bron_otkryto[y];}
if ( marka1 == "tabl138" ) { FN = MassSechCu_shlang[y];}
if ( marka1 == "tabl139" ) { FN = MassSechCu_shlang_torf[y];}
if ( marka1 == "tabl1310" ) { FN = MassSechCu_shlang_peredv[y];}
if ( marka1 == "tabl1311" ) { FN = MassSechCu_elektrificir[y];}
if ( marka2 == "tabl1313" ) { FN = MassSech_Cu_maslo_bron_zemlya [y];}
if ( marka2 == "tabl1314" ) { FN = MassSech_Cu_maslo_bron_voda[y];}
if ( marka2 == "tabl1315" ) { FN = MassSech_Cu_maslo_bron_voda[y];}
if ( marka2 == "tabl1316" ) { FN = MassSech_Al_maslo_bron_zemlya[y];}
if ( marka2 == "tabl1317" ) { FN = MassSech_Al_maslo_bron_voda[y];}
if ( marka2 == "tabl1318" ) { FN = MassSech_Al_maslo_bron_voda[y];}
if ( marka2 == "tabl1319" ) { FN = MassSech_Cu_maslo_bron_3vz_6kV[y];}
if ( marka2 == "tabl1320" ) { FN = MassSech_Al_maslo_bron_3vz_6kV[y];}
if ( marka2 == "tabl1321" ) { FN = MassSech_Cu_maslo_bron_3zvv_2035kV[y];}
if ( marka2 == "tabl1322" ) { FN = MassSech_Cu_maslo_bron_3zvv_2035kV[y];}
if ( marka3 == "tabl1329" ) { FN = MassSech_Al_Cu_neizol_provod[y];}
if ( marka3 == "tabl1331" ) { FN  = MassSech_Al_Cu_neizol_shina_pryamoug_znach[y];
                              Razm = MassSech_Al_Cu_neizol_shina_pryamoug[y];

}
if ( marka4 == "tabl24" ) { FN = MassSech_Al_SIP3[y];}
if ( marka4 == "tabl241" ) { FN = MassSech_Al_SIP4[y];}

  



if ( faza == "1" && U == 0.22){ alfa2 = 4.13;}
else { if ( faza == "1" && U == 0.38 ){ alfa2 = 1.38;}
        else { if ( faza == "1" && U == 0.66 ){ alfa2 = 0.459;}
            else { if ( faza == "1" && U == 6 ){ alfa2 = 0.00555;}
               else { if ( faza == "1" && U == 10 ){ alfa2 = 0.002;}
                    else { if ( faza == "3" && U == 0.22 ){ alfa2 = 2.07;}
                      else { if ( faza == "3" && U == 0.38 ){ alfa2 = 0.69;}
                         else { if ( faza == "3" && U == 0.66 ){ alfa2 = 0.23;}
                             else { if ( faza == "3" && U == 6){ alfa2 = 0.00278;}
                               else { if ( faza == "3" && U == 10){ alfa2 = 0.001;}
                             }
                         }
                       }
                  }
                }
             }
        }
    }
}

if ( lep == "Kl" && U < 1 ){XLSR = 0.06;  }
else {  if ( lep == "Kl" && U > 1 ){XLSR = 0.08;  }
       else {  if ( lep == "Vl" && U < 1 ){XLSR = 0.3;  }
            else { if ( lep == "Vl" && U > 1 ){XLSR = 0.4;  }
                }
         }
}
dUa = parseFloat(dU) - (parseFloat(alfa2) * parseFloat(XLSR) * parseFloat(MQ));
if (dUa < 0 ) {window.alert("Слишком большие потери увеличте доп. потерю напряжения но не более 10 % \n если не помогло: \n 1. Увеличте количество фаз. \n 2. Увеличте напряжение. \n 3. Попробуйте выбрать несколько проводов в п.4 расчета."); }
if ( gamma == "Al" && U == 0.22 && faza == "1" ){ alfa1 = 0.13*1000;}
else { if ( gamma == "Al" && U == 0.38 && faza == "1" ){ alfa1 = 0.0437*1000;}
        else { if ( gamma == "Al" && U == 0.66 && faza == "1" ){ alfa1 = 0.0145*1000;}
            else { if ( gamma == "Cu" && U == 0.22 && faza == "1" ){ alfa1 = 0.0777*1000;}
               else { if ( gamma == "Cu" && U == 0.38 && faza == "1"){ alfa1 = 0.0261*1000;}
                    else { if ( gamma == "Cu" && U == 0.66 && faza == "1"){ alfa1 = 0.00865*1000;}
                      else { if ( gamma == "Al" && U == 0.22 && faza == "3"){ alfa1 = 65.3;}
                         else { if ( gamma == "Cu" && U == 0.22 && faza == "3" ){ alfa1 = 38.9;}
                             else { if ( gamma == "Al" && U == 0.38 && faza == "3"){ alfa1 = 21.9;}
                               else { if ( gamma == "Cu" && U == 0.38 && faza == "3"){ alfa1 = 13.1;}
                                   else { if ( gamma == "Al" && U == 0.66 && faza == "3"){ alfa1 = 7.25;}
                                     else { if ( gamma == "Cu" && U == 0.66 && faza == "3"){ alfa1 = 4.33;}
                                        else { if ( gamma == "Al" && U == 6 && faza == "3"){ alfa1 = 0.0875;}
                                         else { if ( gamma == "Cu" && U == 6 && faza == "3"){ alfa1 = 0.0523;}
                                            else { if ( gamma == "Al" && U == 10 && faza == "3"){ alfa1 = 0.0316;}
                                               else { if ( gamma == "Cu" && U == 10 && faza == "3"){ alfa = 0.0189;}
                                                    else { if (  gamma == "Al" ||  "Cu" && U == 6 || 10 && faza == "1"){window.alert("Нет данных для этого варианта. \n Не выбирайте напряжение 6 и 10 кВ и одну фазу.")}
                                                      else { if ( gamma == "Al" && U == 0.22 && faza == "2"){ alfa = 0.147;}
                                                        else { if ( gamma == "Cu" && U == 0.22 && faza == "2"){ alfa = 0.0875;}
                                                            else { if ( gamma == "Al" && U == 0.38 && faza == "4"){ alfa = 0.0493;}
                                                             else { if ( gamma == "Cu" && U == 0.38 && faza == "4"){ alfa = 0.0295;}
                                                                 else {  if (  gamma == "Al" ||  "Cu" && U == 6 || 10 && faza == "2" || "4"){window.alert("Нет данных для этого варианта. \n Не выбирайте напряжение 6 и 10 кВ и \nответвление от трехфазной линии.")}
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
                }
             }
        }
    }
}
var F = parseFloat(alfa1)*(parseFloat(MP)/parseFloat(dUa))/parseFloat(par);
//var MassF = [0, 0.5, 0.75, 1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240 ];
var x = 0; 

while (i<F) { 
    
     x++; 
   if ( marka1 == "tabl134" ) { i = MassSechCu_izol_pvx_otkryto[x]; }
if ( marka1 == "tabl135" ) { i = MassSechAlizolpvxotkryto[x];}
if ( marka1 == "tabl136" ) { i = MassSechCu_izol_bron_otkryto[x];}
if ( marka1 == "tabl137" ) { i = MassSechAl_izol_bron_otkryto[x];}
if ( marka1 == "tabl138" ) { i = MassSechCu_shlang[x];}
if ( marka1 == "tabl139" ) { i = MassSechCu_shlang_torf[x];}
if ( marka1 == "tabl1310" ) { i = MassSechCu_shlang_peredv[x];}
if ( marka1 == "tabl1311" ) { i = MassSechCu_elektrificir[x];}
if ( marka2 == "tabl1313" ) { i = MassSech_Cu_maslo_bron_zemlya [x];}
if ( marka2 == "tabl1314" ) { i = MassSech_Cu_maslo_bron_voda[x];}
if ( marka2 == "tabl1315" ) { i = MassSech_Cu_maslo_bron_voda[x];}
if ( marka2 == "tabl1316" ) { i = MassSech_Al_maslo_bron_zemlya[x];}
if ( marka2 == "tabl1317" ) { i = MassSech_Al_maslo_bron_voda[x];}
if ( marka2 == "tabl1318" ) { i = MassSech_Al_maslo_bron_voda[x];}
if ( marka2 == "tabl1319" ) { i = MassSech_Cu_maslo_bron_3vz_6kV[x];}
if ( marka2 == "tabl1320" ) { i = MassSech_Al_maslo_bron_3vz_6kV[x];}
if ( marka2 == "tabl1321" ) { i = MassSech_Cu_maslo_bron_3zvv_2035kV[x];}
if ( marka2 == "tabl1322" ) { i = MassSech_Cu_maslo_bron_3zvv_2035kV[x];}
if ( marka3 == "tabl1329" ) { i = MassSech_Al_Cu_neizol_provod[x];}
if ( marka3 == "tabl1331" ) { i  = MassSech_Al_Cu_neizol_shina_pryamoug_znach[x];}
if ( marka4 == "tabl24" ) { i = MassSech_Al_SIP3[x];}
if ( marka4 == "tabl241" ) { i = MassSech_Al_SIP4[x];}
if (x >100) { window.alert("Ошибка x Обновите страницу");
                              i= 99999;}

} 
var FdU;
FdU = i;

if (marka3 =="tabl1331") {document.getElementById("Sh").value = FN; 
                              document.getElementById("Razm").value = Razm; 
}
if (FdU >= FN) { Fv = FdU;
                  if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_otkryto"  ) { z = MassTok_Cu_izol_pvx_otkryto[x];  }
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube2_1") { z = MassTok_Cu_izol_pvx_v_trube2_1[x];}
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube3_1") { z = MassTok_Cu_izol_pvx_v_trube3_1[x]; }
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube4_1") { z = MassTok_Cu_izol_pvx_v_trube4_1[x]; }
if ( tooltipsposob1.style.display == 'block' && marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube_2_1_1") { z = MassTok_Cu_izol_pvx_v_trube_2_1_1[x]; }
if (tooltipsposob1.style.display == 'block' &&  marka1 == "tabl134" && sposob1 == "Cu_izol_pvx_v_trube_3_1_1") { z = MassTok_Cu_izol_pvx_v_trube_3_1_1[x]; }

 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_otkryto") { z = MassTok_Al_izol_pvx_otkryto[x];  }  
 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube2_1") { z = MassTok_Al_izol_pvx_v_trube2_1[x]; }  
 if ( tooltipsposob2.style.display == 'block' && marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube3_1") { z = MassTok_Al_izol_pvx_v_trube3_1 [x];}  
 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube4_1") { z = MassTok_Al_izol_pvx_v_trube4_1[x]; }  
 if ( tooltipsposob2.style.display == 'block' && marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube_2_1_1") { z = MassTok_Al_izol_pvx_v_trube_2_1_1[x]; }  
 if (tooltipsposob2.style.display == 'block' &&  marka1 == "tabl135" && sposob2 == "Al_izol_pvx_v_trube_3_1_1") { z = MassTok_Al_izol_pvx_v_trube_3_1_1[x]; }  
 
  if (tooltipsposob3.style.display == 'block' &&  marka1 == "tabl136" && sposob3 == "Cu_izol_bron_1zhila_vozd") { z = MassTok_Cu_izol_bron_1zhila_vozd [x];  }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 =="Cu_izol_bron_2zhily_vozd" ) { z = MassTok_Cu_izol_bron_2zhily_vozd[x]; }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 =="Cu_izol_bron_2zhily_zemlya" ) { z = MassTok_Cu_izol_bron_2zhily_zemlya [x];}  
 if (tooltipsposob3.style.display == 'block' && marka1 == "tabl136" && sposob3 =="Cu_izol_bron_3zhily_vozd" ) { z = MassTok_Cu_izol_bron_3zhily_vozd[x]; }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 == "Cu_izol_bron_3zhily_zemlya") { z = MassTok_Cu_izol_bron_3zhily_zemlya[x]; }  
 if ( tooltipsposob3.style.display == 'block' &&marka1 == "tabl136" && sposob3 == "Cu_izol_bron_4zhily_vozd" ) { z = MassTok_Cu_izol_bron_4zhily_vozd[x]; } 
  if (tooltipsposob3.style.display == 'block' && marka1 == "tabl136" && sposob3 == "Cu_izol_bron_4zhily_zemlya") { z = MassTok_Cu_izol_bron_4zhily_zemlya[x];  }  
  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 == "Al_izol_bron_1zhila_vozd") { z = MassTok_Al_izol_bron_1zhila_vozd [x];  }  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 =="Al_izol_bron_2zhily_vozd" ) { z = MassTok_Al_izol_bron_2zhily_vozd[x]; }  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 =="Al_izol_bron_2zhily_zemlya" ) { z = MassTok_Al_izol_bron_2zhily_zemlya [x];}  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 =="Al_izol_bron_3zhily_vozd" ) { z = MassTok_Al_izol_bron_3zhily_vozd[x]; }  
 if ( tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 == "Al_izol_bron_3zhily_zemlya") { z = MassTok_Al_izol_bron_3zhily_zemlya[x]; }  
 if ( tooltipsposob4.style.display == 'block'&& marka1 == "tabl137" && sposob4 == "Al_izol_bron_4zhily_vozd" ) { z = MassTok_Al_izol_bron_4zhily_vozd[x]; } 
 if (tooltipsposob4.style.display == 'block' && marka1 == "tabl137" && sposob4 == "Al_izol_bron_4zhily_zemlya") { z = MassTok_Al_izol_bron_4zhily_zemlya[x];  }  
  
 if ( tooltipsposob5.style.display == 'block' && marka1 == "tabl138" && sposob5 == "Cu_shlang_1zhila") { z = MassTok_Cu_shlang_1zhila[x]; }  
 if ( tooltipsposob5.style.display == 'block' && marka1 == "tabl138" && sposob5 == "Cu_shlang_2zhila") { z = MassTok_Cu_shlang_2zhila [x];}  
 if ( tooltipsposob5.style.display == 'block' && marka1 == "tabl138" && sposob5 == "Cu_shlang_3zhila") { z = MassTok_Cu_shlang_3zhila[x]; } 
  
  if ( tooltipsposob6.style.display == 'block' && marka1 == "tabl139" && sposob6 == "Cu_shlang_torf05") { z = MassTok_Cu_shlang_torf05[x]; }  
  if ( tooltipsposob6.style.display == 'block' && marka1 == "tabl139" && sposob6 == "Cu_shlang_torf3")  { z = MassTok_Cu_shlang_torf3[x]; } 
  if ( tooltipsposob6.style.display == 'block' && marka1 == "tabl139" && sposob6 == "Cu_shlang_torf6") { z = MassTok_Cu_shlang_torf6[x]; } 

   if (tooltipsposob7.style.display == 'block' &&  marka1 == "tabl1310" && sposob7 == "Cu_shlang_peredv_3") { z = MassTok_Cu_shlang_peredv_3[x]; }  
  if ( tooltipsposob7.style.display == 'block' && marka1 == "tabl1310" && sposob7 == "Cu_shlang_peredv_6")  { z = MassTok_Cu_shlang_peredv_6[x]; } 
 
   if ( tooltipsposob8.style.display == 'block' && marka1 == "tabl1311" && sposob8 == "Cu_elektrificir") { z = MassTok_Cu_elektrificir[x]; }  
 
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_1_zemlya") { z = MassTok__Cu_maslo_bron_1_zemlya[x]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_2_zemlya") { z = MassTok__Cu_maslo_bron_2_zemlya[x]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_3_zemlya_3kV") { z = MassTok__Cu_maslo_bron_3_zemlya_3kV[x]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_3_zemlya_6kV") { z = MassTok__Cu_maslo_bron_3_zemlya_6kV[x]; }
   if ( tooltipsposob9.style.display == 'block' && marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_3_zemlya_10kV") { z = MassTok__Cu_maslo_bron_3_zemlya_10kV[x]; }
   if (tooltipsposob9.style.display == 'block' &&  marka2 == "tabl1313" && sposob9 == "Cu_maslo_bron_4_zemlya_10kV") { z = MassTok__Cu_maslo_bron_4_zemlya_10kV[x]; }
   
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_3kV") { z = MassTok__Cu_maslo_bron_3_voda_3kV[x]; }
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_6kV") { z = MassTok__Cu_maslo_bron_3_voda_6kV[x]; }
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_10kV") { z = MassTok__Cu_maslo_bron_3_voda_10kV[x]; }
   if ( tooltipsposob10.style.display == 'block' && marka2 == "tabl1314" && sposob10 == "Cu_maslo_bron_3_voda_1kV") { z = MassTok__Cu_maslo_bron_3_voda_1kV[x]; }

   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_1_vozdux_1kV") { z = MassTok__Cu_maslo_bron_1_vozdux_1kV[x]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_2_vozdux_1kV") { z = MassTok__Cu_maslo_bron_2_vozdux_1kV[x]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_3_vozdux_3kV") { z = MassTok__Cu_maslo_bron_3_vozdux_3kV[x]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_3_vozdux_6kV") { z = MassTok__Cu_maslo_bron_3_vozdux_6kV[x]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_3_vozdux_10kV") { z = MassTok__Cu_maslo_bron_3_vozdux_10kV[x]; }
   if ( tooltipsposob11.style.display == 'block' && marka2 == "tabl1315" && sposob11 == "Cu_maslo_bron_4_vozdux_1kV") { z = MassTok__Cu_maslo_bron_4_vozdux_1kV[x]; }
   
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_1_zemlya") { z = MassTok__Al_maslo_bron_1_zemlya[x]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_2_zemlya") { z = MassTok__Al_maslo_bron_2_zemlya[x]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_3_zemlya_3kV") { z = MassTok__Al_maslo_bron_3_zemlya_3kV[x]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_3_zemlya_6kV") { z = MassTok__Al_maslo_bron_3_zemlya_6kV[x]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_3_zemlya_10kV") { z = MassTok__Al_maslo_bron_3_zemlya_10kV[x]; }
   if ( tooltipsposob12.style.display == 'block' && marka2 == "tabl1316" && sposob12 == "Al_maslo_bron_4_zemlya_10kV") { z = MassTok__Al_maslo_bron_4_zemlya_10kV[x]; }
   
   if ( tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_3kV") { z = MassTok__Al_maslo_bron_3_voda_3kV[x]; }
   if (  tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_6kV") { z = MassTok__Al_maslo_bron_3_voda_6kV[x]; }
   if (  tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_10kV") { z = MassTok__Al_maslo_bron_3_voda_10kV[x]; }
   if (  tooltipsposob13.style.display == 'block' && marka2 == "tabl1317" && sposob13 == "Al_maslo_bron_3_voda_1kV") { z = MassTok__Al_maslo_bron_3_voda_1kV[x]; }
   
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_1_vozdux_1kV") { z = MassTok__Al_maslo_bron_1_vozdux_1kV[x]; }
   if ( tooltipsposob14.style.display == 'block' &&  marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_2_vozdux_1kV") { z = MassTok__Al_maslo_bron_2_vozdux_1kV[x]; }
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_3_vozdux_3kV") { z = MassTok__Al_maslo_bron_3_vozdux_3kV[x]; }
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_3_vozdux_6kV") { z = MassTok__Al_maslo_bron_3_vozdux_6kV[x]; }
   if (  tooltipsposob14.style.display == 'block' && marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_3_vozdux_10kV") { z = MassTok__Al_maslo_bron_3_vozdux_10kV[x]; }
   if ( tooltipsposob14.style.display == 'block' &&  marka2 == "tabl1318" && sposob14 == "Al_maslo_bron_4_vozdux_1kV") { z = MassTok__Al_maslo_bron_4_vozdux_1kV[x]; }
   
   if (  tooltipsposob15.style.display == 'block' && marka2 == "tabl1319" && sposob15 == "Cu_maslo_bron_3z_6kV") { z = MassTok__Cu_maslo_bron_3z_6kV[x]; }
   if ( tooltipsposob15.style.display == 'block' && marka2 == "tabl1319" && sposob15 == "Cu_maslo_bron_3v_6kV") { z = MassTok__Cu_maslo_bron_3v_6kV[x]; }
   
   if ( tooltipsposob16.style.display == 'block' && marka2 == "tabl1320" && sposob16 == "Al_maslo_bron_3z_6kV") { z = MassTok__Al_maslo_bron_3z_6kV[x]; }
   if ( tooltipsposob16.style.display == 'block' && marka2 == "tabl1320" && sposob16 == "Al_maslo_bron_3v_6kV") { z = MassTok__Al_maslo_bron_3v_6kV[x]; }
   
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3z_20kV") { z =MassTok__Cu_maslo_bron_3z_20kV [x]; }
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3voda_20kV") { z = MassTok__Cu_maslo_bron_3voda_20kV[x]; }
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3vozd_20kV") { z = MassTok__Cu_maslo_bron_3vozd_20kV[x]; }
   if ( tooltipsposob17.style.display == 'block' && marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3z_35kV") { z =MassTok__Cu_maslo_bron_3z_35kV [x]; }
   if (tooltipsposob17.style.display == 'block' &&  marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3voda_35kV") { z = MassTok__Cu_maslo_bron_3voda_35kV[x]; }
   if (tooltipsposob17.style.display == 'block' &&  marka2 == "tabl1321" && sposob17 == "Cu_maslo_bron_3vozd_35kV") { z =MassTok__Cu_maslo_bron_3vozd_35kV [x]; }
   
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3z_20kV") { z =MassTok__Al_maslo_bron_3z_20kV [x]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3voda_20kV") { z = MassTok__Al_maslo_bron_3voda_20kV[x]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3vozd_20kV") { z = MassTok__Al_maslo_bron_3vozd_20kV[x]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3z_35kV") { z = MassTok__Al_maslo_bron_3z_35kV[x]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3voda_35kV") { z = MassTok__Al_maslo_bron_3voda_35kV[x]; }
   if ( tooltipsposob18.style.display == 'block' && marka2 == "tabl1322" && sposob18 == "Al_maslo_bron_3vozd_35kV") { z = MassTok__Al_maslo_bron_3vozd_35kV[x]; }
 
    if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_AS_vne") { z = MassTok__Al_neizol_provod_AS_vne[x]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_AS_vnutri") { z = MassTok__Al_neizol_provod_AS_vnutri[x]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Cu_neizol_provod_M_vne") { z = MassTok__Cu_neizol_provod_M_vne[x]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_A_AKP_vne") { z = MassTok__Al_neizol_provod_A_AKP_vne[x]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Cu_neizol_provod_M_vnutri") { z = MassTok__Cu_neizol_provod_M_vnutri[x]; }
  if ( tooltipsposob19.style.display == 'block' && marka3 == "tabl1329" && sposob19 == "Al_neizol_provod_A_AKP_vnutri") { z = MassTok__Al_neizol_provod_A_AKP_vnutri[x]; }

    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug1") { z = MassTok__Cu_neizol_shina_pryamoug1[x]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug2") { z = MassTok__Cu_neizol_shina_pryamoug2[x]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug3") { z = MassTok__Cu_neizol_shina_pryamoug3[x]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Cu_neizol_shina_pryamoug4") { z = MassTok__Cu_neizol_shina_pryamoug4[x]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug1") { z = MassTok__Al_neizol_shina_pryamoug1[x]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug2") { z = MassTok__Al_neizol_shina_pryamoug2[x]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug3") { z = MassTok__Al_neizol_shina_pryamoug3[x]; }
    if ( tooltipsposob20.style.display == 'block' && marka3 == "tabl1331" && sposob20 == "Al_neizol_shina_pryamoug4") { z = MassTok__Al_neizol_shina_pryamoug4[x]; }
    
    if ( tooltipsposob21.style.display == 'block' && marka4 == "tabl24" && sposob21 == "Al_SIP3") { z = MassTok__Al_SIP3[x]; }
    
    if ( tooltipsposob22.style.display == 'block' && marka4 == "tabl241" && sposob22 == "Al_SIP4") { z = MassTok__Al_SIP4[x]; }


         }
if (FdU <= FN) {Fv = FN;} 
if ( lepn > Fv ) { Fv = lepn;}

document.getElementById("Fv").value = Fv;
 
 dUap = parseFloat(alfa1)*(parseFloat(MP)/(parseFloat(Fv)*par));
document.getElementById("dUap").value = dUap;
if ( FN == undefined && tip != 0 && marka1 !=0 && marka2 !=0 && marka3 !=0 && marka4 !=0) {window.alert("Расчитанное сечение превышает табличное значение. Попробуйте следующее:\n 1. Уменшите мощность.\n 2. Выберите несколько проводов в п.10 расчета. \n 3. Измените условия прокладки.\n 4. Увеличте напряжение.\n5. Измените материал провода."); 
document.getElementById("Fv").value = "не сущ.";
}
if ( FN == undefined ) {document.getElementById("Fv").value = "не сущ.";}
var tip = document.getElementById("tip").value;
if ( F > 240 && tip!=3 && marka1 !=0 && marka2 !=0 && marka3 !=0 && marka4 !=0) {
document.getElementById("Fv").value = "не сущ.";
window.alert("Расчитанное сечение превышает 240 мм2\n 1. Попробуйте уменьшить мощность или длину провода.\n 2. Укажите несколько проводов в  п.11 расчета.");
paralel.style.display = 'block';
}

document.getElementById("FN").value = FN;
document.getElementById("F").value = F;
document.getElementById("Idop").value = z;
document.getElementById("Id").value = Ir;

}

function calculate0() {


   tooltipmarka1.style.display = 'none';   
                              tooltipmarka2.style.display = 'none';
                 tooltipmarka3.style.display = 'none';
                document.getElementById("marka1").value = 0;
                document.getElementById("marka2").value = 0;
                document.getElementById("marka3").value = 0;
                document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                    tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                
var P = 1;
var L = 1;  
var U = 0.38;
var dU = 0.38;  
var Id = "";
var I = "";
var FN = "";
var cosfi = 0.9;  
   
document.getElementById("P").value = 1;
document.getElementById("L").value = 0.1;
document.getElementById("U").value = 0.38;
document.getElementById("dU").value = 5;
document.getElementById("Id").value = "";
document.getElementById("I").value = "";
document.getElementById("FN").value = "";
document.getElementById("cosfi").value = 0.9;
document.getElementById("gamma").value = "Al";
document.getElementById("F").value = "";
document.getElementById("U").value = "0.38";
document.getElementById("faza").value = 3;
var Fv = "";
document.getElementById("Fv").value = Fv;
paralel.style.display = 'none';
}
function xxxx(id) {

  //window.alert("U" + U);
   var U = document.getElementById("U").value;
  var faza = document.getElementById("faza").value;
  var lep = document.getElementById("lep").value;
  var lepn = document.getElementById("lepn").value;
  var gamma = document.getElementById("gamma").value;
  var marka1 = document.getElementById("marka1").value;
  if ( U == "0.22") {document.getElementById("faza").value = "1";}
  if ( U == "0.38" || U ==  "0.66" || U ==  "6" || U ==  "10") {document.getElementById("faza").value = "3";}
  if ( U == "0.22" && lep == "Kl") {document.getElementById("lepn").value = "4";}
  if ( U == "0.38" && lep == "Kl") {document.getElementById("lepn").value = "4";}
  if ( U == "0.66" && lep == "Kl") {document.getElementById("lepn").value = "4";}
  if ( U == "6" && lep == "Kl") {document.getElementById("lepn").value = "10";}
  if ( U == "10" && lep == "Kl") {document.getElementById("lepn").value = "16";}

}

function xxx(id){

    var U = document.getElementById("U").value;
  var faza = document.getElementById("faza").value;
  var lep = document.getElementById("lep").value;
  var lepn = document.getElementById("lepn").value;
  var gamma = document.getElementById("gamma").value;
  var marka1 = document.getElementById("marka1").value;
var marka2 = document.getElementById("marka2").value;
var marka3 = document.getElementById("marka3").value; 
var marka4 = document.getElementById("marka4").value; 

    var tip = document.getElementById("tip").value;
  if (  tip ==0 )  {        tooltipmarka1.style.display = 'none';   
                              tooltipmarka2.style.display = 'none';
                 tooltipmarka3.style.display = 'none';
                document.getElementById("marka1").value = 0;
                document.getElementById("marka2").value = 0;
                document.getElementById("marka3").value = 0;
                document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                    tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
              
                
                }
    if (  tip ==1 )  {        tooltipmarka1.style.display = 'block';   
                              tooltipmarka2.style.display = 'none';
                 tooltipmarka3.style.display = 'none';
                    tooltipmarka4.style.display = 'none';
                   document.getElementById("marka2").value = 0;
                  document.getElementById("marka3").value = 0;
                document.getElementById("marka4").value = 0;
                tooltipshina.style.display = 'none';
                tooltipprovod.style.display = 'block';
                 }
    if (  tip ==2 )  {        tooltipmarka1.style.display = 'none';   
                              tooltipmarka2.style.display = 'block';
                 tooltipmarka3.style.display = 'none';
                    tooltipmarka4.style.display = 'none';
                   document.getElementById("marka1").value = 0;
                document.getElementById("marka3").value = 0;
                document.getElementById("marka4").value = 0;
                tooltipshina.style.display = 'none';
                tooltipprovod.style.display = 'block';
                 }
    if (  tip ==3 )  {        tooltipmarka1.style.display = 'none';   
                              tooltipmarka2.style.display = 'none';
                 tooltipmarka3.style.display = 'block';
                 tooltipmarka4.style.display = 'none';
                               document.getElementById("marka1").value = 0;
                document.getElementById("marka2").value = 0;
                document.getElementById("marka4").value = 0;
                tooltipshina.style.display = 'block';
                tooltipprovod.style.display = 'block';
                           }
      if (  tip ==4 )  {        tooltipmarka1.style.display = 'none';   
                              tooltipmarka2.style.display = 'none';
                 tooltipmarka3.style.display = 'none';
                 tooltipmarka4.style.display = 'block';
                 document.getElementById("marka1").value = 0;
                   document.getElementById("marka2").value = 0;
                  document.getElementById("marka3").value = 0;
                tooltipshina.style.display = 'none';
                tooltipprovod.style.display = 'block';
                 }
               
               

  
  if (  marka1 ==0 )  {        
                                  tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
  if (  marka1 =="tabl134" )  {         tooltipsposob1.style.display = 'block'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                 tooltipsposob22.style.display = 'none';
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                
  }
  if (  marka1 =="tabl135" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'block';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
               
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
  if (  marka1 =="tabl136" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'block';                 
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
tooltipsposob20.style.display = 'none';                 
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
               
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
tooltipsposob19.style.display = 'none';                 
}
  if (  marka1 =="tabl137" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'block';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
               
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                tooltipsposob21.style.display = 'none';
                
  }
  if (  marka1 =="tabl138" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'block';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
               
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                  
  }
  if (  marka1 =="tabl139" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'block';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
               
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
  if (  marka1 =="tabl1310" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'block';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
               
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
  if (  marka1 =="tabl1311" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'block';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
               
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  } 
  if (  marka2 =="tabl1313" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'block';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
               
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                
  }
    if (  marka2 =="tabl1314" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'block';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
               
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
    if (  marka2 =="tabl1315" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'block';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
               
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                  
  }
    if (  marka2 =="tabl1316" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'block';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
              
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                  
  }
    if (  marka2 =="tabl1317" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'block';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
               
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                  
  }
    if (  marka2 =="tabl1318" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'block';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
               
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                  
  }
    if (  marka2 =="tabl1319" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'block';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
               
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
    if (  marka2 =="tabl1320" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'block';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
    if (  marka2 =="tabl1321" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'block';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
               document.getElementById("sposob22").value = 0;
                 
  }
    if (  marka2 =="tabl1322" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'block';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
  }
    if (  marka3 =="tabl1329" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'block';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                 tooltipsposob22.style.display = 'none';
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob20").value = 0;
                document.getElementById("sposob21").value = 0;
                document.getElementById("sposob22").value = 0;
                 
                
              
  }
  
      if (  marka3 =="tabl1331" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'block';
                  tooltipsposob21.style.display = 'none'
                  tooltipsposob22.style.display = 'none';;
                 
                                  
                  document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                document.getElementById("sposob21").value = 0;
               document.getElementById("sposob22").value = 0;
                
                

  }
  
        if (  marka4 =="tabl24" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'block';
                  tooltipsposob22.style.display = 'none';
                  
                                  
                document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                 document.getElementById("sposob20").value = 0;
               document.getElementById("sposob22").value = 0;
               
                
                

  }
          if (  marka4 =="tabl241" )  {         tooltipsposob1.style.display = 'none'; 
                                  tooltipsposob2.style.display = 'none';
                                  tooltipsposob3.style.display = 'none';                  
                                  tooltipsposob4.style.display = 'none';
                  tooltipsposob5.style.display = 'none';
                  tooltipsposob6.style.display = 'none';
                  tooltipsposob7.style.display = 'none';
                  tooltipsposob8.style.display = 'none';
                  tooltipsposob9.style.display = 'none';
                  tooltipsposob10.style.display = 'none';
                  tooltipsposob11.style.display = 'none';
                  tooltipsposob12.style.display = 'none';
                  tooltipsposob13.style.display = 'none';
                  tooltipsposob14.style.display = 'none';
                  tooltipsposob15.style.display = 'none';
                  tooltipsposob16.style.display = 'none';
                  tooltipsposob17.style.display = 'none';
                  tooltipsposob18.style.display = 'none';
                  tooltipsposob19.style.display = 'none';
                  tooltipsposob20.style.display = 'none';
                  tooltipsposob21.style.display = 'none';
                  tooltipsposob22.style.display = 'block';
                 
                                  
                document.getElementById("sposob1").value = 0;
                document.getElementById("sposob2").value = 0;
                document.getElementById("sposob3").value = 0;
                document.getElementById("sposob4").value = 0;
                document.getElementById("sposob5").value = 0;
                document.getElementById("sposob6").value = 0;
                document.getElementById("sposob7").value = 0;
                document.getElementById("sposob8").value = 0;
                document.getElementById("sposob9").value = 0;
                document.getElementById("sposob10").value = 0;
                document.getElementById("sposob11").value = 0;
                document.getElementById("sposob12").value = 0;
                document.getElementById("sposob13").value = 0;
                document.getElementById("sposob14").value = 0;
                document.getElementById("sposob15").value = 0;
                document.getElementById("sposob16").value = 0;
                document.getElementById("sposob17").value = 0;
                document.getElementById("sposob18").value = 0;
                document.getElementById("sposob19").value = 0;
                 document.getElementById("sposob20").value = 0;
                 document.getElementById("sposob21").value = 0;
               
                
                

  }
}