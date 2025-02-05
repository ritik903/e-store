
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        message: "",
    });

    // send email data 
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_4ghugo8",
                "template_l147tqi",
                form.current,
                "KSdW-Z6diLEAd-f5P"
            )
            .then(
                (result) => {
                    toast.success("Email Sent Successfully! 😊", {
                        position: "top-center",
                        autoClose: 3000, 
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(result.text);

                    setFormData({
                        name: "",
                        email: "",
                        address: "",
                        message: "",
                    });

                },
                (error) => {
                    toast.error("Failed to Send Email. 😔", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(error.text);
                }
            );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <section className="container">
            <h1 className="contactheasing">DIRECT CONTACT 😊</h1>
            <div className="grid_four_column_contact">
                <div className="centerText ">
                    <h1><FaPhoneVolume /></h1>
                    <h2 className="contacticon">PHONE</h2>
                    <a href="tel:9056659781"><p>Call us now!</p></a>
                    <a href="tel:9779409581"><p>Call us now!</p></a>
                </div>
                <div className="centerText">
                    <h1><FaLocationCrosshairs /></h1>
                    <h2 className="contacticon">ADDRESS</h2>
                    <p>ludhiana punjab india</p>
                    <p>nandpur sahnewal ludhiana</p>
                </div>
                <div className="centerText">
                    <h1><MdMarkEmailRead /></h1>
                    <h2 className="contacticon">EMAIL</h2>
                    <a href="mailto:ritikchoudhary90566@gmail.com"><p>ritikchoudhary90566@gmail.com</p></a>
                    <a href="mailto:ritikchoudhary5120@gmail.com"><p>ritikchoudhary5120@gmail.com</p></a>
                </div>
                <div className="centerText">
                    <h1><IoTimer /></h1>
                    <h2 className="contacticon">OPNING TIME</h2>
                    <p>24 hourse open</p>
                    <p>and fast delivery</p>
                </div>
            </div>
            <h1 className="contactheasing">CONTACT INFORMATION</h1>
            <form ref={form} onSubmit={sendEmail} className="formdiv">
                <div className="bgcontact">
                    <div className="flex_col_Form">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            placeholder="enter your name"
                            autoComplete="off"
                            required
                            value={formData.name}
                            onChange={handleChange} />
                    </div>

                    <div className="flex_col_Form">
                        <label>Email</label>
                        <input type="email"
                            name="email"
                            placeholder="example@123gmail.com"
                            autoComplete="off"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex_col_Form">
                        <label>Address</label>
                        <input type="text"
                            name="address"
                            placeholder="00-sec32-india"
                            autoComplete="off"
                            required
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex_col_Form">
                        <textarea name="message"
                            placeholder="send massage"
                            autoComplete="off"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button className="button-85" role="button">submit</button>
                </div>
            </form>
            <ToastContainer />
        </section>
    )
}