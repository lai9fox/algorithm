/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
const minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
  let experienceTrain = 0;
  experience.forEach(e => {
    if (initialExperience <= e) {
      experienceTrain = e - initialExperience + 1;
      initialExperience = initialExperience + e + experienceTrain;
    } else {
      initialExperience += e;
    }
  });
  const energyCost = energy.reduce((cur, pre) => cur + pre, 0);
  return experienceTrain + (energyCost > initialEnergy ? energyCost - initialEnergy + 1 : 0);
};

minNumberOfHours(5,
3,
[1, 4, 3, 2],
[2, 6, 3, 1]);
