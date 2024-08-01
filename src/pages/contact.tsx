import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Layout from '@src/components/layout';
import { Container } from '@src/components/team/members/styled';
import { Input } from '@src/components/ui/input';
import { Textarea } from '@src/components/ui/textarea';
import { Button } from '@src/components/ui/button';

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'service_qta621b',
    //     'template_t6vqt4r',
    //     // @ts-ignore
    //     form.current,
    //     {
    //       publicKey: 'R5GAmwsVgY_j_GplZ',
    //     },
    //   )
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  };

  return (
    <Container>
      <div className="flex w-full justify-center items-center mt-10">
        {/* @ts-ignore */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Input
              required
              className="text-black"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <Input
              required
              className="text-black"
              type="email"
              name="user_email"
              placeholder="Email"
            />
          </div>
          <Textarea
            required
            className="text-black"
            name="message"
            placeholder="Type your message here."
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </Container>
  );
};

ContactUs.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default ContactUs;
