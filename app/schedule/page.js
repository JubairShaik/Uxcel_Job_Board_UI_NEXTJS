import JobDetails from "@/components/JobDetails";
import JobrightDesc from "@/components/JobrightDesc";
import Relatedjobs from "@/components/Relatedjobs";
import React from "react";

const page = () => {
  return (
    <main className="flex">
      <JobDetails />
      <Relatedjobs />
    </main>
  );
};

export default page;
