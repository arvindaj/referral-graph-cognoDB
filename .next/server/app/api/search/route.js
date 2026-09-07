"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/search/route";
exports.ids = ["app/api/search/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_BNR_my_5_27_26_referral_graph_cognoDB_app_api_search_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/search/route.js */ \"(rsc)/./app/api/search/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/search/route\",\n        pathname: \"/api/search\",\n        filename: \"route\",\n        bundlePath: \"app/api/search/route\"\n    },\n    resolvedPagePath: \"C:\\\\BNR\\\\my\\\\5-27-26\\\\referral-graph-cognoDB\\\\app\\\\api\\\\search\\\\route.js\",\n    nextConfigOutput,\n    userland: C_BNR_my_5_27_26_referral_graph_cognoDB_app_api_search_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/search/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZWFyY2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDQk5SJTVDbXklNUM1LTI3LTI2JTVDcmVmZXJyYWwtZ3JhcGgtY29nbm9EQiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q0JOUiU1Q215JTVDNS0yNy0yNiU1Q3JlZmVycmFsLWdyYXBoLWNvZ25vREImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmZXJyYWwtZ3JhcGgvP2Y5YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcQk5SXFxcXG15XFxcXDUtMjctMjZcXFxccmVmZXJyYWwtZ3JhcGgtY29nbm9EQlxcXFxhcHBcXFxcYXBpXFxcXHNlYXJjaFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VhcmNoL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VhcmNoXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZWFyY2gvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxCTlJcXFxcbXlcXFxcNS0yNy0yNlxcXFxyZWZlcnJhbC1ncmFwaC1jb2dub0RCXFxcXGFwcFxcXFxhcGlcXFxcc2VhcmNoXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZWFyY2gvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/search/route.js":
/*!*********************************!*\
  !*** ./app/api/search/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_neo4j__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/neo4j */ \"(rsc)/./lib/neo4j.js\");\n\n\n// GET /api/search?q=ste\n// Lightweight autocomplete over Company names for the search box.\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const q = (searchParams.get(\"q\") || \"\").trim();\n    if (!q) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        companies: []\n    });\n    try {\n        const records = await (0,_lib_neo4j__WEBPACK_IMPORTED_MODULE_1__.runQuery)(`MATCH (c:Company)\n       WHERE toLower(c.name) CONTAINS toLower($q)\n       RETURN c.name AS name\n       ORDER BY name\n       LIMIT 8`, {\n            q\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            companies: records.map((r)=>(0,_lib_neo4j__WEBPACK_IMPORTED_MODULE_1__.toNative)(r.get(\"name\")))\n        });\n    } catch (err) {\n        console.error(\"GET /api/search failed:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to query the graph.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlYXJjaC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDYTtBQUV4RCx3QkFBd0I7QUFDeEIsa0VBQWtFO0FBQzNELGVBQWVHLElBQUlDLE9BQU87SUFDL0IsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO0lBQzVDLE1BQU1DLElBQUksQ0FBQ0gsYUFBYUksR0FBRyxDQUFDLFFBQVEsRUFBQyxFQUFHQyxJQUFJO0lBRTVDLElBQUksQ0FBQ0YsR0FBRyxPQUFPUixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1FBQUVDLFdBQVcsRUFBRTtJQUFDO0lBRWpELElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1aLG9EQUFRQSxDQUM1QixDQUFDOzs7O2NBSU8sQ0FBQyxFQUNUO1lBQUVPO1FBQUU7UUFFTixPQUFPUixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVDLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFNYixvREFBUUEsQ0FBQ2EsRUFBRU4sR0FBRyxDQUFDO1FBQVU7SUFDcEYsRUFBRSxPQUFPTyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQywyQkFBMkJGO1FBQ3pDLE9BQU9oQixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVPLE9BQU87UUFBNkIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmVycmFsLWdyYXBoLy4vYXBwL2FwaS9zZWFyY2gvcm91dGUuanM/NTJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IHJ1blF1ZXJ5LCB0b05hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvbmVvNGpcIjtcblxuLy8gR0VUIC9hcGkvc2VhcmNoP3E9c3RlXG4vLyBMaWdodHdlaWdodCBhdXRvY29tcGxldGUgb3ZlciBDb21wYW55IG5hbWVzIGZvciB0aGUgc2VhcmNoIGJveC5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IHEgPSAoc2VhcmNoUGFyYW1zLmdldChcInFcIikgfHwgXCJcIikudHJpbSgpO1xuXG4gIGlmICghcSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgY29tcGFuaWVzOiBbXSB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBydW5RdWVyeShcbiAgICAgIGBNQVRDSCAoYzpDb21wYW55KVxuICAgICAgIFdIRVJFIHRvTG93ZXIoYy5uYW1lKSBDT05UQUlOUyB0b0xvd2VyKCRxKVxuICAgICAgIFJFVFVSTiBjLm5hbWUgQVMgbmFtZVxuICAgICAgIE9SREVSIEJZIG5hbWVcbiAgICAgICBMSU1JVCA4YCxcbiAgICAgIHsgcSB9XG4gICAgKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjb21wYW5pZXM6IHJlY29yZHMubWFwKChyKSA9PiB0b05hdGl2ZShyLmdldChcIm5hbWVcIikpKSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkdFVCAvYXBpL3NlYXJjaCBmYWlsZWQ6XCIsIGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIHF1ZXJ5IHRoZSBncmFwaC5cIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicnVuUXVlcnkiLCJ0b05hdGl2ZSIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJxIiwiZ2V0IiwidHJpbSIsImpzb24iLCJjb21wYW5pZXMiLCJyZWNvcmRzIiwibWFwIiwiciIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/search/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/neo4j.js":
/*!**********************!*\
  !*** ./lib/neo4j.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDriver: () => (/* binding */ getDriver),\n/* harmony export */   runQuery: () => (/* binding */ runQuery),\n/* harmony export */   toNative: () => (/* binding */ toNative)\n/* harmony export */ });\n/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! neo4j-driver */ \"(rsc)/./node_modules/neo4j-driver/lib/index.js\");\n/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(neo4j_driver__WEBPACK_IMPORTED_MODULE_0__);\n\n// Singleton driver instance, reused across API route invocations (important\n// in serverless/dev-reload environments where modules can re-evaluate).\nlet driver;\nfunction getDriver() {\n    if (!driver) {\n        const uri = process.env.NEO4J_URI;\n        const user = process.env.NEO4J_USERNAME;\n        const password = process.env.NEO4J_PASSWORD;\n        if (!uri || !user || !password) {\n            throw new Error(\"Missing NEO4J_URI / NEO4J_USERNAME / NEO4J_PASSWORD env vars. Copy .env.example to .env.local and fill in your CognoDB Bolt credentials.\");\n        }\n        driver = neo4j_driver__WEBPACK_IMPORTED_MODULE_0___default().driver(uri, neo4j_driver__WEBPACK_IMPORTED_MODULE_0___default().auth.basic(user, password), {\n            // Sensible defaults for a small referral-graph workload.\n            maxConnectionPoolSize: 20,\n            connectionAcquisitionTimeout: 10000\n        });\n    }\n    return driver;\n}\n// Runs a cypher query in a managed session and always closes the session,\n// even if the query throws. Returns the raw list of Neo4j Records.\nasync function runQuery(cypher, params = {}) {\n    const session = getDriver().session({\n        database: process.env.NEO4J_DATABASE || \"neo4j\"\n    });\n    try {\n        const result = await session.run(cypher, params);\n        return result.records;\n    } finally{\n        await session.close();\n    }\n}\n// Converts Neo4j integers / nodes to plain JSON-friendly values recursively.\nfunction toNative(value) {\n    if (neo4j_driver__WEBPACK_IMPORTED_MODULE_0___default().isInt(value)) return value.toNumber();\n    if (Array.isArray(value)) return value.map(toNative);\n    if (value && typeof value === \"object\") {\n        // Node / Relationship objects expose `.properties`\n        if (value.properties) {\n            return {\n                id: value.elementId ?? String(value.identity),\n                labels: value.labels,\n                type: value.type,\n                ...toNative(value.properties)\n            };\n        }\n        const out = {};\n        for (const [k, v] of Object.entries(value))out[k] = toNative(v);\n        return out;\n    }\n    return value;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbmVvNGouanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFakMsNEVBQTRFO0FBQzVFLHdFQUF3RTtBQUN4RSxJQUFJQztBQUVHLFNBQVNDO0lBQ2QsSUFBSSxDQUFDRCxRQUFRO1FBQ1gsTUFBTUUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1FBQ2pDLE1BQU1DLE9BQU9ILFFBQVFDLEdBQUcsQ0FBQ0csY0FBYztRQUN2QyxNQUFNQyxXQUFXTCxRQUFRQyxHQUFHLENBQUNLLGNBQWM7UUFFM0MsSUFBSSxDQUFDUCxPQUFPLENBQUNJLFFBQVEsQ0FBQ0UsVUFBVTtZQUM5QixNQUFNLElBQUlFLE1BQ1I7UUFFSjtRQUVBVixTQUFTRCwwREFBWSxDQUFDRyxLQUFLSCx3REFBVSxDQUFDYSxLQUFLLENBQUNOLE1BQU1FLFdBQVc7WUFDM0QseURBQXlEO1lBQ3pESyx1QkFBdUI7WUFDdkJDLDhCQUE4QjtRQUNoQztJQUNGO0lBQ0EsT0FBT2Q7QUFDVDtBQUVBLDBFQUEwRTtBQUMxRSxtRUFBbUU7QUFDNUQsZUFBZWUsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxNQUFNQyxVQUFVakIsWUFBWWlCLE9BQU8sQ0FBQztRQUNsQ0MsVUFBVWhCLFFBQVFDLEdBQUcsQ0FBQ2dCLGNBQWMsSUFBSTtJQUMxQztJQUNBLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1ILFFBQVFJLEdBQUcsQ0FBQ04sUUFBUUM7UUFDekMsT0FBT0ksT0FBT0UsT0FBTztJQUN2QixTQUFVO1FBQ1IsTUFBTUwsUUFBUU0sS0FBSztJQUNyQjtBQUNGO0FBRUEsNkVBQTZFO0FBQ3RFLFNBQVNDLFNBQVNDLEtBQUs7SUFDNUIsSUFBSTNCLHlEQUFXLENBQUMyQixRQUFRLE9BQU9BLE1BQU1FLFFBQVE7SUFDN0MsSUFBSUMsTUFBTUMsT0FBTyxDQUFDSixRQUFRLE9BQU9BLE1BQU1LLEdBQUcsQ0FBQ047SUFDM0MsSUFBSUMsU0FBUyxPQUFPQSxVQUFVLFVBQVU7UUFDdEMsbURBQW1EO1FBQ25ELElBQUlBLE1BQU1NLFVBQVUsRUFBRTtZQUNwQixPQUFPO2dCQUNMQyxJQUFJUCxNQUFNUSxTQUFTLElBQUlDLE9BQU9ULE1BQU1VLFFBQVE7Z0JBQzVDQyxRQUFRWCxNQUFNVyxNQUFNO2dCQUNwQkMsTUFBTVosTUFBTVksSUFBSTtnQkFDaEIsR0FBR2IsU0FBU0MsTUFBTU0sVUFBVSxDQUFDO1lBQy9CO1FBQ0Y7UUFDQSxNQUFNTyxNQUFNLENBQUM7UUFDYixLQUFLLE1BQU0sQ0FBQ0MsR0FBR0MsRUFBRSxJQUFJQyxPQUFPQyxPQUFPLENBQUNqQixPQUFRYSxHQUFHLENBQUNDLEVBQUUsR0FBR2YsU0FBU2dCO1FBQzlELE9BQU9GO0lBQ1Q7SUFDQSxPQUFPYjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmZXJyYWwtZ3JhcGgvLi9saWIvbmVvNGouanM/YmJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmVvNGogZnJvbSBcIm5lbzRqLWRyaXZlclwiO1xuXG4vLyBTaW5nbGV0b24gZHJpdmVyIGluc3RhbmNlLCByZXVzZWQgYWNyb3NzIEFQSSByb3V0ZSBpbnZvY2F0aW9ucyAoaW1wb3J0YW50XG4vLyBpbiBzZXJ2ZXJsZXNzL2Rldi1yZWxvYWQgZW52aXJvbm1lbnRzIHdoZXJlIG1vZHVsZXMgY2FuIHJlLWV2YWx1YXRlKS5cbmxldCBkcml2ZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREcml2ZXIoKSB7XG4gIGlmICghZHJpdmVyKSB7XG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTkVPNEpfVVJJO1xuICAgIGNvbnN0IHVzZXIgPSBwcm9jZXNzLmVudi5ORU80Sl9VU0VSTkFNRTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHByb2Nlc3MuZW52Lk5FTzRKX1BBU1NXT1JEO1xuXG4gICAgaWYgKCF1cmkgfHwgIXVzZXIgfHwgIXBhc3N3b3JkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiTWlzc2luZyBORU80Sl9VUkkgLyBORU80Sl9VU0VSTkFNRSAvIE5FTzRKX1BBU1NXT1JEIGVudiB2YXJzLiBDb3B5IC5lbnYuZXhhbXBsZSB0byAuZW52LmxvY2FsIGFuZCBmaWxsIGluIHlvdXIgQ29nbm9EQiBCb2x0IGNyZWRlbnRpYWxzLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGRyaXZlciA9IG5lbzRqLmRyaXZlcih1cmksIG5lbzRqLmF1dGguYmFzaWModXNlciwgcGFzc3dvcmQpLCB7XG4gICAgICAvLyBTZW5zaWJsZSBkZWZhdWx0cyBmb3IgYSBzbWFsbCByZWZlcnJhbC1ncmFwaCB3b3JrbG9hZC5cbiAgICAgIG1heENvbm5lY3Rpb25Qb29sU2l6ZTogMjAsXG4gICAgICBjb25uZWN0aW9uQWNxdWlzaXRpb25UaW1lb3V0OiAxMF8wMDAsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRyaXZlcjtcbn1cblxuLy8gUnVucyBhIGN5cGhlciBxdWVyeSBpbiBhIG1hbmFnZWQgc2Vzc2lvbiBhbmQgYWx3YXlzIGNsb3NlcyB0aGUgc2Vzc2lvbixcbi8vIGV2ZW4gaWYgdGhlIHF1ZXJ5IHRocm93cy4gUmV0dXJucyB0aGUgcmF3IGxpc3Qgb2YgTmVvNGogUmVjb3Jkcy5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5RdWVyeShjeXBoZXIsIHBhcmFtcyA9IHt9KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBnZXREcml2ZXIoKS5zZXNzaW9uKHtcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTkVPNEpfREFUQUJBU0UgfHwgXCJuZW80alwiLFxuICB9KTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXNzaW9uLnJ1bihjeXBoZXIsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJlc3VsdC5yZWNvcmRzO1xuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IHNlc3Npb24uY2xvc2UoKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBOZW80aiBpbnRlZ2VycyAvIG5vZGVzIHRvIHBsYWluIEpTT04tZnJpZW5kbHkgdmFsdWVzIHJlY3Vyc2l2ZWx5LlxuZXhwb3J0IGZ1bmN0aW9uIHRvTmF0aXZlKHZhbHVlKSB7XG4gIGlmIChuZW80ai5pc0ludCh2YWx1ZSkpIHJldHVybiB2YWx1ZS50b051bWJlcigpO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5tYXAodG9OYXRpdmUpO1xuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gTm9kZSAvIFJlbGF0aW9uc2hpcCBvYmplY3RzIGV4cG9zZSBgLnByb3BlcnRpZXNgXG4gICAgaWYgKHZhbHVlLnByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB2YWx1ZS5lbGVtZW50SWQgPz8gU3RyaW5nKHZhbHVlLmlkZW50aXR5KSxcbiAgICAgICAgbGFiZWxzOiB2YWx1ZS5sYWJlbHMsXG4gICAgICAgIHR5cGU6IHZhbHVlLnR5cGUsXG4gICAgICAgIC4uLnRvTmF0aXZlKHZhbHVlLnByb3BlcnRpZXMpLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0ge307XG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSBvdXRba10gPSB0b05hdGl2ZSh2KTtcbiAgICByZXR1cm4gb3V0O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbiJdLCJuYW1lcyI6WyJuZW80aiIsImRyaXZlciIsImdldERyaXZlciIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORU80Sl9VUkkiLCJ1c2VyIiwiTkVPNEpfVVNFUk5BTUUiLCJwYXNzd29yZCIsIk5FTzRKX1BBU1NXT1JEIiwiRXJyb3IiLCJhdXRoIiwiYmFzaWMiLCJtYXhDb25uZWN0aW9uUG9vbFNpemUiLCJjb25uZWN0aW9uQWNxdWlzaXRpb25UaW1lb3V0IiwicnVuUXVlcnkiLCJjeXBoZXIiLCJwYXJhbXMiLCJzZXNzaW9uIiwiZGF0YWJhc2UiLCJORU80Sl9EQVRBQkFTRSIsInJlc3VsdCIsInJ1biIsInJlY29yZHMiLCJjbG9zZSIsInRvTmF0aXZlIiwidmFsdWUiLCJpc0ludCIsInRvTnVtYmVyIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwicHJvcGVydGllcyIsImlkIiwiZWxlbWVudElkIiwiU3RyaW5nIiwiaWRlbnRpdHkiLCJsYWJlbHMiLCJ0eXBlIiwib3V0IiwiayIsInYiLCJPYmplY3QiLCJlbnRyaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/neo4j.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/neo4j-driver-bolt-connection","vendor-chunks/neo4j-driver-core","vendor-chunks/rxjs","vendor-chunks/neo4j-driver","vendor-chunks/tslib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CBNR%5Cmy%5C5-27-26%5Creferral-graph-cognoDB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();