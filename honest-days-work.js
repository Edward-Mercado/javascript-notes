// total paint = p
// infinite bottlecaps
// b = amount of paint per bottlecap
// d = amount that each bottle cap sells for

function honest_days_work(P, B, D) {
    let total_paint = P;
    let paint_per_bottlecap = B;
    let bottlecap_price = D;

    let bottlecaps_sold = Math.floor(total_paint/paint_per_bottlecap);
    let bottlecaps_profit = bottlecaps_sold*bottlecap_price;

    let leftover_paint = total_paint - (paint_per_bottlecap*bottlecaps_sold);

    return (bottlecaps_profit + leftover_paint);
}

console.log(honest_days_work(14, 3, 10));