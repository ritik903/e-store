
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

export const Inccrement = ({ stock, amount, setAmount, handledecrement, handleincrement }) => {
    const handledecrementAmmount = () => {
        setAmount(handledecrement)  
    }

    const handleincrementamount = () => {
        setAmount(handleincrement)
    }


    return (
        <section className="container">
            <div className="d_flexiable">
                <button className="button-85" role="button" onClick={handledecrementAmmount} ><FiMinusCircle /></button>
                <span>{amount}</span>
                <button className="button-85" role="button" onClick={handleincrementamount} disabled={stock <= amount}><FiPlusCircle /></button>
            </div>
        </section>
    )
}