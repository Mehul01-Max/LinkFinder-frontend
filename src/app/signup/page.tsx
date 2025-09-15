import React from "react";
import SignUp from "../../components/signup";
function page() {
  return (
    <div className="bg-amber-600 min-h-screen flex justify-center items-center">
      <div className="bg-white p-20 rounded-2xl">
        <SignUp />
      </div>
    </div>
  );
}

export default page;
