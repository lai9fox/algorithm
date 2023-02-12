const alphabetBoardPath = function(target) {
    let cx = 0, cy = 0;
    let res = '';
    for (let i = 0; i < target.length; i++) {
        const c = target[i];
        const nx = Math.floor((c.charCodeAt() - 'a'.charCodeAt()) / 5);
        const ny = Math.floor((c.charCodeAt() - 'a'.charCodeAt()) % 5);
        if (nx < cx) {
            for (let j = 0; j < cx - nx; j++) {
                res += 'U';
            }
        }
        if (ny < cy) {
            for (let j = 0; j < cy - ny; j++) {
                res += 'L';
            }
        }
        if (nx > cx) {
            for (let j = 0; j < nx - cx; j++) {
                res += 'D';
            }
        }
        if (ny > cy) {
            for (let j = 0; j < ny - cy; j++) {
                res += 'R';
            }
        }
        res += '!';
        cx = nx;
        cy = ny;
    }
    return res;
};

