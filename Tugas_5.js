function KPK(bilangan1, bilangan2) {
  if (bilangan1 % bilangan2 == 0) {
    let result = `Bilangan KPK dari ${bilangan1} dan ${bilangan2} adalah ${bilangan1}`;
    return result;
  } else if (bilangan2 % bilangan1 == 0) {
    result = `Bilangan KPK dari ${bilangan1} dan ${bilangan2} adalah ${bilangan2}`;
    return result;
  } else {
    let i = bilangan1 * bilangan2;
    result = `Bilangan KPK dari ${bilangan1} dan ${bilangan2} adalah ${i}`;
    return result;
  }
}

const hasil = KPK(8,3)
console.log(hasil);
