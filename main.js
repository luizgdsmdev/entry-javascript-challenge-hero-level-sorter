


// Sorter using if(){} statements
function IfStatementHeroLevelSorter(name, xp){
    let heroName = name;
    let level;
    if(xp <= 1000){
        level = "Iron";
    }
    else if(xp >= 1001 && xp <= 2000){
        level = "Bronze";
    }
    else if(xp >= 2001 && xp <= 5000){
        level = "Silver";
    }
    else if(xp >= 5001 && xp <= 7000){
        level = "Gold";
    }
    else if(xp >= 7001 && xp <= 8000){
        level = "Platinum";
    }
    else if(xp >= 8001 && xp <= 9000){
        level = "Ascendant";
    }
    else if(xp >= 9001 && xp <= 10000){
        level = "Immortal";
    }
    else if(xp >= 10001){
        level = "Radiant";
    }

    return `The Hero named ${heroName} is at the level of ${level}.`
}

console.log(IfStatementHeroLevelSorter("Batman", 80000));