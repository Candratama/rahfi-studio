import Link from "next/link";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import {useRouter} from 'next/router';

const DefaultFooter = ({extraClass}) => {
    const {asPath} = useRouter();

    return (
        <>
            {/* footer */}
            <footer className="mil-dark-bg">
                <div className="mi-invert-fix">
                    <div className="container pt-5">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-lg-6 mil-mb-60 mt-4">

                                <div
                                    className="mil-muted mil-logo mil-up mil-mb-10">{AppData.footer.logo.text}</div>
                                <div className="row flex-row justify-content-between mil-mb-10">
                                    <p className="mil-light-soft mil-up">Perum Korpri Klipang Jl. Klipang No.1 Blok
                                        W1
                                        B, RT.7/RW.3, Sendangmulyo, Kec. Tembalang, Kota Semarang, Jawa Tengah 50272
                                    </p>

                                </div>

                                <div className="mil-vert-between">
                                    <p className="mil-light-soft mil-up">{AppData.footer.copy}</p>
                                </div>

                            </div>
                            <div className="col-md-7 col-lg-6 mil-mb-60 mt-5">
                                <div className="row justify-content-end ">
                                    <div className="col-md-6 col-lg-7">
                                        {/*<Link href="https://wa.me/6289626677400"*/}
                                        {/*      className="mil-button mil-arrow-place mil-btn-space ">*/}
                                        {/*    <span>Contact Us</span>*/}
                                        {/*    <ArrowIcon/>*/}
                                        {/*</Link>*/}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}
        </>
    );
};
export default DefaultFooter;
