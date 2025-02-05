import { useEffect, useState } from "react"
import data from "../api/Products.json"
import { NavLink } from "react-router-dom";
import { salesProducts } from "../store/createSlice";
import { useDispatch } from "react-redux"
import { FaArrowRight } from "react-icons/fa6";
export const SalesItems = () => {
    const [saleItem, setSalesItem] = useState([])
    const dispatch = useDispatch()

    // console.log(saleItem);

    const res = saleItem.filter((curData) => {
        return curData.percentege >= 30
    })

    useEffect(() => {
        setSalesItem(data)
    }, [])

    const handleSinglePageItem = (curProducts) => {
        dispatch(salesProducts(curProducts))
    }

    return (
        <section className="container">
            <h1 className="mt">Selling Products Buy</h1>
            <ul className="grid_five_columns">
                {
                    res?.map((curProducts) => {
                        const { name, id, img_url, mrp, cast, discription2, percentege } = curProducts
                        return <NavLink to={`/singlepagedata/${id}`} className="navlink">
                            <li className="card_section" key={id} onClick={() => handleSinglePageItem(curProducts)}>
                                <figure>
                                    <div className="bg_color_sale"><span className="saleData">-{percentege}%</span><span className="sale"> OFF</span></div>
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

