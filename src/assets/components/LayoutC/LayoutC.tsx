import { Link, Outlet, useLocation } from "react-router-dom"
import "./Layout.css"
import { FindC } from "../HeaderC/FindIC/FindC";
import {  useState } from "react"
import linksJ from "../../json/linksJ.json";
import { type LinkHeading } from "../interfaces/linkI";
import closePic from "../../pictures/close.png";
import menuBar from "../../pictures/menu.png";
import FooterC from "../FooterC/FooterC";

export default function LayoutC() {
    const [activeLink,setActiveLink] = useState<number>(0);
    const [click,setClick] = useState<boolean>(false);

    const [searchQuery,setSearchQuery] = useState<string>('');
    const location = useLocation(); 
    const isDetailsPage = location.pathname === '/detailsProduct';
  return (
    <>
    <nav className="navigation">
        <div className="logo-text">Arctic Commerce</div>
    <ul className='navigationLink'>
    {linksJ.links.map((link:LinkHeading) => (
        <Link onClick={() => setActiveLink(link.id)} className={`basicLink ${activeLink == link.id ? "activeLink" : ""}`} key={link.id}  to={link.path}>{link.name}</Link>
    ))}
    </ul>
    </nav>
     {/*navigation mobile */}
         <nav className="navigation-mobile">
        <div className="logo-text-mobile">Arctic Commerce</div>
        {click ? (
                <ul className='navigationLink-mobile'>
                    <img className="close" src={closePic} alt="closepic" onClick={() => setClick(false)}/>
                    <div className="p-[1rem] flex flex-col gap-[1rem] ">
    {linksJ.links.map((link:LinkHeading) => (
        <Link onClick={() => setActiveLink(link.id)} className={`basicLinkMobile ${activeLink == link.id ? "activeLinks" : ""}`} key={link.id}  to={link.path}>{link.name}</Link>
    ))}
                    </div>
    </ul>
        ):
        (
            <img className="menuBar" src={menuBar} alt="burger menu" onClick={() => setClick(true)} />
        )}

    </nav>
        {!isDetailsPage ? (
                <div className="search-container">
                    <FindC onSearch={setSearchQuery} />
                </div>
            ) : (
                <div className="spacer"></div> 
            )}
    <Outlet context = {searchQuery}/>
    
    <FooterC/>
    </>
    
  )
}
