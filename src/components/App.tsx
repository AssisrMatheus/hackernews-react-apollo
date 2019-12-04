import React from 'react';
import '../styles/App.scss';
import LinkList from './LinkList';
import CreateLink from './CreateLink';

const App: React.FC = () => {
  return (
    <>
      <LinkList />
      <CreateLink />
    </>
  );
};

export default App;
