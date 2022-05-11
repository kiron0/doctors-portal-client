import React from "react";
import doctor from "../../Assets/images/doctor.png";
import appointment from "../../Assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-170px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          earum ab cupiditate autem accusantium expedita sequi, temporibus, aut
          illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed
          maiores doloremque consequatur. Amet consequuntur quibusdam autem,
          quod maxime qui itaque quaerat.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
