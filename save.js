var getTotalBuckets = (noOfPigs, levels)=>{
    let totalBuckets = 0
    let levelBuckets = 0
    for(let i=levels;i>1;i--){
        levelBuckets = noOfPigs*Math.pow(2,levels) 
        totalBuckets += levelBuckets
        console.log(`LEVEL ${i} = ${levelBuckets}`)
    }
    totalBuckets += maxBuckets(noOfPigs)
    console.log(`The total number of buckets that can be checked by ${noOfPigs} in ${levels} rounds = ${totalBuckets}`)
    return totalBuckets 
}
var getMaxCheck = (remainingPigs, remainingRounds)=>{
    return 
}

var maxBuckets = (pigs) =>{
    let totalBuckets = 1
    let previousTerm = 1
    for(let i=1, r=pigs; i<=pigs;i++,r--){
        previousTerm *= r/i
        totalBuckets += previousTerm
    }
    return totalBuckets
}

// var poorPigs = (buckets, minutesToDie, minutesToTest) => {
    // let noOfPigs = 0
    // let bucketRange = maxBuckets(noOfPigs)
    // console.log(`initial number of bucket range = ${bucketRange}`)
    // while(buckets > bucketRange){
    //     console.log(`\ncurrent no of pigs = ${noOfPigs} and buckets that it can combinely detect = ${bucketRange}`)
    //     bucketRange = maxBuckets(++noOfPigs)
    // }
    // return noOfPigs

// };

    //correct solution for when rounds are 1 
    // let noOfPigs = Math.log(buckets)/Math.log(2)
    // return Number.isInteger(noOfPigs)? noOfPigs : Math.floor(noOfPigs)+1