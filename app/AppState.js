import { Upgrade } from "./Models/Upgrade.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  cheese = 0

  upgrades = [new Upgrade({ name: "Milk Shoes", price: 10, quantity: 0, multiplier: 2 }), new Upgrade({ name: "cheese GRATER", price: 25, quantity: 0, multiplier: 5 }), new Upgrade({ name: "Cheese U", price: 100, quantity: 0, multiplier: 50 })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
