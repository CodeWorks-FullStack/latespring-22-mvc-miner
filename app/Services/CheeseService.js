import { ProxyState } from "../AppState.js"


class CheeseService {
  mine() {
    ProxyState.cheese++
    ProxyState.upgrades.forEach(u => {
      if (u.quantity > 0) {
        ProxyState.cheese += (u.multiplier * u.quantity)
      }
    })
  }
}

export const cheeseService = new CheeseService()