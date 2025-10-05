import template from "./text.html?raw"
import { BaseModel } from "../../models/base.model"

export class TextHTML extends BaseModel{

  constructor(){
    super("div", template)
  }

}