const groupAnagrams = (arrOfStr) => {
  const anagramGroups = {};
  function sortString(str) {
    return str.split("").sort().join("");
  }

  for (let i = 0; i < arrOfStr.length; i++) {
    const sortedWord = sortString(arrOfStr[i]);

    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [];
    }
    anagramGroups[sortedWord].push(arrOfStr[i]);
  }

  const result = [];
  for (let key in anagramGroups) {
    result.push(anagramGroups[key]);
  }

  return result;
};

console.log(
  groupAnagrams(["cook", "save", "taste", "aves", "vase", "state", "map"])
);
