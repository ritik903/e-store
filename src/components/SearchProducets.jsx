import { FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addSingleJsonData, sortProducts } from "../store/createSlice";
import product from "../api/Products.json"
import { useState } from "react";
import { IoSettings } from "react-icons/io5";

export const SearchProducets = () => {
    const dispatch = useDispatch()
    const { searchResults, sortDirection, sortBy } = useSelector(state => state.jsonData);

    const [showFeatured, setShowFeatured] = useState(false)
    const [showSallingProducts, setShowSallingProducts] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState("");
    const [filterMenu, setFilterMenu] = useState(false)

    // menu data 
    const handleFIlterMenu = () => {
        setFilterMenu(!filterMenu)
    }

    // prices range chack 
    const prices = searchResults.map(item => item.mrp);
    const initialMax = Math.max(...prices);

    const [maxPrice, setMaxPrice] = useState(initialMax);

    const filteredProducts = searchResults.filter(
        (product) => product.mrp <= maxPrice
    );

    // featured products 
    const featuredProducts = showFeatured
        ? filteredProducts.filter(product => product.featured)
        : filteredProducts;


    // sale products all 
    const slaeProducts = showSallingProducts
        ? featuredProducts.filter((saleProd) => saleProd.percentege >= 30)
        : featuredProducts


    // brand Products all
    const handleBrandChange = (brand) => {
        setSelectedBrands(selectedBrands === brand ? "" : brand);
    };

    const brandProducts = selectedBrands
        ? slaeProducts.filter((product) => product.branding === selectedBrands)
        : slaeProducts;


// click filtrate products
    const option = [...new Set(searchResults.map((curOption) => {
        return curOption.branding
    }))]

    // single page data 
    const handleSinglePageData = (id) => {
        const data = product.find((item) => item.id === id)
        console.log(data);
        dispatch(addSingleJsonData(data))
    }

    // sorted data 
    const handleSort = (e) => {
        const [sortBy, direction] = e.target.value.split('-');
        dispatch(sortProducts({ sortBy, direction }));
    };

    return <section className="container">
        <div className="sortFlex">
            <div>
                <IoSettings className="searchhead_icon" onClick={handleFIlterMenu} />
            </div>
            <div>
                <select onChange={handleSort} className="option" value={`${sortBy}-${sortDirection}`}>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="price-asc">Price (Low - High)</option>
                    <option value="price-desc">Price (High - Low)</option>
                </select>
            </div>
        </div>
        <ul className="Grid_three_ColUmns">
            <div className={filterMenu ? "filterMenu_Mobile Chackbox_Filter" : "Chackbox_Filter"}>
                <form className="radiobtns">
                    <h1 className="searchhead">Featured Products</h1>
                    <div>
                        <input
                            type="checkbox"
                            id="chack"
                            checked={showFeatured}
                            onChange={(e) => setShowFeatured(e.target.checked)}
                        />
                        <label className="newlabel">new Products</label>
                    </div>
                </form>
                <h1 className="searchhead">price Range</h1>
                <form>
                    <label className="label"> Maximum Price: ₹{maxPrice}</label> <br />

                    <input
                        type="range"
                        id="point"
                        min="0"
                        max={initialMax}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </form>
                <h1 className="searchhead">SALE PRODUCTS</h1>
                <form className="radiobtns">
                    <div>
                        <input type="checkbox" id="chack" name="favlanguage" checked={showSallingProducts}
                            onChange={(e) => setShowSallingProducts(e.target.checked)} />
                        <label className="newlabel">Sale Products</label>
                    </div>
                </form>
                <h1 className="searchhead">brands</h1>
                <form className="radiobtns">
                    {
                        option.map((curElm) => {
                            return <div>
                                <input type="checkbox" id="chack" name="favlanguage" value={curElm}
                                    checked={selectedBrands.includes(curElm)}
                                    onChange={() => handleBrandChange(curElm)} />
                                <label className="newlabel">{curElm}</label>
                            </div>
                        })
                    }
                </form>
                <h1 className="searchhead">top Brands</h1>
                <form className="radiobtns">
                    <div>
                        <input type="checkbox" id="chack" name="favlanguage" value="chack" />
                        <label className="newlabel">html</label>
                    </div>
                </form>

            </div>
            {brandProducts.length > 0 ? (
                <div className="gridtwo">
                    {
                        brandProducts?.map((curdeta) => {
                            const { name, id, img_url, discription2, mrp, cast, percentege } = curdeta
                            return (
                                <NavLink to={`/singlepagedata/${id}`} className="navlink">
                                    <li className="card_section" key={id} onClick={() => handleSinglePageData(id)}>
                                        <figure>
                                            {curdeta.percentege >= 30 ? <div className="bg_color_sale"><span className="saleData">-{percentege}%</span><span className="sale"> OFF</span></div> : null}
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
                            )
                        })
                    }
                </div>
            ) : (
                <h1 style={{ textAlign: "center", marginTop: "20rem" }}>!No products found in this price range.</h1>
            )}
            <div className="FlexGap">
                <figure>
                    <img src="https://wallpaperaccess.com/full/2593068.jpg" className="imgSearch" alt="img" />
                </figure>
                <figure>
                    <img src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?cs=srgb&dl=cosmetic-products-3018845.jpg&fm=jpg" className="imgSearch" alt="" />
                </figure>
                <figure>
                    <img src="https://cdn.shopify.com/s/files/1/0554/9424/6423/files/hero-desk_2_a7af6170-3cff-4876-8b2d-043b294b4927.png?v=1654967076" className="imgSearch" alt="" />
                </figure>
            </div>
        </ul>
    </section>
}