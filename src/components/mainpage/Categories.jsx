import React from "react";



const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Carnes",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Aves",
          },
          {
            cateImg: "./images/category/cat3.png",
            cateName: "Pescados",
          },
          {
            cateImg: "./images/category/cat4.png",
            cateName: "Mariscos",
          },
          {
            cateImg: "./images/category/cat5.png",
            cateName: "Pastas",
          },
          {
            cateImg: "./images/category/cat6.png",
            cateName: "Ensaladas",
          },
          {
            cateImg: "./images/category/cat7.png",
            cateName: "Sopas",
          },
          {
            cateImg: "./images/category/cat8.png",
            cateName: "Salsas",
          },
          {
            cateImg: "./images/category/cat9.png",
            cateName: "Aperitivos",
          },
          {
            cateImg: "./images/category/cat10.png",
            cateName: "Bebidas",
          },
          {
            cateImg: "./images/category/cat11.png",
            cateName: "Postres",
          },
    ]
    return(
        <>
            <div className="category">
                {
                    data.map((value,index) => {
                        return(
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories