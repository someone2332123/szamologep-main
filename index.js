let elsoSzamjegySzovege =
  ""; /* Váltózót létrehoztuk s értékét beállítottuk üres szövegre */
let masodikSzamjegySzovege = "";
let muvelet = "";

const szamok =
  document.getElementsByClassName(
    "szam",
  ); /*    eredménye lista - megfogjuk a szam classname-ell elátott elemeket */
let fosok = document.getElementsByClassName("fos");
let kiiro = document.getElementById("kiirato");
console.log(szamok[0].textContent);
const egyenlo = document.getElementById("egyenlo");
szamok[0].addEventListener("click", beir);
for (let index = 0; index < szamok.length; index++) {
  szamok[index].addEventListener("click", beir);
}
/*
szamok[1].addEventListener("click", beir)
szamok[2].addEventListener("click", beir)
szamok[3].addEventListener("click", beir)
szamok[4].addEventListener("click", beir)
szamok[5].addEventListener("click", beir)
szamok[6].addEventListener("click", beir)
szamok[7].addEventListener("click", beir)
szamok[8].addEventListener("click", beir)
szamok[9].addEventListener("click", beir)
*/

function beir(event) {
  /* az input mezőbe írja be a számokat, amikre kattintunk */
  /* Mi jelenti a számot? */

  console.log(event.target);
  console.log(event.target.textContent);
  kiiro.value +=
    event.target.textContent; /* inputelembe beleírja a annak az elemnek az értékét amire kattintottunk */
  /* kiiro az egy input elem aminek nem textcontenje hanem Value-ja van */
}
/* ha rákattintunk egy műveleti jelre, akkor 
1. mentsük el az intputelem tartalmát az elsoSzamjegySzövege változóba
2. A műveleti jelet mentsük el a muvelet valtozoba
3. Töröljük ki az inputelem tartalmát */

for (let index = 0; index < fosok.length; index++) {
  fosok[index].addEventListener("click", muveletElvegzese);
}

function muveletElvegzese(event) {
  elsoSzamjegySzovege = kiiro.value;
  console.log(elsoSzamjegySzovege);
  console.log(event.target.textContent); /* Ez visszaadja a műveleti jelet */
  muvelet = event.target.textContent;
  kiiro.value = "   ";
}

/* 
Az egyenlőségjel működése
1. ha rákattintunk az egyenlőség jelre,
2. Akkor a masodikSzamjegySzovege mentük el a input tartalmát
3. végezzük el a műveletet az elsoSzamjegySzovege és a  MasodikSzamjegySzövege számok között
4. az eredményt írjuk ki az input elembe*/

egyenlo.addEventListener("click", szamolas);

function szamolas(event) {

  /* ide kell egy elágazás a műveleti jel szerint */
  masodikSzamjegySzovege = kiiro.value;
  if ((muvelet = "+")) {
    let eredmeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege);
    kiiro.value = eredmeny;
  }
  if ((muvelet = "-")) {
    let eredmeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege);
    kiiro.value = eredmeny;
  }
  if ((muvelet = "*")) {
    let eredmeny = Number(elsoSzamjegySzovege) * Number(masodikSzamjegySzovege);
    kiiro.value = eredmeny;
  }
  if ((muvelet = "/" && masodikSzamjegySzovege != "0")) {
    let eredmeny = Number(elsoSzamjegySzovege) / Number(masodikSzamjegySzovege);
    kiiro.value = eredmeny;
  }
  kiiro.value = eredmeny;
}

const torles = document.getElementById("torles");
torles.addEventListener("click", kitorles);
function kitorles(event) {
    elsoSzamjegySzovege = ""
    masodikSzamjegySzovege = ""
    kiiro.value = "";
}
