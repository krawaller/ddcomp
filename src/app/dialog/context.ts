import * as React from 'react';

export type OpenDialogContextType = {
  (title: string, content: React.ReactElement<any>): void
};

export const OpenDialogContext = React.createContext<OpenDialogContextType>(() => {});
