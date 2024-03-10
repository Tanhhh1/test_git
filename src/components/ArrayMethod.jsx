const listData = [
    { id: 1, name: 'Tai nghe Sony WF-1000XM4', price: 2990000 , category: {id:1, name: 'Tai nghe in-ear'}, quantity: 40},
    { id: 2, name: 'Tai nghe Sony WH-1000XM4', price: 6690000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 23 },
    { id: 3, name: 'Tai nghe không dây WH-CH510', price: 1190000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 88 },
    { id: 4, name: 'Tai nghe chống ồn WH-1000XM5', price: 6490000, category: {id:2, name: 'Tai nghe over-ear'}, quantity: 12 },
    { id: 5, name: 'Loa đeo cổ không dây SRS-NS7', price: 6990000, category: {id:3, name: 'Loa'}, quantity: 1 },
];

//1
const filteredProducts1 = listData.filter(product => product.price >= 5000000);
console.log(filteredProducts1);

//2
const filteredProducts2 = listData.filter(product => product.price >= 1000000 && product.price <= 5000000 && product.category.id == 2);
console.log(filteredProducts2);

//3
const doubledPriceProducts = listData.map(product => ({
    ...product,
    price: product.price * 2
  }));
console.log(doubledPriceProducts);
  