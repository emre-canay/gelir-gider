const gelir = Number(prompt("geliriniz"));
const gider = Number(prompt("gideriniz"));
const krediVerilebilir =
  gelir - gider >= 5500 ? "kredi verilebilir" : "kredi verilemez";
console.log(krediVerilebilir);
