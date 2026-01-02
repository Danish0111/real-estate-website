
const SearchProperty = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-12 mb-12">
      
      <ul className="flex gap-6 mb-6 border-b">
        <li className="pb-2 border-b-2 border-black font-semibold cursor-pointer">
          Buy
        </li>
        <li className="pb-2 text-gray-400 cursor-pointer">
          Rent
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <select className="border rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
          <option>All countries</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

        <select className="border rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
          <option>Property Type</option>
          <option>New Property</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>

        <select className="border rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
          <option>Price Range</option>
          <option>₹50L - ₹1Cr</option>
          <option>₹1Cr - ₹2Cr</option>
          <option>$100k - $300k</option>
        </select>

        <select className="border rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
          <option>All Sizes (m²)</option>
          <option>50 - 100</option>
          <option>100 - 200</option>
          <option>200+</option>
        </select>

        <button className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition font-medium hover:cursor-pointer">
          Show Properties
        </button>
      </div>
    </div>
  );
};

export default SearchProperty;
