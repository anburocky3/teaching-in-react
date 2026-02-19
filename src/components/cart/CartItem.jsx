import { useState } from "react";

export default function CartItem({ item }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <li className="flex justify-between bg-blue-50 px-4 py-2 rounded ">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 object-cover rounded-full"
        />
        <span className="font-medium">{item.name}</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-blue-100 px-2 py-1 rounded">
          <button
            className="bg-red-500 hover:bg-red-700 text-white text-sm px-2 py-0.5 rounded flex"
            onClick={() => setQuantity(() => Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="ml-2 font-medium">{quantity}</span>
          <button
            className="bg-green-500 hover:bg-green-700 text-white text-sm ml-2 px-2 py-0.5 rounded"
            onClick={() => setQuantity(() => quantity + 1)}
          >
            +
          </button>
        </div>
        <span>₹{item.price * quantity}</span>
      </div>
    </li>
  );
}
