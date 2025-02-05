import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"
export const Inccrement3 = ({ stock3, amount3, setAmount3, handledecrement, handleincrement }) => {
    const handledecrementAmmount = () => {
        setAmount3(handledecrement)
    }

    const handleincrementamount = () => {
        setAmount3(handleincrement)
    }

    return (
            <section className="container">
                <div className="d_flexiable">
                    <button className="button-85" role="button" onClick={handledecrementAmmount} ><FiMinusCircle /></button>
                    <span>{amount3}</span>
                <button className="button-85" role="button" onClick={handleincrementamount} disabled={stock3 <= amount3}><FiPlusCircle /></button>
                </div>
            </section>
        )
}