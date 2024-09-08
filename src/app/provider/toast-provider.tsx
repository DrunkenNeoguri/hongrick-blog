"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type toastContextType = {
  toastMessage?: string;
  setToastMessage?: Dispatch<SetStateAction<string | undefined>>;
};

export const ToastContext = createContext<toastContextType>({});

export default function ToastProvider(props: PropsWithChildren) {
  const { children } = props;
  const [toastMessage, setToastMessage] = useState<string | undefined>();

  useEffect(() => {
    setTimeout(() => {
      setToastMessage(undefined);
    }, 3000);
  });

  return (
    <ToastContext.Provider value={{ toastMessage, setToastMessage }}>
      {children}
    </ToastContext.Provider>
  );
}
