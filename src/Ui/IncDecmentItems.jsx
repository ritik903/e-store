import { useState } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

export const IncDecmentItems = ({ stock }) => {
    const [amount, setAmount] = useState(1)

    const handledecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
        // setAmount(amount - 1)
    }

    const handleincrement = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
        // setAmount(amount + 1)
    }

    return (
        <section className="container">
            <div className="d_flexiable">
                <button onClick={handledecrement} className="button-85" role="button"><FiMinusCircle /></button>
                <span>{amount}</span>
                <button onClick={handleincrement} className="button-85" role="button"><FiPlusCircle /></button>
            </div>
        </section>
    )
}