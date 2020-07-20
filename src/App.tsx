import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
