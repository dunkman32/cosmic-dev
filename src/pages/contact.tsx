import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@src/components/layout';
import { Container } from '@src/components/team/members/styled';
import { Input } from '@src/components/ui/input';
import { Textarea } from '@src/components/ui/textarea';
import { Button } from '@src/components/ui/button';
import GoogleCaptcha from '@src/components/shared/google-captcha';

const ContactUs = () => {
  const form = useRef();
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_qta621b',
        'template_t6vqt4r',
        // @ts-ignore
        form.current,
        {
          publicKey: 'R5GAmwsVgY_j_GplZ',
        },
      )
      .then(
        () => {
          setEnabled(false);
          if (recaptchaRef.current) {
            // @ts-ignore
            recaptchaRef.current.reset();
          }
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        },
      );
  };

  const onChange = (value: string | null) => {
    if (value) {
      setEnabled(true);
    }
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
          <GoogleCaptcha recaptchaRef={recaptchaRef} onChange={onChange} />

          <Button type="submit" disabled={!enabled || loading}>
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>
    </Container>
  );
};

ContactUs.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default ContactUs;
