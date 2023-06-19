import React, { useContext } from 'react'
import ProductContext from '../context/ProductContex'
import ProductCards from '../components/ProdocutCards'

function Products() {
  const {loading , productData} = useContext(ProductContext)
  const data = productData?.products;
  
  return (
    <section className="w-full px-7 py-7 bg-slate-200 flex justify-center align-center ">
 
     
        
         {
           loading? <h1>Loading...</h1>: <div className='grid grid-cols-1 max-w-[1080px] md:grid-cols-3 gap-6 mx-auto  '>
            {
              data=== undefined? <h1>Loading...</h1>: data.map((product) => {
                return <ProductCards key={product.id} product={product} />
              })
            }
    {
       
    }
            


           </div>
         
         }
  
</section>
  )
}

export default Products