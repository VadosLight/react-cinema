function sortObjectAZ({ arrOfObj }) {
  return arrOfObj.sort((a, b) => {
    const TitleA = a.Title.toUpperCase();
    const TitleB = b.Title.toUpperCase();
    if (TitleA < TitleB) {
      return -1;
    }
    if (TitleA > TitleB) {
      return 1;
    }

    return 0;
  });
}

function sortObjectZA({ arrOfObj }) {
  return arrOfObj.sort((a, b) => {
    const TitleA = a.Title.toUpperCase();
    const TitleB = b.Title.toUpperCase();
    if (TitleA < TitleB) {
      return 1;
    }
    if (TitleA > TitleB) {
      return -1;
    }

    return 0;
  });
}

function sortObjectYearMin({ arrOfObj }) {
  return arrOfObj.sort((a, b) => a.Year.slice(0, 4) - b.Year.slice(0, 4));
}

function sortObjectYearMax({ arrOfObj }) {
  return arrOfObj.sort((a, b) => b.Year.slice(0, 4) - a.Year.slice(0, 4));
}

export { sortObjectAZ, sortObjectZA, sortObjectYearMin, sortObjectYearMax };
