import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Button, Form, Input } from "antd";

function Contact() {
  const handleSubmit = (e) => {
    window.location.href = "https://wa.me/16475491720";
    console.log(e.target.value);
  };

  return (
    <div className="">
      <Navbar activePage="contact" />
      <div className="contact-main-content">
        <div className="bg-[#eaf6fa] text-5xl text-[#5b5b5b] p-8 text-center">
          Contact
        </div>
        <div className="bg-[#DDE1E5] text-xl text-[#5b5b5b] p-2 flex justify-center mb-4">
          <div className="md:w-[50%] w-[90%]">
            <Form layout="vertical" onFinish={handleSubmit} className="p-4">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
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
                rules={[{ required: true, message: "Please enter a subject!" }]}
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
