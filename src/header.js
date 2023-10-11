import React, { useState, useRef, useEffect } from 'react';
import logo from "./img/Logo.png"
function Header() {

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
        } else {
        setSticky({ isSticky: false, offset: 0 });
        }
    };

    // add/remove scroll event listener
    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
        window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);
    return (
        
      <header className="header-wrapper w-full p-[25px] fixed  left-0 right-0 top-0 z-[999]"  ref={headerRef}>
        <div className={`w-full h-full absolute top-0 left-0 bottom-0 right-0 z-[-1] transition ease-in-out delay-100 ${sticky.isSticky ? "bg-[#00000075]" : "bg-transparent"}`}></div>
        <div className='container mx-auto'>
        <div className="flex justify-between items-center">
        <div className="logo-wrapper">
           <img src={logo} />
        </div>
        <div className="menu-wrapper flex items-center">
            <ul className="nav-menu flex mr-[35px]">
                    <a href="" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">Home</a>
                <li className="nav-menu-item">
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">Artwork</a>
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">Roadmap</a>
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">FAQ</a>
                </li>
                <li className="nav-menu-item">
                    <a href="" className="nav-menu-link text-white  transition ease-in-out delay-100 hover:text-[#91ff03]">Team</a>
                </li>
            </ul>  
            <a className="cust-btn px-[30px] py-[13px] border rounded-[6px] border-[#91ff03] text-[#91ff03]">View in Rarebality</a>
        </div>
        </div>
        </div>
      </header>
    );
  }
  
  export default Header;