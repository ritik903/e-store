import { createContext, useContext, useReducer } from "react"
import { reducer } from "../components/Reducer"
import productsData from "../api/Products.json"


export const ContaxtApi = createContext()

const inisialState = {
    heading: "",
    para: "",
    imgproducts1: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    api: []
}

export const CreateContaxt = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, inisialState)
    const HeroPageData = () => {
        return dispatch({
            type: "HERO_DATA",
            payload: {
                heading: "my e-store website",
                para: "Planning the introduction of new products to make a strong, positive first impression is important to profitability. Your timing and the details you emphasize during the launch may affect the customers you gather and keep in the future.",
                imgproducts1: "/images/bartans.webp",

            }
        })
    }
    const productingData = () => {
        const data = productsData.map((curData) => {
            return curData

        })

        const res = data.filter((curElm) => {
            return curElm.id === id
        })

        return dispatch({
            type: "PRODUCTS_DATA",
            payload: {
                res
            }
        })
    }

    return <ContaxtApi.Provider value={{ ...state, HeroPageData, productingData }}>
        {children}
    </ContaxtApi.Provider >


}
export const useGlobleContext = () => {
    return useContext(ContaxtApi)
}
