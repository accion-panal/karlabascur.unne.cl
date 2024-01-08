import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/me_bascur.jpg'

// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-1">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col">
          {/* <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
            alt="about-img"
            className="rounded-full h-[200px] w-[200px] mt-10 mx-14 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[360px] xl:h-[360px] md:mt-24 xl:mt-20 xl:mx-2"
          /> */}
          <img
            src={aboutMeImg}
            alt="about-img"
            className="object-cover rounded-full h-[200px] w-[200px] mt-10 mx-14 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[360px] xl:h-[360px] md:mt-24 xl:mt-20 xl:mx-2"
          />
        </div>
        <div className="col-span-2 xl:col-span-1 ">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
            Bascur Propiedades es una empresa independiente de corretaje especializada en asesorar inversiones inmobiliarias y gestión de propiedades con una experiencia de 16 años en el rubro. Ofrecemos servicios integrales que incluyen ventas, arriendos, administración de propiedades, arriendos amoblados, espacios comerciales y más, abarcando todo Chile y el extranjero.
            <br />
            <br />
            Nuestro objetivo es facilitar la venta y arrendamiento de propiedades mediante una completa gestión publicitaria gratuita en diversos medios. Además, proporcionamos asesoría legal sin costo para ventas y arriendos. Con nuestra trayectoria y profesionalismo, garantizamos un servicio serio y eficiente. Confíe en nosotros para la gestión de su propiedad y experimente nuestro compromiso y experiencia en el sector inmobiliario.  
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
            Karla Bascur.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
            Fundador y Gerente General Bascur Propiedades.
          </p>
        </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
