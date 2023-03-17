const answerQueries = function(nums, queries) {
    const n = nums.length, m = queries.length;
    nums.sort((a, b) => a - b);
    const f = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        f[i + 1] = f[i] + nums[i];
    }
    const answer = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        answer[i] = binarySearch(f, queries[i]) - 1;
    }
    return answer;
};

const  binarySearch = (f, target) => {
    let low = 1, high = f.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (f[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

