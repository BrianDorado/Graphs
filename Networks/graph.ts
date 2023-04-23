//Execution Cmd - > tsc.cmd Networks/graph.ts
import airports from "../test_airports.json"

export class Connections_Network {
    nodes: string[];
    constructor(){

    }
    
    addVertex(icao:string, meta: object){

    }

    deleteVertex(icao:string){

    }

    locateVertex(icao:string){

    }

    findPath(source:string, destination: string, waypoints: string[] = []){
        const path = new Map()
     
        return path
    }
}
 export class Airport {
   icao: string;
   airport_name: string;
   connections: Map<string, object>;
  constructor(icao: string, connections: Map<string,object>) {
    this.icao = icao;
    this.connections = new Map<string,object>();
  }
  /**
   *
   * @memberof City 
   * @param {String} icao International Civil Aviation Organization
   * @param {Object} airport_meta
   * @returns {boolean}
   */
  addConnection(icao, airport_meta) {
    this.connections.set(icao, airport_meta);
    return true
  }

  /**
   * 
   * @memberof City
   * @param {String} icao 
   * @returns {boolean}
   */
  removeConnection(icao) {
    return this.connections.delete(icao); 
  }

  /**
   * 
   * @memberof City
   * @description Determines if the Parent has a connection with the argument
   * @param {String} icao 
   * @returns {Object}
   */
  readConnection(icao) {
    
    return this.connections.get(icao);
  }
}

 function fun(){
     const testairport = airports[0]
    console.log(testairport)
}

fun()
