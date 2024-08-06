import Link from "next/link";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useRouter } from 'next/router';

const DefaultFooter = ( { extraClass } ) => {
  const { asPath } = useRouter();
  
  return (
    <>
    {/* footer */}
    <footer className="mil-dark-bg">
        <div className="mi-invert-fix">
            <div className="container pt-5">
                <div className="row justify-content-between">
                    <div className="col-md-6 col-lg-6 mil-mb-60 mt-4">

                        <div className="mil-muted mil-logo mil-up mil-mb-10">{AppData.footer.logo.text}</div>
                        <div className="row flex-row justify-content-between">
                            <p className="mil-light-soft mil-up">Leehove 40, 2678 MC De Lier,
                                Netherlands <span
                                    className="mil-no-wrap">+31 174 705 811</span></p>

                        </div>

                        <div className="mil-vert-between">
                            <p className="mil-light-soft mil-up">{AppData.footer.copy}</p>
                        </div>

                    </div>
                    <div className="col-md-7 col-lg-6 mil-mb-60 mt-5">
                        <div className="row justify-content-end ">
                            <div className="col-md-6 col-lg-7">
                                <Link href="#" className="mil-button mil-arrow-place mil-btn-space ">
                                    <span>Contact Us</span>
                                    <ArrowIcon/>
                                </Link>
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
