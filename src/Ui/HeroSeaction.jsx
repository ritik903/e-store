import { useEffect, useState } from "react";
import { useGlobleContext } from "../components/CreateContaxt"
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/images/bartans.webp",
        "/images/clouths.jpg",
        "/images/iphone.jpg",
        "/images/shoes.jpg",
        "/images/laptop.jpg",
        "/images/hq720.jpg",
    ]
    useEffect(() => {
        // Automatically change the slide img
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(slideInterval); // Clear the interval image
    }, [currentIndex, images.length]);


    const { heading, para } = useGlobleContext()
    return (
        <section className="container">
            <div className="grid_two_columns">
                <div>
                    <h1 className="heading">{heading}</h1>
                    <p className="para_hero">{para}</p>
                    <NavLink to="/products"><button className="button-85" role="button">Buy-Item</button></NavLink>
                </div>
                <div className="slider-container">
                    <div
                        className="slider"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="slide">
                                <img src={image} alt={`Slide ${index}`} className="img_slide" />
                            </div>
                        ))}
                    </div>

                    {/* Optional: Navigation Dots */}
                    <div className="dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}
