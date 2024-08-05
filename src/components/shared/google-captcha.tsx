import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = '6LdqwB8qAAAAAMvrk-JCMhu9iBZ24ZaCPnXcPcFR';

const GoogleCaptcha = ({
  onChange,
  recaptchaRef,
}: {
  onChange: (value: string | null) => void;
  recaptchaRef: any;
}) => {
  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={SITE_KEY}
      onChange={(v) => {
        onChange(v);
      }}
    />
  );
};

export default GoogleCaptcha;
