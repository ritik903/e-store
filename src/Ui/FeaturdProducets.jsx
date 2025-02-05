import { useEffect, useState } from "react"
import featurdProducts from "../api/Products.json"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux"
import { featuredProducts } from "../store/createSlice";
import { FaArrowRight } from "react-icons/fa6";
export const FeaturdProducets = () => {

    const dispatch = useDispatch()
    const [featurd, setFeaturd] = useState([])

    const data = featurd.filter((curElm) => {
        return curElm.featured === true
    })

    useEffect(() => {
        setFeaturd(featurdProducts)
    }, [])

    const handleSinglePageData = (curProducts) => {
        dispatch(featuredProducts(curProducts))
    }

    return (
        <section className="container">
            <h1 className="mt">New Featured Products</h1>
            <ul className="grid_five_columns">
                {
                    data?.map((curProducts) => {
                        const { name, id, img_url, mrp, cast, discription2 } = curProducts
                        return <NavLink to={`/singlepagedata/${id}`} className="navlink">
                            <li className="card_section" key={id} onClick={() => handleSinglePageData(curProducts)}>
                                <figure>
                                    <img src={img_url[0].img} alt={name} className="image_products" />
                                </figure>
                                <div>
                                    <div className="flexCastNAme">
                                        <h1>{name.slice(0, 8)}...</h1>
                                        <h2>$: {mrp}/-</h2>
                                    </div>

                                    <p>{discription2.slice(0, 10)}... <span className="red">read more</span></p>
                                </div>
                                <hr className="hr" />
                                <div className="flexCast">
                                    <p><FaArrowRight /></p>
                                    <p>visite the <span className="yellow">{cast}</span></p>
                                </div>
                            </li>
                        </NavLink>
                    })
                }
            </ul>
        </section>
    )
}