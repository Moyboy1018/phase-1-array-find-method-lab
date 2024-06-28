// code your solution here
function superbowlWin(recordArray){
    const result = recordArray.find(function(record){
        return record.result === "W"
    })
    if(result !== undefined){
        return result.year
    }
    return undefined
}