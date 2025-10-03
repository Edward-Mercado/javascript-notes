/*

country of voronoi
N villages
each village at an integer position on the road
each neighborhood hasa size which is the ifference between min and max
neighborhoods on the left and rightmost villages have maximum size
what is the smallest size of any neighborhood
neighborhood is all the points closer to that village than any other
*/

function getNeighborhood(village, before_village, after_village) {
  upper_bound = (village + after_village) / 2;
  lower_bound = (village + before_village) / 2;

  size = upper_bound - lower_bound;

  return size;
}

function roundToDecimal(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

function voronoi_villages(N, unsorted_villages) {
    let villages = unsorted_villages.sort((a, b) => a - b);
    chopped_villages = [];
    for(i=0; i<N;i++) {
      chopped_villages.push(villages[i]);
    }
    let removed_first = chopped_villages.shift();
    let removed_last = chopped_villages.pop();

    let neighborhood_sizes = [];
    for(i=0;i<N-2;i++) {
      neighborhood_sizes.push(getNeighborhood(chopped_villages[i], villages[i], villages[i+2]));
    }
    let minimum_value = neighborhood_sizes[0];
    for(i=0;i<neighborhood_sizes.length;i++) {
      if (minimum_value > neighborhood_sizes[i]) {
        minimum_value = neighborhood_sizes[i];
      }
    }

    console.log(roundToDecimal(minimum_value, 1));
}

const const_villages = [16, 0, 10, 4, 15, 100, 25, 22, 11, 12, 12.5, 23];
voronoi_villages(const_villages.length, const_villages);