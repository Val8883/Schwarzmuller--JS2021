export const monsterHealthBar = document.getElementById("monster-health");
export const playerHealthBar = document.getElementById("player-health");
export const bonusLifeEl = document.getElementById("bonus-life");

export const attackBtn = document.getElementById("attack-btn");
export const strongAttackBtn = document.getElementById("strong-attack-btn");
export const healBtn = document.getElementById("heal-btn");
export const logBtn = document.getElementById("log-btn");

export function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

export function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

export function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

export function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

export function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

export function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

export function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
