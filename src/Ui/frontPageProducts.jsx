
import { useEffect, useState } from "react"
import productsData from "../api/Products.json"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";

export const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productsData)
    }, [])

    const datas = products.map((curelm) => {
        return curelm
    })
    const producting = datas.filter((curProducts) => {
        return curProducts.featured === true
    })

    const handlebuttonJson = (curItems) => {
        dispatch()
    }
    // console.log(producting);


    return (
        <section className="container">
            <h1>latest new pruducts</h1>
            <ul className="grid_five_col">
                {
                    producting.map((curItems) => {
                        const { name, id, img_url, cast, discription, mrp: price, percentege, ratting } = curItems
                        return <NavLink to="/singlepagedata" onClick={() => handlebuttonJson(curItems)} > <li key={id} className="productsCard">
                            <figure>
                                <img src={img_url} alt={name} className="img_card" />
                            </figure>
                            <div>
                                <h1 className="heading_card">{cast}</h1>
                                <span>{ratting}</span>
                                <p>{discription}</p>
                                <h2 className="heading2_card">${price}</h2>
                                <span className="company">{percentege}</span> <br />

                            </div>
                        </li>
                        </NavLink>
                    })
                }

            </ul>
        </section >
    )
}