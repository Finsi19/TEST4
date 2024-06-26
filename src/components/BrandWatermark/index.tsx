'use client';

// import { LobeHub } from '@lobehub/ui/brand';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

const useStyles = createStyles(({ token, css }) => ({
  poweredBy: css`
    height: 20px;
    font-weight: bold;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      flex={'none'}
      gap={4}
      horizontal
      style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
      <span>Powered by </span>
      <span className={styles.poweredBy}>
        <a href="https://finsi.my.id" rel="noopener noreferrer" target="_blank">
          FinsiAI
        </a>
      </span>
    </Flexbox>
  );
});

export default BrandWatermark;
