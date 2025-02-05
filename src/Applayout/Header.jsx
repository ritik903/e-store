import { NavLink } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { SiSinglestore } from "react-icons/si";
import { RiMenuAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import json from "../api/Products.json"
import { logout, searchProducts, setProducts } from "../store/createSlice"
import { Logout } from "../Ui/Logout";
import { SignOut } from "../Ui/SignOut";

export const Header = () => {
    const [manuBar, setMenuBar] = useState(false)
    const dispatch = useDispatch()

    const data = useSelector((state) => state.jsonData.addsingle)
    const FeaturedProducts = useSelector((state) => state.jsonData.header)
    const salesProducts = useSelector((state) => state.jsonData.headersales)

    const dataPlus = [...data, ...FeaturedProducts, ...salesProducts]

    // data adding products 
    useEffect(() => {
        dispatch(setProducts(json))
    }, [])

    // handle searching data 
    const handleSearch = (event) => {
        dispatch(searchProducts(event.target.value));
    };

    // handle menu bar
    const handleMenuBar = () => {
        setMenuBar(!manuBar)
        console.log("hlo menu");
    }

    // login data
    const { isAuthenticated, userType } = useSelector((state) => state.jsonData);
    
    
    // logout id 
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <section className="container bg_color">
                <nav className="navbar">
                    <div>
                        <div className="logo_div">E-<span className="store">Store</span></div>
                    </div>
                    <div>
                        <ul className={manuBar ? "menuShow d_flex" : "d_flex"}>
                            <NavLink className="navlink" to="/"><li>Home</li ></NavLink>
                            <NavLink className="navlink" to="/products"> <li>Products</li></NavLink>
                            <NavLink className="navlink" to="/location"> <li>Store Location</li></NavLink>
                            <NavLink className="navlink" to="/contact"> <li>Contact</li></NavLink>
                        </ul >
                    </div >
                    <div className={manuBar ? "addToCart" : "login_addToCart"}>
                        {!isAuthenticated ? (
                            <>
                                <NavLink className="navlinked" to="/login">Login / </NavLink>
                                <NavLink className="navlinked" to="/signin">Sign-In</NavLink>
                            </>
                        ) : (
                            <h1 onClick={handleLogout}>
                                {userType === 'login' ? <Logout /> : <SignOut/>}
                            </h1>
                        )}
                    </div>
                    <div className="menu_icon">
                        <h1 onClick={handleMenuBar}><RiMenuAddLine /></h1>
                    </div>

                </nav >
            </section >
            <div className="search_products bg_color container">
                <div>
                    <SiSinglestore className="logo" />
                </div>
                <div className="p">
                    <form >
                        <label className="d-column">search-products</label>
                        <input type="text" placeholder="Search Products Here..." className="serch" onChange={handleSearch} />
                        <NavLink to="/searchProducts"><button className="button-85" type="submit" role="button">Search</button></NavLink>
                    </form>
                </div>
                <div className="d_flexer">
                    <NavLink to="/addtocart" className="navlink">
                        <div className="d_flexing">
                            <p className="icons"><FaCartPlus /></p>
                            <div className="columnWise">
                                <span className="cart">your Cart</span>
                                <span className="length">{dataPlus.length}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}