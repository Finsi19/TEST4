import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · Finsi AI` : 'Finsi AI';
  }, [title]);

  return null;
});

export default PageTitle;
