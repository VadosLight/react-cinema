import { put, call, select } from "redux-saga/effects";
import { openConst, privateConst } from "constants/index";
import * as T from "types/storeTypes";
import * as ac from "store/actionCreators";
import * as sortBy from "store/utils/utils";

export function* fetchListMoviesByTitle(title: string) {
  try {
    yield put(ac.setSearchTitle({ title }));
    const data: any = yield call(() => {
      return fetch(
        `${openConst.BASE_URL}?apikey=${privateConst.API_KEY}&s=${title}`
      ).then((res) => res.json());
    });
    yield put(ac.setListMovies({ movieList: data.Search }));
  } catch (err) {
    console.log(err);
    yield err;
  }
}

export function* resetPageCounter() {
  yield put(ac.resetPageCounter());
}

export function* changeOrderSortBy(order: T.TSortBy) {
  yield put(ac.setOrderSort({ sortBy: order }));

  let sortedList: T.TMovieList = yield select((state) => state.movieList);

  switch (order) {
    case "name A-Z":
      sortedList = yield sortBy.sortObjectAZ({ arrOfObj: sortedList });
      break;
    case "name Z-A":
      sortedList = yield sortBy.sortObjectZA({ arrOfObj: sortedList });
      break;
    case "Year min":
      sortedList = yield sortBy.sortObjectYearMin({ arrOfObj: sortedList });
      break;
    case "Year max":
      sortedList = yield sortBy.sortObjectYearMax({ arrOfObj: sortedList });
      break;
    default:
      break;
  }

  yield put(ac.setListMovies({ movieList: sortedList }));
}

export function* fetchMoreMovies() {
  yield put(ac.incrementPageCounter());

  const [title, pageNumber, currList]: [
    string,
    number,
    T.TMovieList
  ] = yield select((state) => [state.title, state.pageNumber, state.movieList]);

  try {
    const data: any = yield call(() => {
      return fetch(
        `${openConst.BASE_URL}?apikey=${privateConst.API_KEY}&s=${title}&page=${pageNumber}`
      ).then((res) => res.json());
    });
    yield put(ac.setListMovies({ movieList: currList.concat(data.Search) }));
  } catch (err) {
    console.log(err);
    yield err;
  }
}

export function* fetchMoreDataAboutMovieById(id: number) {
  try {
    const data: T.TFullMovieInfo = yield call(() => {
      return fetch(
        `${openConst.BASE_URL}?apikey=${privateConst.API_KEY}&i=${id}`
      ).then((res) => res.json());
    });
    yield put(ac.setFullInfoAboutMovie({ movieMore: data }));
  } catch (err) {
    console.log(err);
    yield err;
  }
}