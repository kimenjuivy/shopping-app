const db = new Dexie('ShoppingApp')
db.version(1).stores({ items: '++id,name,price,quantity,isPurchased' })

const itemForm = document.getElementById('itemForm')
const itemsDiv = document.getElementById('itemsDiv')
const totalPriceDiv = document.querySelector('.totalPriceDiv')

const calculateTotalPrice = (items) => {
  const totalPrice = items.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
  
  totalPriceDiv.innerHTML = `<b>Total price: </b>$${totalPrice.toFixed(2)}`
}

const populateItemsDiv = async () => {
  const allItems = await db.items.reverse().toArray()

  itemsDiv.innerHTML = allItems.map(item => `
    <div class="item ${item.isPurchased ? 'purchased' : ''}">
      <input
        type="checkbox"
        class="checkbox"
        onchange="toggleItemStatus(event, ${item.id})"
        ${item.isPurchased ? 'checked' : ''}
      />
      
      <div class="itemInfo">
        <p>${item.name}</p>
        <p>$${item.price} x ${item.quantity}</p>
      </div>
     
      <button onclick="removeItem(${item.id})" class="deleteButton">
        X
      </button>
    </div>
  `).join('')

  calculateTotalPrice(allItems)
}

window.onload = populateItemsDiv

itemForm.onsubmit = async (event) => {
  event.preventDefault()

  const name = document.getElementById('nameInput').value
  const quantity = parseInt(document.getElementById('quantityInput').value)
  const price = parseFloat(document.getElementById('priceInput').value)

  await db.items.add({ name, quantity, price, isPurchased: false })
  await populateItemsDiv()

  itemForm.reset()
}

const toggleItemStatus = async (event, id) => {
  await db.items.update(id, { isPurchased: !!event.target.checked })
  await populateItemsDiv()
}

const removeItem = async id => {
  await db.items.delete(id)
  await populateItemsDiv()
}
