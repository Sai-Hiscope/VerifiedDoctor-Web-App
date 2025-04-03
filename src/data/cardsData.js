import React, { useState, useEffect, useRef } from "react";
import CardiologistImg from "../assets/Images/commonImg/Cardiologist.png";
import GynaecologistImg from "../assets/Images/homeImg/gynaecologist.png";
import DentistImg from "../assets/Images/homeImg/Dentist.png";
import GastroenterologistImg from "../assets/Images/homeImg/Gastrologist.png";
import OrthopedistImg from "../assets/Images/homeImg/Orthopedist.png";
import DiagnosticsImg from "../assets/Images/homeImg/Diagnostics.png";
import DermatologistImg from "../assets/Images/homeImg/Dermatologist.png";
import GeneralPhysicianImg from "../assets/Images/homeImg/general physicians.png";
import NeurologistImg from "../assets/Images/homeImg/Neurologist.png";
import PhysiotherapistImg from "../assets/Images/homeImg/physiotherapist.png";
import PediatricianImg from "../assets/Images/homeImg/Pediatrician.png";
import PulmonologistImg from "../assets/Images/homeImg/pulmonologist.png";

const cardsData = [
  {
    title: "Cardiologist",
    img: CardiologistImg,
    description: "Expert Care for a Healthier Heart",
  },
  {
    title: "Gynaecologist",
    img: GynaecologistImg,
    description: "Women's health, expert care",
  },
  {
    title: "Dentist",
    img: DentistImg,
    description: "Strong Teeth,Bright Smiles",
  },
  {
    title: "Gastroenterologist",
    img: GastroenterologistImg,
    description: "Digestive health, better comfort",
  },
  {
    title: "Orthopedist",
    img: OrthopedistImg,
    description: "Stronger bones, better mobility",
  },
  {
    title: "Diagnostics",
    img: DiagnosticsImg,
    description: "Precise tests, accurate results.",
  },
  {
    title: "Dermatologist",
    img: DermatologistImg,
    description: "Healthy skin, glowing confidence",
  },
  {
    title: "General Physician",
    img: GeneralPhysicianImg,
    description: "Comprehensive care, healthy living",
  },
  {
    title: "Neurologist",
    img: NeurologistImg,
    description: "Your brain, our priority",
  },
  {
    title: "Physiotherapist",
    img: PhysiotherapistImg,
    description: "Restoring movement, improving life",
  },
  {
    title: "Pediatrician",
    img: PediatricianImg,
    description: "Caring for children's wellness",
  },
  {
    title: "Pulmonologist",
    img: PulmonologistImg,
    description: "Breathing easy, health restored",
  },
];

export default cardsData;
