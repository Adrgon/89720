import { useState } from 'react'

const allItems = [
    { id: 'apple', value: ' apple' },
    { id: 'orange', value: ' orange' },
    { id: 'grape', value: ' grape' },
    { id: 'pear', value: ' pear' },
]

export default function AppCopy() {
    const [items, setItems] = useState(allItems)

    function addItem(item) {
        // agregar un item al array
        //setItems((prevItems) => [...prevItems, item])
        setItems(items.push(item))
        //items.push(item)

    }

    function removeItem(id) {
        // quitar un item del array
    }

    return (
        <div className="keys">
            <button disabled={items.length >= allItems.length} onClick={addItem}>
                add item
            </button>
            <ul>
                {items.map((item) => (
                    //  agregar a key prop al <> usamos item.id
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}
