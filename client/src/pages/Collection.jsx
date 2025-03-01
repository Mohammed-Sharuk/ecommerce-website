// Updated Collection.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const categories = ["Men", "Women", "Kids"];
const types = ["Topwear", "Bottomwear", "Winterwear"];

const Collection = () => {
  const [productsData, setProductsData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = productsData
    .filter((product) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true
    )
    .filter((product) =>
      selectedTypes.length > 0 ? selectedTypes.includes(product.type) : true
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex flex-col md:flex-row px-4 py-8">
      <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Categories</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Type</h3>
          {types.map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={type}
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="mr-2"
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Collections</h2>
          <select
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center mt-8 text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;