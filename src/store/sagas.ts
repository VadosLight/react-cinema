import { put, call, select, PutEffect, CallEffect } from "redux-saga/effects";
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

export function* changeOrderSortBy(order: T.TSortBy) {
  yield put(ac.setOrderSort({ sortBy: order }));

  let sortedList = yield select((state) => state.movieList);

  switch (order) {
    case "name A-Z":
      // Type '{}' is missing the following properties from type 'TShortMovieInfo[]':
      // length, pop, push, concat, and 28 more.ts(2740)

      //utils.ts(3, 39): The expected type comes from property 'arrOfObj'
      //  which is declared here on type '{ arrOfObj: TMovieList; }'
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

  // Type 'unknown' is not assignable to type 'TMovieList'.ts(2322)
  // actionCreators.ts(7, 3): The expected type comes from property
  // 'movieList' which is declared here on type '{ movieList: TMovieList; }'
  yield put(ac.setListMovies({ movieList: sortedList }));
}

export function* fetchMoreMovies() {
  yield put(ac.incrementPageCounter());

  // Type 'unknown' is not assignable to type '[string, number, TMovieList]'.ts(2322)
  const [title, pageNumber, currList]: [
    string,
    number,
    T.TMovieList
  ] = yield select((state: T.TState): [string, number, T.TMovieList] => [
    state.title,
    state.pageNumber,
    state.movieList,
  ]);

  try {
    const data: any = yield call(() => {
      return fetch(
        `${privateConst.URL_WITH_API}&s=${title}&page=${pageNumber}`
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
    // Type 'unknown' is not assignable to type 'TFullMovieInfo'.
    // Index signature is missing in type '{}'.ts(2322)
    const data: T.TFullMovieInfo = yield call(() => {
      return fetch(`${privateConst.URL_WITH_API}&i=${id}`).then((res) =>
        res.json()
      );
    });
    yield put(ac.setFullInfoAboutMovie({ movieMore: data }));
  } catch (err) {
    console.log(err);
    yield err;
  }
}
