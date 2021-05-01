import * as vendor from "./vendor.js";

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

function attackHandler() {
  const damage = vendor.dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  const palyerDamage = vendor.dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= palyerDamage;

  if (currentMonsterHealth <= 0) {
    alert("You won!");
    vendor.resetGame(chosenMaxLife);
    resetHealth();
  } else if (currentPlayerHealth <= 0) {
    alert("You lose");
    vendor.resetGame(chosenMaxLife);
    resetHealth();
  }
}

function resetHealth() {
  let currentMonsterHealth = chosenMaxLife;
  let currentPlayerHealth = chosenMaxLife;
}

vendor.adjustHealthBars(chosenMaxLife);
vendor.attackBtn.addEventListener("click", attackHandler);
