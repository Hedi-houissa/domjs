// get all btn plus
var plus = Array.from(document.querySelectorAll("#plus"));
// get all btn minus
var minus = Array.from(document.querySelectorAll("#minus"));
var clo = Array.from(document.querySelectorAll("#clo"));


for(var j of clo ){
    j.addEventListener('click',function(){
        console.log(j);
        e.parentElement.remove();
        add() ;

    })
}

//add event onclick to all btn minus
for (let m of minus) {
  m.addEventListener("click", function () {
    if (m.nextElementSibling.innerHTML > 0) {
      m.nextElementSibling.innerHTML--;
    }
    add();
  });
}

// add event onclick to all btn plus
for (let p of plus) {
  p.addEventListener("click", function () {
    p.previousElementSibling.innerHTML++;
    add();
  });
}

function add() {
  var qte = Array.from(document.querySelectorAll("#item-tot"));

  var sum = 0;
  for (var q in qte) {
    sum += qte[q].innerHTML * 1;
  }

  var count = Array.from(document.querySelectorAll("#count"));

  for (var c in count) {
    count[c].innerHTML = sum;
  }

  var price = Array.from(document.querySelectorAll("#price"));

  var tot = 0;

  for (var i in price) {
    tot += price[i].innerHTML * qte[i].innerHTML;
  }

  var cost = document.getElementById("cost");

  cost.innerHTML = tot;
}





