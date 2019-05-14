/// <reference types="bluebird" />

import { Promise } from "bluebird";

// Configure
Promise.config({
    longStackTraces: false,
    warnings: false
});