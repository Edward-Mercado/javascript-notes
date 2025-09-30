function occupy_parking(N, parking_spaces) {
    let double_occupied_spaces = 0;
    for(i=0;i<N;i++) {
        let first_row_value = parking_spaces[0][i];
        let second_row_value = parking_spaces[1][i];
        if(first_row_value === "C" && second_row_value === "C") {
            double_occupied_spaces += 1;
        }
    }
    console.log(double_occupied_spaces);
}

let parking_spaces = ["C..C.", ".CC.C"]
let N = parking_spaces[0].length;

occupy_parking(N, parking_spaces)