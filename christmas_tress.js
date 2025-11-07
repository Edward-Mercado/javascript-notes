/* 
    plantation of chritmas trees
    one row of N christmas trees, numbered 1 to N
    each has a height, H_i

    find patterns in the trees;
    create a program that will output the length of 

    the length of:
    the longest continguous group of trees strictly increasing in height
    the longest contiguous group of trees strictly decreasing in height
*/

function findTreePatterns(N, tree_heights) {
    let increaseRecord = 1;
    let decreaseRecord = 1;
    let increaseCurrent = 1;
    let decreaseCurrent = 1;

    for(let i=0;i<N;i++) {
        let currentTree = tree_heights[i];
        let nextTree = tree_heights[i+1];

        if(currentTree < nextTree) {
            increaseCurrent += 1;
        }
        else {
            if(increaseCurrent > increaseRecord) {
                increaseRecord = increaseCurrent;
            }
            increaseCurrent = 1;
        }
    }
    
    for(let i=0;i<N;i++) {
        let currentTree = tree_heights[i];
        let nextTree = tree_heights[i+1];

        if(currentTree > nextTree) {
            decreaseCurrent += 1;
        }
        else {
            if(decreaseCurrent > decreaseRecord) {
                decreaseRecord = decreaseCurrent;
            }
            decreaseCurrent = 1;
        }
    }
    console.log(increaseRecord);
    console.log(decreaseRecord);
}

findTreePatterns(10, [2, 1, 4, 6, 8, 2, 9, 5, 2, 3])