import { ProxyState } from "../AppState.js";
import { upgradesService } from "../Services/UpgradesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawUpgrades() {
  let template = ''
  ProxyState.upgrades.forEach(u => template += u.Template)
  document.getElementById('upgrade-buttons').innerHTML = template
}

function _drawMultiplier() {
  let total = 0
  ProxyState.upgrades.forEach(u => {
    if (u.quantity > 0) {
      total += u.multiplier
    }
  })
  document.getElementById('multiplier').innerText = total.toString()
}

export class UpgradesController {
  constructor() {
    console.log('upgraezzzzz');
    ProxyState.on('cheese', _drawMultiplier)
    ProxyState.on('cheese', _drawUpgrades)
    _drawUpgrades()
    _drawMultiplier()
  }

  purchaseUpgrade(upgradeName) {
    try {
      let purchasedUpgrade = upgradesService.purchaseUpgrade(upgradeName)
      Pop.toast(`Congrats, i guess. You bought a ${purchasedUpgrade.name}`)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}