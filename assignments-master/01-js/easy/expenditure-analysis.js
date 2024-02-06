/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let spendByCategory = []
  let category = '';
  let price = 0;
  transactions.forEach(transaction => {
    let catExists = false;
    spendByCategory.forEach(spend =>{
      if(spend["category"] === transaction.category){
        catExists = true;
        spend["totalSpent"]+=transaction.price;
      }
    });
    if(!catExists){
      category = transaction.category;
      price = transaction.price;
      spendByCategory.push({category, totalSpent: price});
    }
      
  });
  return spendByCategory;
}

module.exports = calculateTotalSpentByCategory;
