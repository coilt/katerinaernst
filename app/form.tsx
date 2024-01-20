"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

const steps = [
  { id: "Step1", name: "Personal Information" },
  { id: "Step2", name: "Address" },
  { id: "Step3", name: "Complete" },
];

export default function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const next = () => {
    setCurrentStep((step) => step + 1);
  };
}
