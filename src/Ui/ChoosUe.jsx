import data from "../api/choos.json"
export const ChoosUe = () => {
    return (
        <section className="container">
            <h1 className="mt">Why People Choose Us</h1>
            <hr className="hr_category" />
            <ul className="grid_five" >
                {
                    data.map((curElm) => {
                        const { id, name, para, icon } = curElm
                        return (
                            <li key={id} className="flex_col" >
                                <figure>
                                    <img src={icon} alt={name} className="icimg"/>
                                </figure>
                                <div className="info">
                                    <div><p className="chooseh">{name}</p></div>
                                    <div><p className="chooseh">{para}</p></div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <hr className="hr_category" />
        </section>
    )
}