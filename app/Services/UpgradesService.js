import { ProxyState } from "../AppState.js"


class UpgradesService {
  purchaseUpgrade(upgradeName) {
    const foundUpgrade = ProxyState.upgrades.find(u => u.name == upgradeName)
    let cheese = ProxyState.cheese
    if (cheese > foundUpgrade.price) {
      cheese -= foundUpgrade.price
      foundUpgrade.quantity++
      cheese *= 3
      console.log(foundUpgrade);
      ProxyState.upgrades = ProxyState.upgrades
      return foundUpgrade
    } else {
      throw new Error("Bud.... you dont have the caysh")
    }
  }

}

export const upgradesService = new UpgradesService()