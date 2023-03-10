import { useRouter } from 'next/router';
// @ts-ignore
import { Calc } from 'pbginstallmentsdk';

const RebankCalculator = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Calc amount={2} env={router.query.env || 'prod'} code={router.query.code || ''} flag={router.query.flag || ''} />
    </div>
  );
};

export default RebankCalculator;
