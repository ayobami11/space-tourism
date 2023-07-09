export interface AppState {
    isMenuOpen: boolean,
}

export interface AppAction {
    type: 'OPEN_MENU' | 'CLOSE_MENU'
};

export interface AppContextType {
    state: AppState,
    dispatch: React.Dispatch<any>
}