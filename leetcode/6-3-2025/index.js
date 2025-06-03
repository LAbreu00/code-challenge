// my solution
var isIsomorphic = function (s, t) {
  const objST = {};
  const objTS = {};
  let flag = true;

  for (let i = 0; i < s.length; i++) {
    if (!objST[s[i]]) {
      objST[s[i]] = t[i];
    } else if (objST[s[i]]) {
      objST[s[i]] === t[i] ? 0 : (flag = false);
    }

    if (!objTS[t[i]]) {
      objTS[t[i]] = s[i];
    } else if (objTS[t[i]]) {
      objTS[t[i]] === s[i] ? 0 : (flag = false);
    }
  }

  return flag;
};
