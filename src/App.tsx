import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const Cart = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Product 1', quantity: 2 },
    { id: 2, name: 'Product 2', quantity: 3 },
    { id: 3, name: 'Product 3', quantity: 1 },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
              <span className="text-lg">{item.name}</span>
            </div>
            <div className="flex items-center">
              <button
                className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="mx-2 text-lg">{item.quantity}</span>
              <button
                className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white rounded-lg p-2 ml-4"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold mb-4">
        Total: {items.reduce((acc, item) => acc + item.quantity, 0)} items
      </p>
    </div>
  );
};

export default Cart;