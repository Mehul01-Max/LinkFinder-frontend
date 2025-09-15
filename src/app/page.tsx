import React from "react";
import SignIn from "../components/signin";
function page() {
  return (
    <div className="bg-amber-600 min-h-screen flex justify-center items-center">
      <div className="bg-white p-20 rounded-2xl">
        <SignIn />
      </div>
    </div>
  );
}

export default page;
