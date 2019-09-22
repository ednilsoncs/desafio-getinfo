// @flow

export type AuthState = {
    isAuth: boolean,
    isLoading: boolean,
}

export type Task = {
 id: String,
 task: String,
}

export type TarefasState = {
    isLoading: boolean,
    count: int,
    rows: Array<Task>,
}
export type State = {
    AUTH: AuthState,
    TAREFAS: TarefasState;
}

export type Store = {
    setState: Function,
    getState: Function
};
