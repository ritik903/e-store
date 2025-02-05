import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"
export const Inccrement2 = ({ stock, amount2, setAmount2, handledecrement, handleincrement }) => {
    const handledecrementAmmount = () => {
        setAmount2(handledecrement)
    }

    const handleincrementamount = () => {
        setAmount2(handleincrement)
    }

    return (
        <section className="container">
            <div className="d_flexiable">
                <button className="button-85" role="button" onClick={handledecrementAmmount} ><FiMinusCircle /></button>
                <span>{amount2}</span>
                <button className="button-85" role="button" onClick={handleincrementamount} disabled={stock <= amount2}><FiPlusCircle /></button>
            </div>
        </section>
    )
}