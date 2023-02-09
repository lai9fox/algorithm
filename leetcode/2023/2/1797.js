const AuthenticationManager = function(timeToLive) {
    this.timeToLive = timeToLive;
    this.map = new Map();
};

AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.map.set(tokenId, currentTime + this.timeToLive);
};

AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    if ((this.map.get(tokenId) || 0) > currentTime) {
        this.map.set(tokenId, currentTime + this.timeToLive);
    }
};

AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let res = 0;
    for (const time of this.map.values()) {
        if (time > currentTime) {
            res++;
        }
    }
    return res;
};

