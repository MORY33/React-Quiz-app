import { createStore } from "redux";
import {configureStore} from "redux";
import reducer from "./reducer";

export default createStore(reducer);
// export default configureStore(reducer);
