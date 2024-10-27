import Image from "next/image";
import { DiFirefox } from "react-icons/di";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="text-white bg-black md:pt-10">
      <div className="md:grid flex flex-col items-center md:grid-cols-4 max-w-[1300px] mx-auto " role="contentinfo">
        <div className="md:pb-36">
        <nav aria-label="Redes sociales">
          <div className="flex gap-2 py-6 pt-20 pl-4">
            <a href="https://www.facebook.com/profile.php?id=100077437129801" className="hover:text-red-500" aria-label="Visítanos en Facebook">
              <FaFacebook style={{ fontSize: "20px" }} />
            </a>
            <a href="/" className="hover:text-red-500" aria-label="Visítanos en Instagram">
              <FaInstagram style={{ fontSize: "20px" }} />
            </a>
            <a href="https://dxnayacucho.vercel.app/" className="hover:text-red-500" aria-label="Página web de DXN Ayacucho">
              <DiFirefox style={{ fontSize: "20px" }} />
            </a>
          </div>
        </nav>
        </div>
        <section className="flex flex-col gap-6 text-base font-bold max-md:items-center max-md:py-10 shadow-white">
          <a href="/" className=" hover:text-red-600" aria-label="Ir a la página de inicio">
            Inicio
          </a>
          <a href="https://dxnayacucho.vercel.app/nosotros" className="hover:text-red-600" target="_blank" rel="noopener noreferrer" aria-label="Conoce sobre nosotros">
            Nosotros
          </a>
          <a href="https://dxnayacucho.vercel.app/afiliacion" className="hover:text-red-600" target="_blank" rel="noopener noreferrer" aria-label="Afíliate a DXN">
            Afiliarse
          </a>
          <a href="https://dxnayacucho.vercel.app/allproducts" className="hover:text-red-600" target="_blank" rel="noopener noreferrer" aria-label="Ver productos DXN para comprar">
            Comprar
          </a>
        </section>
        <address className="flex flex-col gap-6 text-base not-italic font-bold max-md:items-center shadow-white">
          <h1 className="text-2xl">Contactos</h1>
          <a href="tel:+51918237837" aria-label="Llama al teléfono de contacto">
            +51 918237837
          </a>
          <a href="mailto:u19217724@gmail.com" aria-label="Envíanos un correo">
            u19217724@gmail.com
          </a>
        </address>
        <a
          href="https://maps.app.goo.gl/pMEjv5gvMGv1io3w6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nuestra ubicación en Google Maps"
        >
          <div className="flex gap-1 max-md:py-10">
            <div>
              <Image
                src="/logodxn.webp"
                alt="Logotipo de DXN Ayacucho"
                width={100}
                height={100}
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p>Dejanos tu like</p>
              <p className="py-10 md:pt-36">All rights reserved © 2024</p>
            </div>
          </div>
        </a>
      </div>
      <div className="bg-[#FF482A] py-3">
        <div className="max-w-[1300px] flex max-md:flex-col justify-between text-center items-center mx-auto py-5">
          <p className="text-2xl font-semibold max-md:py-4 max-md:px-2">
            Hable con un asesor para mayor informacion{" "}
          </p>
          <a
            href="https://wa.me/51918237837"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contáctenos por WhatsApp"
          >
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-lg">
                Contáctenos
              </span>
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
