import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { TbTruck } from "react-icons/tb";

export const WarntidIcons = () => {
    return (
        <div className="grid_four_columns">
            <div>
                <TbTruck className="icons" />
                <p className="para_icon">Cash on Delivery</p>
            </div>
            <div>
                <TbReplace className="icons" />
                <p className="para_icon">30 Days Replacement</p>
            </div>
            <div>
                <TbTruckDelivery className="icons" />
                <p className="para_icon">Free Delivered</p>
            </div>
            <div>
                <MdSecurity className="icons" />
                <p className="para_icon">2 Year warranty</p>
            </div>
        </div>
    )
}