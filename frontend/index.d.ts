export {};

declare global {
  interface Window {
    nearInitPromise: Promise<void>;
    accountId: string;
    walletConnection: {
      isSignedIn: () => boolean;
    };
  }
}