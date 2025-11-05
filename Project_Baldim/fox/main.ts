import { BaseModel } from "../fox/core/src/module/utils/base.model"
import type{ IBaseModel } from "../fox/core/src/module/utils/interfaces/interface.baseModel"

export class Main implements IBaseModel {
    protected baseModel: BaseModel;


    constructor(element: string, template: string) {
        this.baseModel = new BaseModel(element, template);
    }


    addProps(props: { [key: string]: any; }) {
        return this.baseModel.addProps(props);

    }


    addComponente(componente: { [key: string]: any; }) {
        return this.baseModel.addComponente(componente);

    }


    getHTML(): any {
        return this.baseModel.getHTML()
    }

    montar(parent: HTMLElement): void {
        this.baseModel.montar(parent);
    }
}

