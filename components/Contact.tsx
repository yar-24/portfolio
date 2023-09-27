'use client';

import React, { FormEvent } from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import emailjs from '@emailjs/browser';
import SectionWrapper from '@/hoc/SectionWrapper';
import { quote } from '@/public/assets';
import Image from 'next/image';
import { katamereka } from '@/constans';

const Contact = () => {
  const formRef = useRef<HTMLInputElement>();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_dxst8ax',
        'template_hlurkyk',
        {
          from_name: form.name,
          to_name: 'Akhyar',
          from_email: form.email,
          to_email: 'akhyar24.354@gmail.com',
          message: form.message,
        },
        'Ri7z9erjVgb7jSXaS'
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I'll get back to you as soon as possible.");

        setForm({
          name: '',
          email: '',
          message: '',
        });
      });
  };
  return (
    <div className="xl:mt-12 xl:flex-row mb-10 md:flex-col-reverse flex flex-col gap-5 overflow-hidden ">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className="font-poppins text-white font-bold md:text-[68px] sm:text-[58px] xs:text-[50px] text-[40px] ">
          Contact.
        </h3>
        <form
          // ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="md:grid grid-rows-3 grid-flow-col w-full"
      >
        {katamereka?.map((kata, idx) => (
          <>
            {kata.id == 1 ? (
              <div
                className="row-span-3 col-auto p-7"
                style={{ backgroundColor: `${kata.bgColor}` }}
                key={idx}
              >
                <Image src={quote} alt={kata.name} width={80} height={80} />
                <p>{kata.word}</p>
                <p className="mt-5 font-bold text-white">- {kata.name}</p>
                <p>{kata.position}</p>
              </div>
            ) : (
              <div
                className="row-span-1 col-span-1 p-7"
                style={{ backgroundColor: `${kata.bgColor}` }}
                key={idx}
              >
                <Image src={quote} alt={kata.name} width={80} height={80} />
                <p>{kata.word}</p>
                <p className="mt-5 font-bold text-white">- {kata.name}</p>
                <p>{kata.position}</p>
              </div>
            )}
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
