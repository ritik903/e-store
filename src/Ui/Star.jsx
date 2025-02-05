import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export const Star = ({ ratting }) => {
    const rattingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5

        return (<section className="color" key={index}>
            {
                ratting >= index + 1
                    ? <FaStar />
                    : ratting >= number
                        ? <FaStarHalfAlt />
                        : <AiOutlineStar />
            }
        </section>
        )
    })

    return <span className="star_flex">{rattingStar}</span>
}