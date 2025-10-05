import template from "./card.html?raw"
import { BaseModel } from "../../../../models/base.model"

export class CardLogin extends BaseModel{
  

    constructor() {
        super("div", template)
    }

}
