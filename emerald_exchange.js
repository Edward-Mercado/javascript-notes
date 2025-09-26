function getTupleEmeralds(emerald_count, emeralds) {
    let formatted_emeralds = [];
    for(let i=0; i<emerald_count;i++) {
        formatted_emeralds.push([emeralds[i], i]);
    }
    return formatted_emeralds;
}

function getTotalForEmerald(good_emeralds) {
    let running_total = 0;
    for(let i=0; i<good_emeralds.length; i++) {
        running_total += good_emeralds[i][0];
        if(running_total % 2 !== 0) {
            return +running_total - good_emeralds[i][0];
        }
    }
    return +running_total;
}

function purchaseEmeralds(emerald_count, emeralds) {
    let possible_sums = [];

    let formatted_emeralds = getTupleEmeralds(emerald_count, emeralds);

    for(let i=0; i< emerald_count; i++) {
        let starting_emerald = formatted_emeralds[i];
        let good_emeralds = [];

        for(let j=0; j<(emerald_count); j++) {
            let current_emerald = formatted_emeralds[j];
            if (current_emerald[1] >= starting_emerald[1]) {
                good_emeralds.push(current_emerald);
            }
        }
        possible_sums.push(getTotalForEmerald(good_emeralds));
    }

    let max_sum = possible_sums[0];
    for(let k=0; k<possible_sums.length; k++) {
       
        if (max_sum < possible_sums[k]) {
            max_sum = possible_sums[k];
        }
    }
    
    let optimal_emerald = emeralds[possible_sums.indexOf(max_sum)];
    console.log(`Pick the emerald that weighs ${optimal_emerald} first. This will get you a sum of ${max_sum}.`)
}

let emeralds = [18, 7, 16, 10, 14, 17, 16, 11, 4, 15, 4, 16, 8, 8, 1];
let emerald_count = emeralds.length;

purchaseEmeralds(emerald_count, emeralds);