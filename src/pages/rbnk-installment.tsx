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
      <Calc
        amount={Number(router.query.amount) || 10000}
        env={router.query.env || 'prod'}
        merchantId={router.query.merchantId || 'veli'}
        callback={(month: number) => console.log(month)}
      />
    </div>
  );
};

export default RebankCalculator;
