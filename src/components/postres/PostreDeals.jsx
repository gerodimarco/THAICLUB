import React from "react"
import PostreCard from "./PostreCard"
import "./postre.css"

const PostreDeals = ({ postreItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Postres</h1>
          </div>
          <PostreCard postreItems={postreItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default PostreDeals