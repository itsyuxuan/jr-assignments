let shoppingList = ['milk', 'eggs', 'bread']

// Add two items and print the result
shoppingList.push('coffee', 'cereal')
console.log('Shopping list after adding two items:', shoppingList)

// Remove the last item and print the result
shoppingList.pop()
console.log('Shopping list after removing the last item:', shoppingList)

// Check if the shopping list has more than 5 items
const isFullList = () => {
  if (shoppingList.length > 5) console.log('Your shopping cart is full')
  else console.log(`Your shopping cart has ${shoppingList.length} items, still has room for more!`)
}

isFullList()

// Loop through the shopping list and log each item with its index
console.log('Items in the shopping list:')
for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`)
}

// Function to check if an item is in the shopping list
const isInList = (item) => {
  return shoppingList.includes(item)
}

console.log('Is coffee in the shopping list?', isInList('coffee'))

// Define and use a shopping item object
let item = {
  name: 'coffee',
  description: 'Cold Brew',
  category: 'Beverages',
  prices: {
    tall: 5.9,
    grande: 6.65,
    venti: 7.4,
  },
  // Method to get the total price of the item
  getTotalPrice: function (size, quantity = 1) {
    return this.prices[size] * quantity
  },
}

console.log('Total price of a cup of venti coffee:', item.getTotalPrice('venti'))
console.log('Total price of two cups of tall coffee:', item.getTotalPrice('tall', 2))
