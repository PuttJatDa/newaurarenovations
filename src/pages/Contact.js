import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Button, Form, Input } from "antd";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href="https://wa.me/16475491720";
    
    console.log(e.target.value);
    
  };
  return (
    <div className="">
      <Navbar activePage="contact" />
      <div className="contact-main-content">
        <div className="bg-[#eaf6fa] text-5xl text-[#5b5b5b] p-8 text-center">
          Contact
        </div>
        <div className="bg-[#DDE1E5] text-xl text-[#5b5b5b] p-2 flex md:flex-row flex-col  gap-6 mb-4">
          <div className="md:w-[80%] w-[90%] flex sm:flex-row flex-col justify-center gap-6 m-auto">
            <div className="md:w-[53%] w-full">
              <Form layout="vertical" onFinish={handleSubmit} className=" p-4">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>

                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    { required: true, message: "Please enter a subject!" },
                  ]}
                >
                  <Input placeholder="Subject" />
                </Form.Item>

                <Form.Item label="Message" name="message">
                  <Input.TextArea rows={4} placeholder="Your Message" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
            /*
            <div className="md:w-[43%] w-full flex items-center">
            <div className=" w-full rounded-lg shadow-md overflow-hidden">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.436509523495!2d-79.74368462429326!3d43.71359699757696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3db679101ae3%3A0xe7e0ea6394c5c171!2s33%20Palm%20Tree%20Rd%2C%20Brampton%2C%20ON%20L6V%204N5%2C%20Canada!5e0!3m2!1sen!2sin!4v1702235512340!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
              
            </div>
            </div>
            */
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
