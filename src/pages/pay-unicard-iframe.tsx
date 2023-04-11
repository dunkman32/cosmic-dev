import { useRouter } from 'next/router';

type ENV = 'dev' | 'prod';

const genUrl = (env: ENV) => {
  switch (env) {
    case 'dev':
      return 'https://payunicard-preprod.vercel.app/ka';
    case 'prod':
      return 'https://payunicard.ge/ka';
    default:
      return 'https://payunicard-preprod.vercel.app/ka';
  }
};

const PayUnicard = () => {
  const router = useRouter();

  return (
    <>
      <p
        style={{
          width: '100%',
          height: '2rem',
          textAlign: 'center',
          padding: '5px',
        }}
      >
        {`URL = {{ ${genUrl(router.query.env as ENV)} }}`}
      </p>
      <iframe
        style={{
          width: '100vw',
          height: '90vh',
        }}
        title="unicard"
        src={genUrl(router.query.env as ENV)}
        allow="camera"
      />
      <p
        style={{
          width: '100%',
          height: '2rem',
          textAlign: 'center',
          padding: '5px',
        }}
      >
        NOZZA was here
      </p>
    </>
  );
};

export default PayUnicard;
