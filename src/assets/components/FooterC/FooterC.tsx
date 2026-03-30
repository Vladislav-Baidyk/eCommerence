import "./FooterC.css"
import footerPic from "../../pictures/footer.png"
import picsJson from "../../json/footerPic.json";
import { useLocation } from "react-router-dom";
const FooterC = () => {

    const location = useLocation(); 
    const isDetailsPage = location.pathname === '/detailsProduct';

  return (
    <div className="footer">
      {!isDetailsPage ? (
    <div className="footer-start">
      <div className="footer-pic-wrapper">
            <img className="footer-pic" src={footerPic} alt="photo-footer" />
            <div className="footer-pic-text">
              <div className="text-sky-700 text-[10px]">MANIFESTO V1.0</div>
              <div className="footer-pic-header">DESIGNED TO BE <br/><div className="text-sky-400">UNRIVALED.</div></div>
              <div className="text-sky-50 opacity-40">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>
            </div>
      </div>
    </div>
      ) : (
      <div></div>
      )}
    <div className="footer-end-container">
      <div className="footer-end-content">
        <div className="row">
          <div className="column">
            <div className="text-sky-50 text-[2rem]">
              Arctic Commerce
            </div>
            <div className="text-sky-50 opacity-40 text-[1rem] md:text-[1.5rem]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
          </div>
          <div className="grid grid-cols-1 gap-4 ml-4 md:ml-[10rem] gap-2">
            <div className="text-sky-400 ">ECOSYSTEM</div>
            <a className="no-underline text-sky-50 opacity-40" href="#">Mobile Devices</a>
            <a className="no-underline text-sky-50 opacity-40" href="#">Computing</a>
            <a className="no-underline text-sky-50 opacity-40" href="#">Audio Visual</a>
            <a className="no-underline text-sky-50 opacity-40" href="#">Accessories</a>
          </div>
          <div className="grid grid-cols-1 gap-4 ml-[2rem] gap-2">
            <div className="text-sky-400 ">ECOSYSTEM</div>
            <a className="no-underline text-sky-50 opacity-40" href="#">Mobile Devices</a>
            <a className="no-underline text-sky-50 opacity-40" href="#">Computing</a>
            <a className="no-underline text-sky-50 opacity-40" href="#">Audio Visual</a>
            <a className="no-underline text-sky-50 opacity-40" href="#">Accessories</a>
          </div>
        </div>
        <div className="flex flex-col w-[100%] gap-[1rem]">
          <div className="footer-line"></div>
          <div className="flex justify-between">
            <div className="text-sky-50 opacity-80 text-[0.6rem] md:text-[1rem]">@ 2024 ARCTIC EDITORIAL COMMERCE. ALL RIGHT RESERVED.</div>
            <div className="flex flex-row gap-2  ">
           {picsJson.pics.map((pic) => (
            <img key={pic.id} src={pic.url} alt="picture"  className="opacity-40 w-[2rem]"/>
          ))}
          </div>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default FooterC
