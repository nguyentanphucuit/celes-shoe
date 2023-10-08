"use client";
import { useState } from "react";
import ToastContext from "./toastService";

export default function ToastProvider({ children }: any) {
  const [toasts, setToasts] = useState<any[]>([]);

  const open = (component: any, timeout = 5000) => {
    const id = Date.now() as any;

    setToasts((toasts: any) => [...toasts, { id, component } as any]);

    setTimeout(() => {
      close(id);
    }, timeout);
  };

  const close = (id: any) => {
    setToasts((toasts: any) => toasts.filter((toast: any) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ open, close } as any}>
      {children}
      <div className="space-y-2 fixed z-10 top-16 right-4">
        {toasts.map(({ id, component }) => (
          <div key={id} className="relative">
            <div
              id={id}
              className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert">
              {component}
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => close(id)}
                data-dismiss-target="#toast"
                aria-label="Close">
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
