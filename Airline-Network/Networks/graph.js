"use strict";
exports.__esModule = true;
exports.Airport = exports.Connections_Network = void 0;
//Execution Cmd - > tsc.cmd Networks/graph.ts
var airports_js_1 = require("../airports.js");
var Connections_Network = /** @class */ (function () {
    function Connections_Network() {
    }
    Connections_Network.prototype.addVertex = function (icao, meta) {
    };
    Connections_Network.prototype.deleteVertex = function (icao) {
    };
    Connections_Network.prototype.locateVertex = function (icao) {
    };
    Connections_Network.prototype.findPath = function (source, destination, waypoints) {
        if (waypoints === void 0) { waypoints = []; }
        var path = new Map();
        return path;
    };
    return Connections_Network;
}());
exports.Connections_Network = Connections_Network;
var Airport = /** @class */ (function () {
    function Airport(icao, connections) {
        this.icao = icao;
        this.connections = new Map();
    }
    /**
     *
     * @memberof City
     * @param {String} icao International Civil Aviation Organization
     * @param {Object} airport_meta
     * @returns {boolean}
     */
    Airport.prototype.addConnection = function (icao, airport_meta) {
        this.connections.set(icao, airport_meta);
        return true;
    };
    /**
     *
     * @memberof City
     * @param {String} icao
     * @returns {boolean}
     */
    Airport.prototype.removeConnection = function (icao) {
        return this.connections["delete"](icao);
    };
    /**
     *
     * @memberof City
     * @description Determines if the Parent has a connection with the argument
     * @param {String} icao
     * @returns {Object}
     */
    Airport.prototype.readConnection = function (icao) {
        return this.connections.get(icao);
    };
    return Airport;
}());
exports.Airport = Airport;
function fun() {
    var testairport = airports_js_1["default"][0];
    console.log(testairport);
}
fun();
