import React, { useEffect } from "react"
import PostreCard from "./PostreCard"
import "./postre.css"

const PostreCard = ({ category, addToCart }) => {
  const [products, setProducts] = useState([])
  useEffect(()=> {
    obtenerProductoPorCategoria()
  }, [])


async function obtenerProductoPorCategoria() {
  const products = await axios.get(`server/products/${category}`);
  setProducts(products)
} 

  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Postres</h1>
          </div>
          <PostreCard products={products} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default PostreDeals