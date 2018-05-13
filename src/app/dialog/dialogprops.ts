export type DialogProps = {
  isOpen: boolean,
  content: React.ReactElement<any>,
  close: () => void,
  headline: string,
};
