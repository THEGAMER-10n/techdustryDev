//imports
require("turrets/ammo");
//turret
const kronos = extend(ItemTurret,"kronos")

kronos.health = 4*540
kronos.size = 4
kronos.rotateSpeed = 1.5
kronos.range = 65*8 //65 blocks range
kronos.reloadTime = 120
kronos.recoil = 5
kronos.restitution = 1
kronos.inaccuracy = 0.01
kronos.maxAmmo = 10
kronos.ammoPerShot = 2

kronos.ammo(techium,kronosTechium,Items.surgeAlloy,kronosSurge,pTechium,kronosPTechium);