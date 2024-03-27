const ATTACK_VALUE = 10;
const MONSTER_ATTACK = 15;
const STRONG_ATTACK = 17;
const HEAL_VALUE = 8;

// LOG EVENTS
const P_ATTACK = 'PLAYER ATTACK';
const P_ATTACK_S = 'STRONG ATTACK';
const M_ATTACK = 'MONSTER ATTACK';
const P_HEAL = 'PLAYER HEAL';
const GAME_OVER = 'GAME OVER';

let battleLog = [];
let chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let lastLoggedEntry;


// Try n Catch examples
function getMaxLife() {
    const entererdVal = prompt('MAXIMUM HEALTH: ');
    parsedVal = parseInt(entererdVal);
    if (isNaN(parsedVal) || parsedVal <= 0) {
        throw { message: "invalid input" };
    }
    return parsedVal;
}
try {
    chosenMaxLife = getMaxLife();
} catch(error){
    console.error(error);
    chosenMaxLife = 100;
}
 




adjustHealthBars(chosenMaxLife);
function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry;

    switch (event) {
        case P_ATTACK:
            logEntry = {
                event: event,
                value: value,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case P_ATTACK_S:
            logEntry = {
                event: event,
                value: value,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case M_ATTACK:
            logEntry = {
                event: event,
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case P_HEAL:
            logEntry = {
                event: event,
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case GAME_OVER:
            logEntry = {
                event: event,
                value: value,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        default:
            logEntry = {};
    }

    // {
    //     if (event === P_ATTACK) {
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             target: 'MONSTER',
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //     }
    //     else if (event === P_ATTACK_S) {
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             target: 'MONSTER',
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //         battleLog.push(logEntry);
    //     }
    //     else if (event === M_ATTACK) {
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             target: 'PLAYER',
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //     }
    //     else if (event === P_HEAL) {
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             target: 'PLAYER',
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //     }
    //     else if (event === GAME_OVER) {
    //         logEntry = {
    //             event: event,
    //             value: value,
    //             finalMonsterHealth: monsterHealth,
    //             finalPlayerHealth: playerHealth
    //         };
    //     }
    // }
    battleLog.push(logEntry);
}
function endRound() {
    // check for extra life
    // saving the last health before losing the first time
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -= playerDamage;
    writeToLog(M_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        alert('EXTRA LIFE');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("you won!");
        writeToLog(GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("u lost!");
        writeToLog(GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("DRAW!");
        writeToLog(GAME_OVER, 'DRAW', currentMonsterHealth, currentPlayerHealth);
        reset();
    }

}

function attackMonster(chosenMode) {
    let maxDamage;
    let logEvent;
    if (chosenMode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
        logEvent = P_ATTACK;
    } else if (chosenMode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK;
        logEvent = P_ATTACK_S;
    }
    // updating monster health bar and value
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

    // monster attacks
    endRound();
}


{// function attackHandler() {
    //     attackMonster('ATTACK');
    // }

    // function strongAttack(){
    //     attackMonster('STRONG_ATTACK');
    // }
}



attackBtn.addEventListener("click", attackHandler = () => attackMonster('ATTACK'));
strongAttackBtn.addEventListener("click", strongAttackHandler = () => attackMonster('STRONG_ATTACK'));
healBtn.addEventListener("click", healPlayer = () => {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth;
        alert('CANT HEAL HIGHER');
    }
    else {
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(P_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();
})
logBtn.addEventListener("click", printLogHandler = () => {
    for (let i = 0; i < 3; i++) {
        console.log('--------\n');
    }
    // for of loop for iterable array.
    let i = 0;
    for (const el of battleLog) {
        if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
            console.log(`#${i}`);
            for (const key in el) {
                // console.log(key);
                console.log(`${key} : ${el[key]}`);
            }
            lastLoggedEntry = i;
        }
        i++;
    }
});