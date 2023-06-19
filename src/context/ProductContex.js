import { createContext, useEffect, useState } from "react";


const ProductContext = createContext();

const ProductProvider = ({children})=>{
    useEffect(()=>{
          fetchData();
    },[])
    const [productData , setProductData] = useState()
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState()
    const [categoryProduct, setCategoryProduct] = useState()
    const fetchData = async ()=>{
        setLoading(true)
         const data =  await fetch('https://dummyjson.com/products');
         const json = await data.json();
         setProductData(json)
         setLoading(false)
        
    }
   const fetchCategory = async()=>{
    setLoading(true)
      const category = await fetch('https://dummyjson.com/products/categories');
      const json = await category.json();
      setCategory(json.categories)
      setLoading(false)
   }
   const fetchCategoryProduct = async(categories)=>{
         const categoryProduct = await fetch('https://dummyjson.com/products/category/'+categories);
         const json = await categoryProduct.json();
         setCategoryProduct(json.categories)
      }

let value = {
    productData,
    setProductData,
    loading,
    setLoading,
    category,
    setCategory,
    categoryProduct,
    setCategoryProduct

}
    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}
export { ProductProvider};
export default ProductContext;