const Outlets = [
  { id: 11, name: "Hik Jo" },
  { id: 12, name: "Outlet 1" },
];

const product = [
  { id: 1, outlet_id: 11, name: 'Bakso Bakar' },
  { id: 2, outlet_id: 11, name: 'Bakso Goreng' },
  { id: 3, outlet_id: 12, name: 'Es Teh' },
];

Outlets[0].product = [product[0],product[1]]
Outlets[1].product = product[2]




console.log(Outlets);

