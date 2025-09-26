/*
each emerald has a weight between 1 and 100 (int)
there is a set of N emeralds of different sizes
do not touch or buy odd numbered weights
largest total weights
*/

function getTupleEmeralds(emerald_count, emeralds) {
    let formatted_emeralds = [];
    for(let i=0; i<emerald_count;i++) {
        formatted_emeralds.push([emeralds[i], i]);
    }
    return formatted_emeralds;
}

function emerald_purchaser(emerald_count, emeralds) {
    let possible_sums = [];

    formatted_emeralds = getTupleEmeralds(emerald_count, emeralds);

    for(let i=0; i< emerald_count; i++) {
        let starting_emerald = formatted_emeralds[i];
        let good_emeralds = [];

        for(let l=0; i<emerald_count;l++) {
            target_emerald = formatted_emeralds[l];
            console.log(target_emerald[1]);
            
        }

        console.log(good_emeralds);
    }
}

let emeralds = [2, 3, 4, 5, 5, 6, 1, 2, 2, 2, 1, 8, 2]
let emerald_count = emeralds.length

emerald_purchaser(emerald_count, emeralds)