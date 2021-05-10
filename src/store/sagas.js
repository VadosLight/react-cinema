// eslint-disable-next-line
import { put, call, select } from "redux-saga/effects";
import { openConst, privateConst } from "constants/index";
import * as ac from "store/actionCreators";
import * as sortBy from "store/utils/utils";

export function* fetchListMoviesByTitle(title) {
  try {
    yield put(ac.setSearchTitle({ title }));
    const data = yield call(() => {
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

export function* changeOrderSortBy(order) {
  yield put(ac.setOrderSort({ sortBy: order }));

  let sortedList = yield select((state) => state.movieList);

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
  
  const [title, pageNumber, currList] = yield select((state) => [
    state.title,
    state.pageNumber,
    state.movieList,
  ]);

  try {
    const data = yield call(() => {
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
