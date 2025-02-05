
import { useDispatch, useSelector } from "react-redux"
// import { addToCartData } from "../store/createSliceADDCart";
import { ImgDetails } from "../Ui/ImgDetails";
import { ColorData } from "../Ui/ColorData";
import { Star } from "../Ui/Star";
import { WarntidIcons } from "../Ui/WarntidIcons";
import { addSingleData, featuredHeader, salesHeader } from "../store/createSlice";
import { ToastContainer, toast } from 'react-toastify';
import { IncDecmentItems } from "../Ui/IncDecmentItems"
import { FeaturdProducets } from "../Ui/FeaturdProducets";

export const SinglePageData = () => {
    const dispatch = useDispatch()

    const iteming = useSelector((state) => state.jsonData.jsonData)

    const FeaturedProducts = useSelector((state) => state.jsonData.data)

    const salesData = useSelector((state) => state.jsonData.sales)

    const handleAddToCart = (curProducts) => {
        toast.success("ADD TO CART SUCCESS")
        dispatch(addSingleData(curProducts))
    }

    const handleAddToCartHeader = (curProducts) => {
        toast.success("ADD TO CART SUCCESS")
        dispatch(featuredHeader(curProducts))
    }
    const handleAddToCartSalesData = (curProducts) => {
        toast.success("ADD TO CART SUCCESS")
        dispatch(salesHeader(curProducts))
    }

    return <section className="container">
        <ul className="centerDiv">
            {
                iteming?.map((curProducts) => {
                    const { name, id, img_url, stock, discription, mrp, cast, ratting, preview } = curProducts

                    return <li className="card_flex" key={id}>
                        <figure>
                            <ImgDetails img_url={img_url} />
                        </figure>

                        <div className="card_deta">
                            <span>{name}</span><span className="light">({cast})</span> <br />
                            <div className="inLine"><span><Star ratting={ratting} /></span> <span className="previews">{`(${preview} Customer reviews)`}</span></div>
                            <p>{discription}</p>
                            <div>
                                <span className="stock">

                                    Available:
                                </span>
                                <span className="in_stok"> {stock > 0 ? "in Stock" : "Not Available"}</span>
                            </div>
                            <span className="stock">Brand:</span> <span className="in_stok"> {name}</span> <br />
                            <span className="mrpPrice">M.R.P Price: </span><del className="delPrice"> $: {mrp} /-</del>
                            <WarntidIcons />
                            <div>
                                <ColorData curProducts={curProducts} />
                            </div>
                            <IncDecmentItems
                                stock={stock}

                            />
                            <hr className="hr" />
                            <h2 className="mrpPrice">$: {mrp} /-</h2>
                            <button className="button-85" role="button" onClick={() => handleAddToCart(curProducts)}>BUY</button>

                        </div>


                    </li>
                })
            }
            {
                FeaturedProducts?.map((curProducts) => {
                    const { name, id, img_url, stock, discription, mrp, cast, ratting, preview } = curProducts
                    return <li className="card_flex" key={id}>
                        <figure>
                            <ImgDetails img_url={img_url} />
                        </figure>

                        <div className="card_deta">
                            <span>{name}</span><span className="light">({cast})</span> <br />
                            <div className="inLine"><span><Star ratting={ratting} /></span> <span className="previews">{`(${preview} Customer reviews)`}</span></div>
                            <p>{discription}</p>
                            <div>
                                <span className="stock">

                                    Available:
                                </span>
                                <span className="in_stok"> {stock > 0 ? "in Stock" : "Not Available"}</span>
                            </div>
                            <span className="stock">Brand:</span> <span className="in_stok"> {name}</span> <br />
                            <span className="mrpPrice">M.R.P Price: </span><del className="delPrice"> $: {mrp} /-</del>
                            <WarntidIcons />
                            <div>
                                <ColorData curProducts={curProducts} />
                            </div>
                            <IncDecmentItems
                                stock={stock}
                            />
                            <hr className="hr" />
                            <h2 className="mrpPrice">$: {mrp} /-</h2>
                            <button className="button-85" role="button" onClick={() => handleAddToCartHeader(curProducts)}>BUY</button>

                        </div>


                    </li>
                })
            }
            {
                salesData?.map((curProducts) => {
                    const { name, id, img_url, stock, percentege, discription, mrp, cast, ratting, preview } = curProducts
                    return <li className="card_flex" key={id}>

                        <figure>
                            <div className="bg_color_sale"><span className="saleData">-{percentege}%</span><span className="sale"> OFF</span></div>
                            <ImgDetails img_url={img_url} />
                        </figure>

                        <div className="card_deta">
                            <span>{name}</span><span className="light">({cast})</span> <br />

                            <div className="inLine"><span><Star ratting={ratting} /></span> <span className="previews">{`(${preview} Customer reviews)`}</span></div>
                            <p>{discription}</p>
                            <div>
                                <span className="stock">

                                    Available:
                                </span>
                                <span className="in_stok"> {stock > 0 ? "in Stock" : "Not Available"}</span>
                            </div>
                            <span className="stock">Brand:</span> <span className="in_stok"> {name}</span> <br />
                            <span className="mrpPrice">M.R.P Price: </span><del className="delPrice"> $: {mrp} /-</del>
                            <WarntidIcons />
                            <div>
                                <ColorData curProducts={curProducts} />
                            </div>
                            <IncDecmentItems
                                stock={stock}
                            />
                            <hr className="hr" />
                            <h2 className="mrpPrice">$: {mrp} /-</h2>
                            <button className="button-85" role="button" onClick={() => handleAddToCartSalesData(curProducts)}>BUY</button>

                        </div>


                    </li>
                })
            }
        </ul>

        <ToastContainer />

        <FeaturdProducets />
    </section>
}
