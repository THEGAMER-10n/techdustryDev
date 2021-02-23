//imports
require("others/statusEffects")
//functions
function lifetime(range,speed,ammo){
    ammo.lifetime = range*8/speed
};
//ammo
//kronos
const kronosTechium = extend(BasicBulletType, "kronosTechium")
kronosTechium.damage = 980
kronosTechium.speed = 5
lifetime(65,5,kronosTechium)

kronosTechium.effect = shortCircuit
kronos.effectDuration = 150
kronosTechium.pierce = true
kronosTechium.pierceCap = 5
kronosTechium.ammoMultiplier = 1

const kronosSurge = extend(BasicBulletType, "kronosSurge")
kronosSurge.damage = 950
kronosSurge.speed = 6
lifetime(65,6,kronosSurge)
kronosSurge.effects = StatusEffects.shocked
kronosSurge.pierce = false
kronosSurge.ammoMultiplier = 0.5

const kronosPTechium = extend(BasicBulletType, "kronosPTechium")
kronosPTechium.damage = 800
kronosPTechium.speed = 7
lifetime(65,7,kronosPTechium)

if(Math.random > 0.45){
    kronosPTechium.effect = kronosEffectDamage2
}else{
    kronosPTechium.effect = kronosEffectDamage1
}
kronosPTechium.effectDuration = 300
kronosPTechium.pierce = true
kronosPTechium.pierceCap = 5
kronosPTechium.ammoMultiplier = 0.5