import {
  put,
  call,
  select,
  PutEffect,
  CallEffect,
  StrictEffect,
  SelectEffect,
} from "redux-saga/effects";
import { privateConst } from "constants/index";
import * as T from "types/storeTypes";
import * as ac from "store/actionCreators";
import * as sortBy from "store/utils/utils";

export function* fetchListMoviesByTitle(
  title: string
): Generator<PutEffect | CallEffect, void> {
  try {
    yield put(ac.setSearchTitle({ title }));
    const data: any = yield call(() => {
      return fetch(`${privateConst.URL_WITH_API}&s=${title}`).then((res) =>
        res.json()
      );
    });
    yield put(ac.setListMovies({ movieList: data.Search }));
  } catch (err) {
    console.log(err);
    yield err;
  }
}

export function* resetPageCounter(): Generator<PutEffect, void> {
  yield put(ac.resetPageCounter());
}

export function* changeOrderSortBy(
  order: T.TSortBy
): Generator<StrictEffect | T.TMovieList, void> {
  yield put(ac.setOrderSort({ sortBy: order }));

  let sortedList: unknown = yield select((state) => state.movieList);

  if (T.instanceOfTMovieList(sortedList)) {
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

    if (T.instanceOfTMovieList(sortedList)) {
      yield put(ac.setListMovies({ movieList: sortedList }));
    }
  }
}

export function* fetchMoreMovies(): Generator<
  SelectEffect | PutEffect | CallEffect,
  void
> {
  yield put(ac.incrementPageCounter());

  const title: unknown = yield select((state) => state.title);
  const pageNumber: unknown = yield select((state) => state.pageNumber);
  const currList: unknown = yield select((state) => state.movieList);

  try {
    const data: any = yield call(() => {
      return fetch(
        `${privateConst.URL_WITH_API}&s=${title}&page=${pageNumber}`
      ).then((res) => res.json());
    });
    if (T.instanceOfTMovieList(currList)) {
      yield put(ac.setListMovies({ movieList: currList.concat(data.Search) }));
    }
  } catch (err) {
    console.log(err);
    yield err;
  }
}

export function* fetchMoreDataAboutMovieById(
  id: number
): Generator<CallEffect | PutEffect, void> {
  try {
    const data: unknown = yield call(() => {
      return fetch(`${privateConst.URL_WITH_API}&i=${id}`).then((res) =>
        res.json()
      );
    });
    if (T.instanceOfTShortMovieInfo(data)) {
      yield put(ac.setFullInfoAboutMovie({ movieMore: data }));
    }
  } catch (err) {
    console.log(err);
    yield err;
  }
}
