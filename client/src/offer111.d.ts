declare interface NodeModule {
  hot: {
    accept(path?: () => void, callback?: () => void): void;
  };
}
