import React, { useEffect, useState } from "react";
import Ads1 from "../Ads1";
import Footer from "../Footer";
import Header from "../Header";
import Partners from "../Partners";
import ScrollUp from "../ScrollUp";
import Testimonials from "../Testimonials";
const Layout = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        console.log('calling form header.......');
        window.onscroll = function () {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <>
            <Header scrolled={scrolled} />
            <section className="px-6 mt-6">
                <Ads1 />
            </section>

            <main>{children}</main>

            <section className="mt-12">
                <Testimonials />
            </section>

            <section className="mt-12">
                <Partners />
            </section>

            <section className="mt-12">
                <Footer />
            </section>

            <ScrollUp scrolled={scrolled} />
        </>
    );
};
export default Layout;