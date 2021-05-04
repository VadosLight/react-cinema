function sortObjectAZ({ obj }) {
  return obj.sort((a, b) => {
    var TitleA = a.Title.toUpperCase();
    var TitleB = b.Title.toUpperCase();
    if (TitleA < TitleB) {
      return -1;
    }
    if (TitleA > TitleB) {
      return 1;
    }

    return 0;
  });
}

function sortObjectZA({ obj }) {
  return obj.sort((a, b) => {
    var TitleA = a.Title.toUpperCase();
    var TitleB = b.Title.toUpperCase();
    if (TitleA < TitleB) {
      return 1;
    }
    if (TitleA > TitleB) {
      return -1;
    }

    return 0;
  });
}

function sortObjectYearMin({ obj }) {
  return obj.sort((a, b) => a.Year - b.Year);
}

function sortObjectYearMax({ obj }) {
  return obj.sort((a, b) => b.Year - a.Year);
}

export { sortObjectAZ, sortObjectZA, sortObjectYearMin, sortObjectYearMax };
