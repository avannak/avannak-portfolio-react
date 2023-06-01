interface PersistState {
  version: number;
  rehydrated: boolean;
}

export interface RootState {
  _persist: PersistState;
  parallax: {
    parallaxIsOn: boolean;
  };
}