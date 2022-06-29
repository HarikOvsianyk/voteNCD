export {};
declare module "*.png" {
  const value: any;
  export = value;
}

declare global {
  interface Window {
    nearInitPromise: Promise<void>;
    accountId: string;
    walletConnection: {
      isSignedIn: () => boolean;
    };
  }
}