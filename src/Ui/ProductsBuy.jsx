import { NavLink } from "react-router-dom"
import image from "../api/fourImage.json"
export const ProductsImgs = () => {
    return (
        <section className="container">
            <div className="grid_Four_columns">
                {
                    image.map((curElm) => {
                        const { id, heading, para, image, button } = curElm
                        return <article className="card" key={id}>
                            <img
                                className="card__background"
                                src={image}
                                alt={name}
                                width="1920"
                                height="2193"
                            />
                            <div className="card__content | flow">
                                <div className="card__content--container | flow">
                                    <h2 className="card__title">{heading}</h2>
                                    <p className="card__description">
                                        {para}
                                    </p>
                                </div>
                                <NavLink to="/products"><button className="card__button">{button}</button></NavLink>
                            </div>
                        </article>
                    })
                }
            </div>
        </section>
    )
}