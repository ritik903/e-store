import { useEffect, useState } from "react";

export const ImgDetails = ({ img_url }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImage((prev) => (prev + 1) % img_url.length); // Looping images
        }, 3000); // Change image 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount img
    }, [img_url.length]);


    return <section className="grid_Two_columns">
        <div className="row_img">

            {img_url.map((image, index) => (

                <img
                    key={index}
                    src={image.img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${selectedImage === index ? "active img_min_size" : "img_min_size"}`}
                    onClick={() => setSelectedImage(index)}
                />
            ))}
        </div>
        <div>
            <figure>
                <img src={img_url[selectedImage].img} alt={`Image ${selectedImage + 1}`} className="singleImg" />
            </figure>
        </div>
    </section>
}