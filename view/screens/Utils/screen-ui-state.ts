export interface ScreenUiState<T> {
  readonly _type: "ScreenUiState";
}

export class SuccessState<T> implements ScreenUiState<T> {
  readonly _type: "ScreenUiState" = "ScreenUiState";
  constructor(public readonly data: T) {}
}

export class LoadingState implements ScreenUiState<never> {
  readonly _type: "ScreenUiState" = "ScreenUiState";
}

export class ErrorState implements ScreenUiState<never> {
  readonly _type: "ScreenUiState" = "ScreenUiState";
  constructor(public readonly message: string | null) {}
}
