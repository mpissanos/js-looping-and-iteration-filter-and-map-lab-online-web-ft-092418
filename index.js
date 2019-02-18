function driversWithRevenueOver(array, num) {
  return array.filter(function(driverName) {
      return driverName.revenue > num;
  });
}

function driverNamesWithRevenueOver(array, num) {
  return driversWithRevenueOver(array, num).map(function(driverName) {
      return driverName.name;
  });
}
function exactMatch(array, attr) {
  return array.filter(function(name) {
      let matches = false;

      for (const key in attr) {
          matches = name[key] === attr[key];
      }

      return matches;
  });
}

function exactMatchToList(array, attr) {
  return exactMatch(array, attr).map(function(match) {
      return match.name;
  });
}