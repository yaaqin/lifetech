function segi3siku(baris) {
  let jarak = baris.lenght;
  for (var i = 1; i <= baris; i++) {
    var spasi = " ".repeat(jarak - i);
    var bintang = "*".repeat(i);
    console.log(spasi + bintang);
  }
}

segi3siku(3);
