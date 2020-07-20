import React, { createContext, useContext, useCallback } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextState {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextState>({} as ToastContextState);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addtoast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removetoast');
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextState {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider.');
  }

  return context;
}

export { ToastProvider, useToast };
