import {React, useState , useEffect} from "react";

export default function HomePg() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setproducts(data))
}, []);

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      {products.map((itme)=>{
        return(
          <div className="border p-4 rounded-2xl">
            <img src={itme.image} className="h-[50vh] mx-auto"/>
            <h1 className="text-lg">{itme.title}</h1>
            <h2 className="text-md text-green-600">{itme.price}$</h2>
            <p>description: {itme.description}</p>
          </div>
        );
      })}
    </div>
    </>
  );
}
