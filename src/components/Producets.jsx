import { useEffect, useState } from "react"
import allProducts from "../api/Products.json"
import { NavLink } from "react-router-dom";
// import { SinglePageData } from "./SinglePageData";
import { useDispatch, useSelector } from "react-redux";
import { addSingleJsonData } from "../store/createSlice";
import { RiGridFill } from "react-icons/ri";
import { FaListUl } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

export const Producets = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const [gridList, setGridList] = useState(true)
    const [filters, setFilters] = useState(false)

    // sort all data 
    const [data, setData] = useState(allProducts)

    const handleSort = (e) => {
        const sortType = e.target.value;
        let sortedData = [...data];

        switch (sortType) {
            case "name-asc":
                sortedData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                sortedData.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "mrp-asc":
                sortedData.sort((a, b) => a.mrp - b.mrp);
                break;
            case "mrp-desc":
                sortedData.sort((a, b) => b.mrp - a.mrp);
                break;

            default:
                break;
        }
        setData(sortedData);
    };


    // click search fun
    const item = [...new Set(data.map((curelm) => {
        return curelm.name
    })),
        "Back All-Products",
    ]

    const handlesearch = (name) => {
        if (name === "Back All-Products") {
            setData(allProducts)
            return;
        }
        const clickSearch = data.filter((curElm) => {
            return curElm.name === name
        })
        setData(clickSearch)
    }
    // click search fun end

    // option click search data 

    const option = [...new Set(data.map((curOption) => {
        return curOption.brand
    }))]

    // console.log(option);

    const handleOption = (e) => {
        const sortType = e.target.value;
        let sortedData = [...data];
        const searhOption = sortedData.filter((curSerch) => {
            return curSerch.brand === sortType
        })
        // console.log(items);

        // console.log(searhOption);
        setData(searhOption)
    }


    // clear filter 
    const handleClearFilter = () => {
        return setProduct([])
    }

    const handleFilterData = () => {
        setFilters(!filters)
    }

    useEffect(() => {
        setProduct(allProducts)
    }, [])

    const handleSinglePageData = (id) => {
        const data = product.find((item) => item.id === id)
        // console.log(data);
        dispatch(addSingleJsonData(data))
    }

    // sort data end
    const handlegrid = () => {
        setGridList(true)
    }
    const handlegridList = () => {

        setGridList(false)
    }

    // grid and list viwes 
    if (gridList === true) {
        return (
            <section className="container container_fluide">
                <h1 className="headd">view products all</h1>
                <div className="d_sort_flex">
                    <div className="flex_icons">
                        <span><FaFilter onClick={handleFilterData} className="filter_item_menu" /></span>
                        <span><RiGridFill onClick={handlegrid} /></span>
                        <span><FaListUl onClick={handlegridList} /></span>
                    </div>

                    <div>
                        <select name="sort" id="sort" className="option" onChange={handleSort}>
                            <option value="mrp-asc">Lowest Price</option>
                            <option value="mrp-desc">Highest Price</option>
                            <option value="name-asc">Price A-Z</option>
                            <option value="name-desc">Price Z-A</option>
                        </select>
                    </div>
                </div>
                <div className="grid_columns">
                    <div className={filters ? "filterd_Mobile filter_products" : "filter_products"}>
                        <h1 className="catHeading">Catagory</h1>
                        <div className="filter">
                            {
                                item.map((cur) => {
                                    return <span onClick={() => handlesearch(cur)}>{cur}</span>
                                })
                            }
                        </div>

                        <div className="cat_filter">
                            <h1 className="catHeading">brand</h1>
                            <select className="options" id="option" onChange={handleOption}
                                defaultValue="">
                                {
                                    option.map((option) => {
                                        return <option value={option}>{option}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <button className="button-85" role="button" onClick={handleClearFilter}>Clear Filter</button>
                        </div>
                    </div>
                    <div className="grid_four_Columns">
                        {
                            data.map((curProducts) => {
                                const { name, id, img_url, discription2, mrp, cast } = curProducts

                                return (
                                    <NavLink to={`/singlepagedata/${id}`} className="navlink">
                                        <li className="card_section" key={id} onClick={() => handleSinglePageData(id)}>
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
                                )
                            })
                        }
                    </div>

                </div>
            </section >
        )
    }
    if (gridList === false) {
        return (
            <section className="container container_fluide">
                <h1 className="headd">view products all</h1>
                <div className="d_sort_flex">
                    <div className="flex_icons">
                        <span><FaFilter onClick={handleFilterData} className="filter_item_menu" /></span>
                        <span><RiGridFill onClick={handlegrid} /></span>
                        <span><FaListUl onClick={handlegridList} /></span>
                    </div>
                    <div>
                        <select name="sort" id="sort" className="option" onChange={handleSort}>
                            <option value="mrp-asc">Lowest Price</option>
                            <option value="mrp-desc">Highest Price</option>
                            <option value="name-asc">Price A-Z</option>
                            <option value="name-desc">Price Z-A</option>
                        </select>
                    </div>
                </div>
                <div className="grid_columns">
                    <div className={filters ? "filterd_Mobile filter_products" : "filter_products"}>
                        <h1 className="catHeading">Catagory</h1>
                        <div className="filter">
                            {
                                item.map((cur) => {
                                    return <span onClick={() => handlesearch(cur)}>{cur}</span>
                                })
                            }
                        </div>

                        <div className="cat_filter">
                            <h1 className="catHeading">brand</h1>
                            <select className="options" id="option" onChange={handleOption}
                                defaultValue="">
                                {
                                    option.map((option) => {
                                        return <option value={option}>{option}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <button className="button-85" role="button" onClick={handleClearFilter}>Clear Filter</button>
                        </div>
                    </div>
                    <div className="columnsWise">
                        {
                            data.map((curProducts) => {
                                const { name, id, img_url, discription, mrp, cast } = curProducts

                                return (

                                    <NavLink to={`/singlepagedata/${id}`} className="navlink"> <li className="card_flex" onClick={() => handleSinglePageData(id)} key={id}>
                                        <div className="listView_contain">
                                            <div>
                                                <figure>
                                                    <img src={img_url[0].img} alt={name} className="list_img" />
                                                </figure>
                                            </div>
                                            <div className="column_width">
                                                <h1 className="name">{name}</h1>
                                                <p className="para_list">{discription.slice(0, 70)}... <span className="red">read more</span> </p>
                                                <h2 className="name">$: {mrp}/-</h2>

                                            </div>


                                        </div>
                                    </li>
                                    </NavLink>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        )

    }


}
