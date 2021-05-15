import { TPrivateConstants } from "types/constantsTypes";
import open from "./open";

const privateConst: TPrivateConstants = {
  API_KEY: "7e505c0f",
  URL_WITH_API: "",
};

privateConst.URL_WITH_API = `${open.BASE_URL}?apikey=${privateConst.API_KEY}`;

export default Object.freeze(privateConst);
