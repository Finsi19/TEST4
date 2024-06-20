import { GridShowcase } from '@lobehub/ui';
// import { LobeHub } from '@lobehub/ui/brand';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

import Follow from '@/features/Follow';

const COPYRIGHT = `© ${new Date().getFullYear()} Finsi AI, LLC`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flexbox
        align={'center'}
        height={'100%'}
        justify={'space-between'}
        padding={16}
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        <h1
          style={{
            alignSelf: 'flex-start',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '-4px',
          }}
        >
          FinsiAI
        </h1>
        <GridShowcase innerProps={{ gap: 24 }} style={{ maxWidth: 1024 }} width={'100%'}>
          {children}
        </GridShowcase>
        <Flexbox align={'center'} horizontal justify={'space-between'}>
          <span style={{ opacity: 0.5 }}>{COPYRIGHT}</span>
          <Follow />
        </Flexbox>
      </Flexbox>
      {/* ↓ cloud slot ↓ */}

      {/* ↑ cloud slot ↑ */}
    </>
  );
};

export default DesktopLayout;
