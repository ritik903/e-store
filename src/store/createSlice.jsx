import { createSlice } from "@reduxjs/toolkit";
// import data2 from "../api/Products.json"


const initialState = {
    // all products data 
    addsingle: [],

    // add single data all products
    jsonData: [],
    

    // feature products 
    header: [],
    
    //featured add single data 
    data: [],

    // sales products 
    headersales: [],

    //sales data add single data 
    sales: [],

    // search and assending desending data 
    products: [],
    searchResults: [],
    sortDirection: 'asc',
    sortBy: 'name',

    // login sign in data 
    isAuthenticated: false,
    userType: null,
    
}

const createSliceSinglePage = createSlice({
    name: "Fetch",
    initialState,
    reducers: {

        // feature products header add 
        featuredHeader: (state, action) => {
            state.header.push(action.payload)
        },

        // featured products Add single page 
        featuredProducts: (state, action) => {
            state.data.push(action.payload)
        },
        // featured products remove page 
        featuredRemove(state, action) {
            state.header = state.header.filter((curItem) => {
                return curItem.id !== action.payload

            })
        },

        // single page add Data 
        addSingleJsonData: (state, action) => {
            state.jsonData.push(action.payload)
            // state.jsonData.push(action.payload)
        },
        // all products data header add 
        addSingleData: (state, action) => {

            state.addsingle.push(action.payload)
        },
        // remove item header 
        deleteJsonData: (state, action) => {
            state.jsonData = state.jsonData.filter((curData) => {
                return curData.id !== action.payload
            })

        },

        // sales header add data 
        salesHeader: (state, action) => {
            state.headersales.push(action.payload)
        },

        // sales products data 
        salesProducts: (state, action) => {
            state.sales.push(action.payload)
        },
        salesProductsDelete: (state, action) => {
            state.headersales = state.headersales.filter((curData) => {
                return curData.id !== action.payload

            })

        },

        // new serted 
        // searching and sortimg data 
        setProducts: (state, action) => {
            state.products = action.payload;
            state.searchResults = action.payload;
        },
        searchProducts: (state, action) => {
            const query = action.payload.toLowerCase();
            state.searchResults = state.products.filter(product =>
                product.name.toLowerCase().includes(query)
                || product.discription.toLowerCase().includes(query)
            );
        },
        sortProducts: (state, action) => {
            const { direction, sortBy } = action.payload;
            state.sortDirection = direction;
            state.sortBy = sortBy;

            state.searchResults = [...state.searchResults].sort((a, b) => {
                if (sortBy === 'name') {
                    return direction === 'asc'
                        ? a.discription.localeCompare(b.discription)
                        : b.discription.localeCompare(a.discription);
                } else if (sortBy === 'price') {
                    return direction === 'asc'
                        ? a.mrp - b.mrp
                        : b.mrp - a.mrp;
                }
            });
        },
        // login sign in ppage 
        login: (state) => {
            state.isAuthenticated = true;
            state.userType = 'login';
        },
        signIn: (state) => {
            state.isAuthenticated = true;
            state.userType = 'signin';
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userType = null;
        },
    }
})

export const { deleteJsonData,
    setProducts,
    searchProducts,
    sortProducts,
    addSingleJsonData,
    addSingleData,
    salesProductsDelete,
    featuredProducts,
    featuredRemove,
    featuredHeader,
    salesProducts,
    salesHeader,
    setCategoryFilter, setBrandFilter, setPriceRange, applyFilters,
    login, logout, signIn } = createSliceSinglePage.actions;

export default createSliceSinglePage.reducer;
