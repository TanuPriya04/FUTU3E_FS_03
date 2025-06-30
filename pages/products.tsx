import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Modal from "../components/Modal";
import SEO from "../components/SEO";


type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
    <SEO
      title="Amul Products | Taste of India"
      description="Explore a wide range of Amul dairy products including milk, butter, cheese, and chocolates. Order fresh and trusted Amul products online."
      keywords="Amul, dairy products, butter, milk, cheese, India"
    />
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Amul Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-60 h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-green-700 font-bold mb-4">{product.price}</p>

            <button
              onClick={() => setSelectedProduct(product)}
              className="mt-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal onClose={() => setSelectedProduct(null)}>
          <div className="text-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-40 h-40 object-cover mx-auto rounded"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
            <p className="text-gray-600">{selectedProduct.category}</p>
            <p className="text-green-700 font-semibold text-lg mt-2">{selectedProduct.price}</p>
            <button
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => alert("Order placed! (demo)")}
            >
              Confirm Purchase
            </button>
          </div>
        </Modal>
      )}
    </div>
     </>
  );
}
