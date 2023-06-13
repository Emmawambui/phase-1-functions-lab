function distanceFromHqInBlocks(number) {
    return Math.abs(number- 42)
}

function distanceFromHqInFeet(number) {
    return  Math.abs(number- 42) * 264
}
function distanceTravelledInFeet(blockstart, blockend) {
   return Math.abs (blockend -blockstart) * 264
 }
 function calculatesFarePrice(blockstart, blockend){
    let distance= distanceTravelledInFeet(blockstart, blockend)
    if (distance <= 400){
        return 0
    }else if ( distance>=400 && distance<=2000){
        return (distance - 400) * 0.02
    }else if ( distance>2000 && distance<=2500) {
        return 25
    }else {
        return 'cannot travel that far'
    } 

 }