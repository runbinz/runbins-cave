import { NextPage } from 'next';

const Contact: NextPage = () => {
    return (
        <section id="contact">
            <h2>reach me here!</h2>
            <section id="social media">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/runbinz/">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/runbin/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://x.com/telvri">X | Twitter</a>
                    </li>
                    {/* <li>
                        <p>Email</p>
                        <a></a>
                    </li> */}
                </ul>
            </section>
        </section>
    );
};

export default Contact;