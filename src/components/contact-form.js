import React from "react";

const ContactForm = () => (
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <label className="block my-4" htmlFor="name">
      <h5 className="my-2">Name</h5>
      <input className="w-full text-sm p-2" id="name" name="name" type="text" placeholder="John Doe" />
    </label>
    <label className="block my-4" htmlFor="subject">
      <h5 className="my-2">Subject</h5>
      <input className="w-full text-sm p-2" id="subject" name="subject" type="text" placeholder="TISG Fan" />
    </label>
    <label className="block my-4" htmlFor="email">
      <h5 className="my-2">Email</h5>
      <input className="w-full text-sm p-2" id="email" name="email" type="email" placeholder="johndoe@example.com" />
    </label>
    <label className="block my-4" htmlFor="message">
      <h5 className="my-2">Message</h5>
      <textarea className="w-full text-sm p-2" id="message" name="message" rows="4" cols="45" placeholder="Place your message here"></textarea>
    </label>
    <input type="submit" name="Submit" className="bg-white text-black p-2 cursor-pointer" />
  </form>
);

export default ContactForm;
