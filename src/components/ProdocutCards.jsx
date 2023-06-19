import React from 'react'

function ProductCards({product}) {
  
  return (
    <div className="w-full  bg-purple-700 text-white  shadow-md shadow-purple-400 rounded-sm pb-3">
    <a className="block relative h-48 rounded overflow-hidden mb-4">
      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.images[0]}/>
    </a>
    <div className="mt-4 flex flex-col text-center text-white">
      <h3 className="text-white text-xl font-serif  font-bold  bg-slate-900 w-fit  mx-auto py-2 px-3 rounded-md  tracking-widest title-font mb-1">{product.title}</h3>
      <h2 className="text-white  title-font text-lg font-medium">{product.description}</h2>
      <h2 className="text-white text-xl  title-font font-serif font-medium">{product.brand}</h2>
      <p className="mt-1 bg-slate-800 w-fit  px-4 py-1 text-xl rounded-md mx-auto shadow-md shadow-purple-950">${product.price}</p>
    </div>
  </div>
  )
}

export default ProductCards