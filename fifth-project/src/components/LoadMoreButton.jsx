import React, { useEffect, useState } from 'react';

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((result.products));
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count]);

  if (loading) {
    return <div>Loading Data | Please Wait ...</div>;
  }

  return (
    <div>
      <div className='grid grid-cols-1 p-2 md:grid-cols-3 xl:grid-cols-4 gap-[10px]'>
        {products && products.length
          ? products.map((item) => (
              <div className='border p-2' key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p> {/* Corrected: Removed quotes */}
              </div>
            ))
          : null}
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Load More Button</button>
      </div>
    </div>
  );
}
