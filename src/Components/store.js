import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore ({
    reducer: {
        compSom: reducers
    }
});

export default store;