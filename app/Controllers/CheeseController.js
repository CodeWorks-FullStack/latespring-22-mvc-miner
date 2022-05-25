import { ProxyState } from "../AppState.js";
import { cheeseService } from "../Services/CheeseService.js";

function _drawCheese() {
  document.getElementById('cheese').innerText = ProxyState.cheese.toString()
}

export class CheeseController {
  constructor() {
    ProxyState.on('cheese', _drawCheese)
    _drawCheese()
  }
  mine() {
    cheeseService.mine()
  }
}