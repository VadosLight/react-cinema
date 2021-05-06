type ObjectHasTitle = {
  readonly Title: string;
};

type ObjectHasYear = {
  readonly Year: string;
};

function sortObjectAZ({ arrOfObj }: { arrOfObj: ObjectHasTitle[] }): object[] {
  return arrOfObj.sort((a: ObjectHasTitle, b: ObjectHasTitle) => {
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

function sortObjectZA({ arrOfObj }: { arrOfObj: ObjectHasTitle[] }): object[] {
  return arrOfObj.sort((a: ObjectHasTitle, b: ObjectHasTitle) => {
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

function sortObjectYearMin({ arrOfObj }: { arrOfObj: ObjectHasYear[] }) {
  return arrOfObj.sort(
    (a: ObjectHasYear, b: ObjectHasYear) => parseInt(a.Year) - parseInt(b.Year)
  );
}

function sortObjectYearMax({ arrOfObj }: { arrOfObj: ObjectHasYear[] }) {
  return arrOfObj.sort(
    (a: ObjectHasYear, b: ObjectHasYear) => parseInt(b.Year) - parseInt(a.Year)
  );
}

export { sortObjectAZ, sortObjectZA, sortObjectYearMin, sortObjectYearMax };
