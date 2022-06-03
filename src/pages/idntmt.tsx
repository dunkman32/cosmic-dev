import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Identomat = () => {
  const router = useRouter();
  const { session } = router.query;
  const [disable, setDisable] = useState(false);

  const handleMessage = useCallback(
    (e: any) => {
      if (disable) return;
      if (e.origin !== 'https://widget.identomat.com') return;
      if (e.data !== 'DONE') return;
      setDisable(true);
    },
    [disable],
  );

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);

  if (session) {
    return (
      <iframe
        style={{
          width: '100vw',
          height: '99.4vh',
        }}
        title="identomat"
        src={`https://widget.identomat.com/?session_token=${session}`}
        allow="camera"
      />
    );
  }

  return <span>No session id</span>;
};

export default Identomat;
