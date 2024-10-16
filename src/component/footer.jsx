import React from "react";
import { Footer, FooterBrand, FooterLink } from "flowbite-react";
function FooterComp(){
    return(
        <>
        <Footer container className="bg-sky-300 font-Poppins">
            <div className="w-full">
                <div className="w-full justify-between sm:flex md:flex ">
                    <div className="max-sm:w-full max-sm:flex max-sm:justify-center mb-3">
                        {/* <FooterBrand href="#" src={require(`../assets/other/`+'Logo.png')}/> */}
                        <a href="#">
                        <img src={require(`../assets/other/`+'Logo.png')} className="w-64 h-24"/>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
                        <div className="text-left ">
                            <Footer.Title title="About" className="text-black"/>
                            <Footer.LinkGroup col>
                                <FooterLink href="#" className="text-black/70">Sega</FooterLink>
                                <FooterLink href="#" className="text-black/70">Crypton</FooterLink> 
                                <FooterLink href="https://piapro.net/intl/en.html" className="text-black/70">Piapro</FooterLink>
                            </Footer.LinkGroup>
                        </div>
                        <div className="text-left">
                            <Footer.Title title="Follow Me" className="text-black"/>
                            <Footer.LinkGroup col>
                                <FooterLink href="https://github.com/MuniMunii/MuniSekai" className="text-black/70">Repo Web</FooterLink>
                                <FooterLink href="https://github.com/MuniMunii" className="text-black/70">Github</FooterLink>
                            </Footer.LinkGroup>
                        </div>
                        <div className="text-left">
                            <Footer.Title title="Legal" className="text-black"/>
                            <Footer.LinkGroup col>
                                <FooterLink href="#" className="text-black/70">Privacy & Policy</FooterLink>
                                <FooterLink href="#" className="text-black/70">Terms & Conditions</FooterLink>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="w-full flex justify-around flex-wrap">
                    <Footer.Copyright href="#" by="Sega" year={2024} className="text-black/70"/>
                    <Footer.Copyright href="#" by="Crypton" year={2024} className="text-black/70"/>
                    <Footer.Copyright href="#" by="Piapro" year={2024} className="text-black/70"/>
                    <div className="mt-4 sm:mt-0 text-sm text-black/70">
                        <p>I Do not own the image/video or the information, I'am using for personal use and non-profit use.</p>
                    </div>
                </div>
            </div>
        </Footer>
        </>
    )
}
export default FooterComp