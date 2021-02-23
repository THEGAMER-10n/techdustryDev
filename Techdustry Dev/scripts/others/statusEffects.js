//functions
randSpeed = Math.random()*2
randHealth = Math.random()*5
chooser = Math.random()
//imports

//effects
//shortCircuit
const shortCircuit1 = extend(StatusEffect, "shortCircuit1")
shortCircuit1.damage = 25
shortCircuit1.speedMultiplier = randSpeed
shortCircuit1.healthMuliplier = randHealth

const shortCircuit2 = extend(StatusEffect, "shortCircuit2")
shortCircuit2.damage = 600

if(chooser > 0.95){
    let shortCircuit = shortCircuit2
}else{
    let shortCircuit = shortCircuit1
}
//kronos special
const kronosEffectSpeed = extend(StatusEffect, "kronosEffectSpeed",{
    update(unit,time){
        this.speedMultiplier = unit.healthf()*0.35
    }
})
const kronosEffectDamage1 = extend(StatusEffect, "kronosEffectDamage",{
    update(unit,time){
        this.damage = unit.health*0.25
        if(time>600){
            this.damage = unit.health*60
        }
    }
})
const kronosEffectDamage2 = extend(StatusEffect, "kronosEffectDamage2", {
    update(unit,time){
        this.damage = unit.health*0.15
    }
})