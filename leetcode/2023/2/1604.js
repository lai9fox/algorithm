/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
const alertNames = function(keyName, keyTime) {
  const map = new Map();
  const names = [];
  const len = keyName.length;
  for (let i = 0; i < len; i++) {
    if (map.has(keyName[i])) {
      map.get(keyName[i]).push(keyTime[i].replace(':', ''));
    } else {
      map.set(keyName[i], [keyTime[i].replace(':', '')]);
    }
  }
  map.forEach((times, name) => {
    const len = times.length;
    // 打卡次数小于等于 2 跳过此次循环
    if (len <= 2) {
      return;
    }
    // 打卡时间升序排序
    times.sort((a, b) => a - b);
    for (let i = 2; i < len; i++) {
      if (times[i] - times[i - 2] <= 100) {
        names.push(name);
        break;
      }
    }
  });
  return names.sort();
};
