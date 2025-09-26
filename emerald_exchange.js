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
        starting_emerald = formatted_emeralds[i];
        console.log(formatted_emeralds[i][1]);
        
    }
}

let emeralds = [2, 3, 4, 5, 5, 6, 1, 2, 2, 2, 1, 8, 2]
let emerald_count = emeralds.length

emerald_purchaser(emerald_count, emeralds)