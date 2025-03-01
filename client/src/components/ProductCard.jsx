import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
