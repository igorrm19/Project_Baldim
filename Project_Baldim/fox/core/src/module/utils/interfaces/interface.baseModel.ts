export interface IBaseModel {
    addProps(props: { [key: string]: any }): void;
    addComponente(componente: { [key: string]: any }): void;
    getHTML(): HTMLElement;
    montar?(parent: HTMLElement): void;
}