import { useDispatch, useSelector } from "react-redux"
import { deleteJsonData, featuredRemove, salesProductsDelete } from "../store/createSlice"
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import { Inccrement } from "../Ui/Inccrement";
import { useState } from "react"

export const AddToCart = () => {
    const [amount, setAmount] = useState(1)
    const [amount2, setAmount2] = useState(1)
    const [amount3, setAmount3] = useState(1)

    const dispatch = useDispatch()

    const iteming = useSelector((state) => state.jsonData.jsonData)
    const FeaturedProducts = useSelector((state) => state.jsonData.header)
    const salesProducts = useSelector((state) => state.jsonData.headersales)

    const data = iteming.map((curdata) => curdata.mrp)
    const data2 = FeaturedProducts.map((curdata) => curdata.mrp)
    const data3 = salesProducts.map((curdata) => curdata.mrp)

    const stock = iteming.map((curelx) => curelx.stock)
    const stock2 = FeaturedProducts.map((curelx) => curelx.stock)
    const stock3 = salesProducts.map((curelx) => curelx.stock)

    // handle data products increments
    const handledecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const handleincrement = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(1)
    }
    // handle data products end

    // handle data feature products increments
    const handledecrementstock2 = () => {
        amount2 > 1 ? setAmount2(amount2 - 1) : setAmount2(1)  
    }
    const handleincrementstock2 = () => {
        amount2 < stock2 ? setAmount2(amount2 + 1) : setAmount2(1)

    }
    // handle data feature products end

    // handle data sales products increment
    const handledecrementstock3 = () => {
        amount3 > 1 ? setAmount3(amount3 - 1) : setAmount3(1)
    }
    const handleincrementstock3 = () => {
        amount3 < stock3 ? setAmount3(amount3 + 1) : setAmount3(1)   
    }
    // handle data sales products end


    //  total data products
    const subbTotal = (items) => {
        return items.reduce((total, item) => total + item.mrp * amount, 0);
    }
    const subbTotal2 = (items) => {
        return items.reduce((total, item) => total + item.mrp * amount2, 0);
    }
    const subbTotal3 = (items) => {
        return items.reduce((total, item) => total + item.mrp * amount3, 0);
    }

    // subtotal data products 
    const productsTotal = subbTotal(iteming);
    const additionalItemsTotal = subbTotal2(FeaturedProducts);
    const additionalItems = subbTotal3(salesProducts);
    const orderTotal = (productsTotal + additionalItemsTotal + additionalItems);

    // all products delete 
    const handleRemoveCart = (id) => {
        toast.error("REMOVE ITEM")
        dispatch(deleteJsonData(id))
    }

    // featured products remove 
    const handleRemovedCart = (id) => {
        toast.error("REMOVE ITEM")
        dispatch(featuredRemove(id))
    }

    // sales products remove 
    const handleRemovingCart = (id) => {
        toast.error("REMOVE ITEM")
        dispatch(salesProductsDelete(id))
    }

    if (iteming.length > 0 || FeaturedProducts.length > 0 || salesProducts.length > 0) {
        return <section className="container">

            <div className="grid_five_columns_ADD">
                <p>ITEM</p>
                <p>PRICE</p>
                <p>QUANTITY-ITEM</p>
                <p>SUBTOTAL</p>
                <p>REMOVE-ITEM</p>
            </div>
            <hr className="hr_add" />
            <ul className="columnswise">
                {
                    iteming?.map((curProducts) => {
                        const { name, id, img_url, mrp, color, stock } = curProducts
                        return <li className="Grid_five_column_item  card_flex" key={id}>
                            <div className="flex_add_img">
                                <div>
                                    <figure>
                                        <img src={img_url[0].img} alt={name} className="Add_cart_img" />
                                    </figure>
                                </div>
                                <div className="column">
                                    <p className="para">{name}</p>
                                    <p className="para">color: <span className="btncolor" style={{ backgroundColor: color }}></span></p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2 className="heading_mrp">$: {mrp} /-</h2>
                                </div>

                            </div>
                            <div className="increment">
                                <Inccrement stock={stock} amount={amount} setAmount={setAmount} handledecrement={handledecrement} handleincrement={handleincrement} />
                            </div>
                            <div>
                                <h2 className="heading_mrp">{mrp * amount}</h2>
                            </div>
                            <div>
                                <button className="button-85" role="button" onClick={() => handleRemoveCart(id)}>Remove</button>
                            </div>

                        </li>
                    })
                }

                {
                    FeaturedProducts?.map((curProducts) => {
                        const { name, id, img_url, mrp, } = curProducts
                        return <li className="Grid_five_column_item  card_flex" key={id}>
                            <div className="flex_add_img">
                                <div>
                                    <figure>
                                        <img src={img_url[0].img} alt={name} className="Add_cart_img" />
                                    </figure>
                                </div>
                                <div className="column">
                                    <p className="para">{name}</p>
                                    <p className="para">{name}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2 className="heading_mrp">$: {mrp} /-</h2>
                                </div>

                            </div>
                            <div className="increment">
                                <Inccrement stock={stock2} amount={amount2} setAmount={setAmount2} handledecrement={handledecrementstock2} handleincrement={handleincrementstock2} />
                            </div>
                            <div>
                                <h2 className="heading_mrp">$: {mrp * amount2} /-</h2>
                            </div>
                            <div>
                                <button className="button-85" role="button" onClick={() => handleRemovedCart(id)}>Remove</button>
                            </div>
                        </li>
                    })
                }

                {
                    salesProducts?.map((curProducts) => {
                        const { name, id, img_url, mrp } = curProducts
                        return <li className="Grid_five_column_item  card_flex" key={id}>
                            <div className="flex_add_img">
                                <div>
                                    <figure>
                                        <img src={img_url[0].img} alt={name} className="Add_cart_img" />
                                    </figure>
                                </div>
                                <div className="column">
                                    <p className="para">{name}</p>
                                    <p className="para">{name}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2 className="heading_mrp">$: {mrp} /-</h2>
                                </div>
                            </div>
                            <div className="increment">
                                <Inccrement stock={stock3} amount={amount3} setAmount={setAmount3} handledecrement={handledecrementstock3} handleincrement={handleincrementstock3} />
                            </div>
                            <div>
                                <h2 className="heading_mrp">$: {mrp * amount3} /-</h2>
                            </div>
                            <div>
                                <button className="button-85" role="button" onClick={() => handleRemovingCart(id)}>Remove</button>
                            </div>
                        </li>
                    })
                }
            </ul>
            
            <ToastContainer />

             <div className="Flex_end">
                <h1>totle amount</h1>
                <div className="main_contain">
                    <div className="flex_totle">
                        <p>SubTotal:</p>
                        <p> $: {data * amount}</p> <br />
                        <p>$: {data2 * amount2}</p> <br />
                        <p>$: {data3 * amount3}</p> <br />
                    </div>
                    <div className="flex_totle">
                        <p>Shiping Fee:</p>
                        <p>$: 499</p>
                    </div>
                    <hr />
                    <div className="flex_totle">
                        <p>order Total</p>
                        <p>$: {orderTotal + 500}</p>
                    </div>
                </div>
            </div> *
        </section>
    } else {
        return (
            <div className="container">
                <div className="container_height">
                    <h1 className="heading">products not found !</h1>
                    <NavLink to="/products"> <button className="button-85" role="button">shop Now</button></NavLink>
                </div>
            </div>
        )
    }
}

