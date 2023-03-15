const maximalNetworkRank = function(n, roads) {
    const connect = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const degree = new Array(n).fill(0);
    for (const v of roads) {
        connect[v[0]][v[1]] = true;
        connect[v[1]][v[0]] = true;
        degree[v[0]]++;
        degree[v[1]]++;
    }

    let maxRank = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const rank = degree[i] + degree[j] - (connect[i][j] ? 1 : 0);
            maxRank = Math.max(maxRank, rank);
        }
    }
    return maxRank;
};

