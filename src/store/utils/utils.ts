import { TMovieList, TShortMovieInfo } from "types/storeTypes";

function sortObjectAZ({ arrOfObj }: { arrOfObj: TMovieList }): TMovieList {
  return arrOfObj.sort((a: TShortMovieInfo, b: TShortMovieInfo): number => {
    const TitleA: string = a.Title.toUpperCase();
    const TitleB: string = b.Title.toUpperCase();
    if (TitleA < TitleB) {
      return -1;
    }
    if (TitleA > TitleB) {
      return 1;
    }
    return 0;
  });
}

function sortObjectZA({ arrOfObj }: { arrOfObj: TMovieList }): TMovieList {
  return arrOfObj.sort((a: TShortMovieInfo, b: TShortMovieInfo): number => {
    const TitleA: string = a.Title.toUpperCase();
    const TitleB: string = b.Title.toUpperCase();
    if (TitleA < TitleB) {
      return 1;
    }
    if (TitleA > TitleB) {
      return -1;
    }
    return 0;
  });
}

function sortObjectYearMin({ arrOfObj }: { arrOfObj: TMovieList }): TMovieList {
  return arrOfObj.sort(
    (a: TShortMovieInfo, b: TShortMovieInfo): number =>
      parseInt(a.Year) - parseInt(b.Year)
  );
}

function sortObjectYearMax({ arrOfObj }: { arrOfObj: TMovieList }): TMovieList {
  return arrOfObj.sort(
    (a: TShortMovieInfo, b: TShortMovieInfo): number =>
      parseInt(b.Year) - parseInt(a.Year)
  );
}

export { sortObjectAZ, sortObjectZA, sortObjectYearMin, sortObjectYearMax };
