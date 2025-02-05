import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const SalesProducts = () => {
    const saleEndTime = new Date();
    saleEndTime.setHours(saleEndTime.getHours() + 2);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(saleEndTime));

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = calculateTimeLeft(saleEndTime);
            setTimeLeft(remaining);

            if (remaining.total <= 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    function calculateTimeLeft(endTime) {
        const difference = new Date(endTime) - new Date();
        const total = Math.max(difference, 0);
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { total, days, hours, minutes, seconds };
    }


    return (
        <section className="container">
            <div className="grid_three_columns" >
                <div>
                    <figure>
                        <img src="/images/salesproducts.jpg" alt="invailed" className="imgsale" />
                    </figure>
                </div>
                <div className="flex_columns">
                    <div className="container_time">
                        <p className="subtitle">Hurry! Offer ends in:</p>
                        <div className="timer">
                            {timeLeft.total > 0 ? (
                                <>
                                    <span className="timeBlock">{timeLeft.days}d</span>
                                    <span className="timeBlock">{timeLeft.hours}h</span>
                                    <span className="timeBlock">{timeLeft.minutes}m</span>
                                    <span className="timeBlock">{timeLeft.seconds}s</span>
                                </>
                            ) : (
                                <span className="ended">Sale Ended!</span>
                            )}
                        </div>
                        {timeLeft.total > 0 ? (
                            <NavLink to="/searchProducts"><button className="button-85" role="button">Shop Now</button></NavLink>
                        ) : (
                            <button style={{ ...styles.button, backgroundColor: '#ccc' }} disabled>
                                Sale Ended
                            </button>
                        )}
                    </div>
                </div>
                <div>
                    <figure>
                        <img src="/images/sales3.webp" alt="invailed" className="imgsale" />
                    </figure>
                </div>
            </div>
        </section>
    )
}