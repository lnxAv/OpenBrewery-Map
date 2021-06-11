import { stateChoices, createBreweriesFitler } from "./utils"

//# App wide Default Values for BrewerMiddleware
export const _defaultFilter = createBreweriesFitler(25, null, null, null, null, stateChoices()[31].state)
export const _defaultZoom = 5
export const _focusedZoom = 12