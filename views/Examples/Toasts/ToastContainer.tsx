import * as React from 'react';
import { omit } from 'lodash';
import { generateUID } from '../../../utils/generateUID';

export type ToastType = {
  id: string;
  message: string;
  createdAt: Date;
};

export const ToastContext = React.createContext({
  toasts: {} as { [key: string]: ToastType },
  toastsAsArray: [] as ToastType[],
  createToast: (msg: string) => null as any,
  clearToastById: (id: string) => null as any,
});

export const ToastContainer: React.FC = ({ children }) => {
  // Local state
  const [toasts, setToasts] = React.useState(
    {} as { [key: string]: ToastType },
  );
  const toastsAsArray = React.useMemo(
    () =>
      Object.keys(toasts)
        .map((key) => toasts[key])
        .sort((a, b) => {
          if (a.createdAt < b.createdAt) return -1;
          else if (a.createdAt > b.createdAt) return 1;
          else return 0;
        }),
    [toasts],
  );

  // Create a toast
  const createToast = React.useCallback((message: string) => {
    const id = generateUID();
    setToasts((toasts) => ({
      ...toasts,
      [id]: {
        id,
        message,
        createdAt: new Date(),
      },
    }));
  }, []);

  // Delete a toast
  const clearToastById = React.useCallback((id: string) => {
    setToasts((toasts) => omit(toasts, id));
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, toastsAsArray, createToast, clearToastById }}
    >
      {children}
    </ToastContext.Provider>
  );
};
