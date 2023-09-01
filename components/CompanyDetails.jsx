"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yearsOfProduction } from "@/constants";

import CustomFilter from "./CustomFilter";
 
 

function CompanyDetails() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [year, setYear] = useState(2022);

  return (
    <div className="bg-white">
       Company Details
    </div>
  );
}

export default CompanyDetails ;
