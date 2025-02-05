import { useEffect, useState } from "react";
import category from "../api/extra.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLaptopCode } from "react-icons/fa";
import { MdToys } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBoxes } from "react-icons/fa";
import { LuBookKey } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { PiDeviceTabletSpeakerBold } from "react-icons/pi";
import { GiDeathJuice } from "react-icons/gi";
import { FaToolbox } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { FaDrumSteelpan } from "react-icons/fa6";
import { LuWashingMachine } from "react-icons/lu";
import { GiLargeDress } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";


const AllCatogary = () => {
    const [data, setData] = useState([])
    const icons = {
        FaLaptopCode: < FaLaptopCode />,
        MdToys: < MdToys />,
        CiMobile3: < CiMobile3 />,
        CgSmartHomeRefrigerator: < CgSmartHomeRefrigerator />,
        PiTelevisionSimpleFill: < PiTelevisionSimpleFill />,
        FaBoxes: < FaBoxes />,
        LuBookKey: < LuBookKey />,
        FaComputer: < FaComputer />,
        PiDeviceTabletSpeakerBold: < PiDeviceTabletSpeakerBold />,
        GiDeathJuice: <GiDeathJuice />,
        FaToolbox: <FaToolbox />,
        GiSchoolBag: < GiSchoolBag />,
        FaDrumSteelpan: <FaDrumSteelpan />,
        LuWashingMachine: < LuWashingMachine />,
        GiLargeDress: < GiLargeDress />,
        GiConverseShoe: < GiConverseShoe />,

    }

    const settings = {
        dots: false, // Disable navigation dots
        infinite: true, // Enable infinite scrolling
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 5, // Show 5 items at once
        slidesToScroll: 1, // Increment by one item
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000, // Time in ms between slides
        arrows: false, // Hide navigation arrows
        responsive: [
            {
                breakpoint: 1024, // For tablets
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500, // For mobile
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For small devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    useEffect(() => {
        setData(category)
    }, [])
    return (
        <section className="container">
            <div className="hover">
                <h2 className="mt">All Category Choose</h2>
                <hr className="hr_category" />
                <Slider {...settings}>
                    {data.map((item) => (

                        <div key={item.id} className="border">
                            <div className="flex_col">
                                <div>
                                    <h1>{icons[item.icon]}</h1>
                                </div>
                                <div>
                                    <h1 className="all_name">{item.name}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <hr className="hr_category" />
            </div>
        </section>
    )
}
export default AllCatogary