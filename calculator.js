eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('D R(){j P=d.b("P").c;j L=d.b("L").c;a(P==""&&L==""){s.u("Введите данные")}a(P==""&&L!=""){s.u("Введите мощность.")}a(P!=""&&L==""){s.u("Введите длину линии.")}P=p(P.F(/\\,/,"."));L=p(L.F(/\\,/,"."));j U=d.b("U").c;j f=d.b("f").c;j t=d.b("t").c;j e=d.b("e").c;j C=d.b("C").c;j k=d.b("k").c;k=p(k);j g;U=p(U);a(f=="m"&&U==0.q&&e=="1"){g=0.13}h{a(f=="m"&&U==0.r&&e=="1"){g=0.Q}h{a(f=="m"&&U==0.v&&e=="1"){g=0.O}h{a(f=="o"&&U==0.q&&e=="1"){g=0.N}h{a(f=="o"&&U==0.r&&e=="1"){g=0.T}h{a(f=="o"&&U==0.v&&e=="1"){g=0.V}h{a(f=="m"&&U==0.q&&e=="3"){g=Y.3/l}h{a(f=="o"&&U==0.q&&e=="3"){g=r.9/l}h{a(f=="m"&&U==0.r&&e=="3"){g=M.9/l}h{a(f=="o"&&U==0.r&&e=="3"){g=13.1/l}h{a(f=="m"&&U==0.v&&e=="3"){g=7.E/l}h{a(f=="o"&&U==0.v&&e=="3"){g=4.W/l}h{a(f=="m"&&U==6&&e=="3"){g=0.Z/l}h{a(f=="o"&&U==6&&e=="3"){g=0.K/l}h{a(f=="m"&&U==10&&e=="3"){g=0.H/l}h{a(f=="o"&&U==10&&e=="3"){g=0.I/l}h{a(f=="m"||"o"&&U==6||10&&e=="1"){s.u("Нет данных для этого варианта. \\n Не выбирайте напряжение 6 и 10 кВ и одну фазу.")}h{s.u("Ошибка")}}}}}}}}}}}}}}}}}j S=(p(g)*(p(P)*p(L))/p(t))/p(C);j B=[0,0.5,0.J,1,1.2,1.5,2,2.5,3,4,5,6,8,10,16,E,G,X,11,19,1b,1a,12,A];j x=1;j i=B[x];14(i<S){x++;i=B[x]}a(k>i){i=k}d.b("S").c=S;a(S<=A){d.b("y").c=i}a(S>A){d.b("y").c="не сущуствует";s.u("Расчитанное сечение превышает A мм2\\.")}}D 15(){j P=L="";f="m";t=5;S="";U=0.q;y="";d.b("P").c=P;d.b("L").c=L;d.b("U").c=U;d.b("f").c=f;d.b("t").c=t;d.b("S").c=S;d.b("y").c=y}D 18(17){j U=d.b("U").c;j e=d.b("e").c;a(U=="0.q"){d.b("e").c="1"}a(U=="0.r"||U=="0.v"||U=="6"||U=="10"){d.b("e").c="3"}a(U=="0.q"&&w=="z"){d.b("k").c="4"}a(U=="0.r"&&w=="z"){d.b("k").c="4"}a(U=="0.v"&&w=="z"){d.b("k").c="4"}a(U=="6"&&w=="z"){d.b("k").c="10"}a(U=="10"&&w=="z"){d.b("k").c="16"}}',62,74,'||||||||||if|getElementById|value|document|faza|gamma|alfa|else||var|lepn|1000|Al||Cu|parseFloat|22|38|window|dU|alert|66|lep||Sv|Kl|240|MassS|par|function|25|replace|35|0316|0189|75|0523||21|0777|0145||0437|calculate||0261||00865|33|50|65|0875||70|185||while|calculate0||id|xxxx|95|150|120'.split('|'),0,{}))
$("input[name=calc_type]").click(function() {
  	$("#P").prop('disabled', this.value=="1");
  	$("#voltage").prop('disabled', this.value=="2");
});
$("#voltage").keyup(function() {//нажатия по инпуту с силой тока
  var P = $("#P");//мощность
  var U = $("#U");//напряжение
  P.val(parseFloat(this.value) * parseFloat(U.val()));
});
$("#P").keyup(function() {//нажатия по инпуту с мощность.
  var A = $("#voltage");//сила тока
  var U = $("#U");//напряжение
  console.log(parseFloat(U.val()));
  A.val(parseFloat(this.value) / parseFloat(U.val()));
});
$("#U").change(function(){
  var A = $("#voltage");//сила тока
  var U = this;//напряжение
  var P = $("#P");//мощность
  //P.val(parseFloat(A.value) * parseFloat(U.value));
  if($("input[name=calc_type]:checked").val()=="2"){
    A.val(parseFloat(P.val()) / parseFloat(U.value));
  } else {
    P.val(parseFloat(A.val()) * parseFloat(U.value));
  }
});