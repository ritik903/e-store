import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export const ColorData = ({ curProducts }) => {
    const { id, color } = curProducts
    const [coloring, setColor] = useState(color[0])
    return <div>
        <p className="flex">
            colors:
            {
                color.map((curColor, index) => {
                    // console.log(curColor);
                    return <button key={index}
                        className={coloring === curColor ? "btncolor active" : "btncolor"}
                        style={{ backgroundColor: curColor }}
                        onClick={() => setColor(curColor)}
                    >
                        {coloring === curColor ? <FaCheck className="checkIcon"/> : null}
                    </button>

                })
            }
        </p>
    </div >
}