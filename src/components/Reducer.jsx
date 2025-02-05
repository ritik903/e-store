export const reducer = (state, action) => {
    if (action.type === "HERO_DATA") {
        return {
            ...state,
            heading: action.payload.heading,
            para: action.payload.para,
            imgproducts1: action.payload.imgproducts1,

        }
    }
    if (action.type === "DATA_API") {
        return {
            ...state,
            Data: action.payload.Data,

        }
    }
    if (action.type === "PRODUCTS_DATA") {
        return {
            ...state,
            curData: action.payload.curData,

        }
    }


}