import { useState } from "react";

export const Header = ()=> {

    const [isOpen, setOpen] = useState(false);

    const openMenu = () => {
        
        const body = document.querySelector('body');
        body.classList.toggle("overflow-y-hidden");

        if (body.classList.contains('overflow-y-hidden')) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }
        setOpen(!isOpen);
    }

    return (
        <header>
            <nav className="header bg-[#43CFF3] bg-opacity-30 z-[1000] px-4 py-3 absolute w-full lg:px-10">
                <div className="flex items-center justify-between relative max-w-[1450px] w-[90%] my-0 mx-auto">
                    <h1 className="z-10 flex-grow lg:flex-initial">
                        <a href="/" title="home" rel="home">
                            <img className="h-8 md:h-8 lg:h-16"  src="src/assets/images/colibri-logo.png" alt="Colibrí logo" title="Colibrí logo" />
                        </a>
                    </h1>
                    <ul className={ `header__menu fixed top-0 left-0 w-full h-full flex flex-col flex-wrap justify-center items-center bg-[#43CFF3] lg:bg-transparent lg:static lg:flex-row lg:justify-end ${isOpen ? "open" : "" }` }>
                        <li className="menu-item">
                            <a href="/" className="block uppercase mx-8 text-lg text-white font-bold my-2 cursor-pointer border-solid border-b-[3px] border-transparent hover:border-0 hover:border-b-4 hover:border-white hover:transition-transform hover:duration-100 hover:ease-in-out lg:text-sm lg:my-0">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="/" className="block uppercase mx-8 text-lg text-white font-bold my-2 cursor-pointer border-solid border-b-[3px] border-transparent hover:border-0 hover:border-b-4 hover:border-white hover:transition-transform hover:duration-100 hover:ease-in-out lg:text-sm lg:my-0">Link 2</a>
                        </li>
                        <li className="menu-item">
                            <a href="/" className="block uppercase mx-8 text-lg text-white font-bold my-2 cursor-pointer border-solid border-b-[3px] border-transparent hover:border-0 hover:border-b-4 hover:border-white hover:transition-transform hover:duration-100 hover:ease-in-out lg:text-sm lg:my-0">Link 2</a>
                        </li>
                    </ul>
                    <div onClick={openMenu} className={ `header__burguer flex flex-col justify-around cursor-pointer focus:outline-none z-10 left w-8 h-8 md:w-6 md:h-6 right-0 lg:hidden ${isOpen ? "open" : ""}` }>
                        <div className="w-full h-[0.125rem] bg-white transition-all duration-300 linear origin-[1px] rotate-0"></div>
                        <div className="w-full h-[0.125rem] bg-white transition-all duration-300 linear origin-[1px] translate-x-0"></div>
                        <div className="w-full h-[0.125rem] bg-white transition-all duration-300 linear origin-[1px] rotate-0"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}