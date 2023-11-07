function bmi() {
  document.getElementById("green").style.backgroundColor = "white";
  document.getElementById("lightyellow").style.backgroundColor = "white";
  document.getElementById("yellow").style.backgroundColor = "white";
  document.getElementById("red").style.backgroundColor = "white";
  document.getElementById("one").style.backgroundColor = "white";
  document.getElementById("two").style.backgroundColor = "white";
  document.getElementById("three").style.backgroundColor = "white";
  document.getElementById("four").style.backgroundColor = "white";

  let a = document.getElementById("weight").value;
  let b = document.getElementById("height").value;
  let meter = b / 100;
  //console.log(meter);
  let sqare = Math.pow(meter, 2);

  console.log(sqare);
  //let meter = b * 100;
  let ans = a / sqare;
  console.log(ans);
  document.getElementById("ans").innerHTML = "Your BMI is " + ans;
  if (ans <= 18.4) {
    document.getElementById("lightyellow").style.backgroundColor = "#f5bc42";
    document.getElementById("one").style.backgroundColor = "#f5bc42";
  }
  if (ans > 18.4 && ans < 24.9) {
    document.getElementById("green").style.backgroundColor = "green";
    document.getElementById("two").style.backgroundColor = "green";
  }
  if (ans > 24.9 && ans < 39.9) {
    document.getElementById("yellow").style.backgroundColor = "yellow";
    document.getElementById("three").style.backgroundColor = "yellow";
  }
  if (ans >= 40) {
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("four").style.backgroundColor = "red";
  }
  let u = document.getElementById("weight");
  let v = document.getElementById("height");
  u.value = "";
  v.value = "";
}

let i = document.getElementById("height");
i.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    bmi();
  }
});
