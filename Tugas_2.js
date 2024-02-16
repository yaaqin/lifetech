function fibonaci(jumlahAngka) {
  if (jumlahAngka < 2) {
    let err = "Masukan Angka dengan nilai lebih dari 1";
    return err;
  } else {
    let x = jumlahAngka;
    let arrFibonaci = [0, 1];

    for (let i = 2; i < x; i++) {
      let NextNum = arrFibonaci[i - 1] + arrFibonaci[i - 2];
      arrFibonaci.push(NextNum);
    }

    return arrFibonaci;
  }
}

console.log(fibonaci(2));
