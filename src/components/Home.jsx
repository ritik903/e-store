import { useEffect } from "react"
import { CompanysReff } from "../Ui/CompanysReff"
import { HeroSection } from "../Ui/HeroSeaction"
import { ProductsImgs } from "../Ui/ProductsBuy"
import { SalesProducts } from "../Ui/SalesProducts"
import { useGlobleContext } from "./CreateContaxt"
import { LetestBlog } from "../Ui/LetestBlog"
import { FeaturdProducets } from "../Ui/FeaturdProducets"
import { SalesItems } from "../Ui/SalesItems"
import  AllCatogary  from "../Ui/AllCatogary"
import { ChoosUe } from "../Ui/ChoosUe"

export const Home = () => {
    const { HeroPageData} = useGlobleContext()

    useEffect(() => {
        HeroPageData()
    }, [])

    return (
        <>
            <HeroSection />
            <AllCatogary />
            <ProductsImgs />
            <FeaturdProducets />
            <SalesProducts />
            <SalesItems />
            <ChoosUe />
            <LetestBlog />
            <CompanysReff />
        </>
    )
}