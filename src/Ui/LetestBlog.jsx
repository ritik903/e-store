import  cardData  from "../api/Card.json"

export const LetestBlog = () => {
    return (
        <section className="container">
            <h1 className="mt">letest blog</h1>
            <ul className="grid_four_columning">
                {
                    cardData.map((curData, index) => {
                        const { img, heading, para, date } = curData
                        return <li key={index} className="bg_color">
                            <figure>
                                <img src={img} alt="invailed" className="imgCard" />
                            </figure>
                            <h2 className="heading2">{heading}</h2>
                            <span>{date}</span>
                            <p className="para_letest">{para}</p>

                        </li>
                    })
                }
            </ul>
        </section>
    )
}