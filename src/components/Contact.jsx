import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>
        <div className="flex justify-center">
          <div className="m-2">
            <p className="text-xl font-semibold">Email:</p>
            <p className="text-lg">yourname@example.com</p>
          </div>
          <div className="m-2">
            <p className="text-xl font-semibold">Phone:</p>
            <p className="text-lg">123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
