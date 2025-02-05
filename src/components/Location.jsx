import { Form } from "react-router-dom"

export const Location = () => {
    return (
        <section className="container">
            <div className="grid__two_column">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27404.5627836154!2d75.94887458071838!3d30.842703019974536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39107614872ab7b5%3A0xaf8165cce2800588!2sSahnewal%2C%20Punjab!5e0!3m2!1sen!2sin!4v1736448041392!5m2!1sen!2sin"
                        style={{ width: "100%", height: "450px", border: 0, marginTop:"8rem"}}
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div>
                    <Form method="POST" action="/contact" className="formdiv">
                        <div className="bgcontact">
                            <div className="flex_col_Form">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="enter your name" autoComplete="off" required />
                            </div>

                            <div className="flex_col_Form">
                                <label>Email</label>
                                <input type="email" name="name" placeholder="example@123gmail.com" autoComplete="off" required />
                            </div>

                            <div className="flex_col_Form">
                                <label>Address</label>
                                <input type="text" name="name" placeholder="00-sec32-india" autoComplete="off" required />
                            </div>

                            <div className="flex_col_Form">
                                <textarea name="textarea" placeholder="send massage" autoComplete="off" required></textarea>
                            </div>

                            <button className="button-85" role="button">submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}