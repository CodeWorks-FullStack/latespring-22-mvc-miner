import { ProxyState } from "../AppState.js"

export class Upgrade {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.quantity = data.quantity
    this.multiplier = data.multiplier
  }

  get Template() {
    return /*html*/ `
      <div class="col-md-4">
        <button class="btn btn-success" ${this.price > ProxyState.cheese ? 'disabled' : ''} onclick="app.upgradesController.purchaseUpgrade('${this.name}')">${this.name}</button>
        <small>$${this.price} - Multiplier: ${this.multiplier}</small>
      </div>
    `
  }
}