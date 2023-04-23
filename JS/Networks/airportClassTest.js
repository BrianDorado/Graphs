//Execution Cmd - > tsc.cmd Networks/graph.ts
const airports = require('./airports')

class Network {
    constructor(){
      this.network = new Set()
    }
    
    addVertex(icao, meta){
      this.network.add(icao, meta)
    }
    

    deleteVertex(icao){
      this.network.delete(icao)
    }

    locateVertex(icao){
      if (!this.network.has(icao)) {
        console.log('No such Airport to be found')
        return false
      }

    }

    findPath(source, destination, waypoints = []){
        const path = new Map()
        const nodes = this.network.values()

        // determine entry point
        // const nodes = this.network.entries();

        for (const city of nodes){
          console.log(city)
        }
        while (nodes.next().value !== source){
          nodes.next()
        }
     
        return path
    }
}



class CodeShare extends Network {
  constructor() {
    this.network = new Set();
  }
  
}


class Airport {
    constructor( meta) {
    // this.icao = icao;
    this.meta = meta;
    this.connections = new Set();
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
const testAirportsICAO = ["KDFW", "KMIA", "KPHX", "KSEA", "KSLC", "KDEN", "KIAD", "KDKR", "EGGL", "RJAA", "KPHNL", "EDDF", "KSFO", "KORD", "KDLH", "MMMX", "KABQ", "LFPG", "KCLT", "KJFK", "KLAX", "KSAN", "LEMD", "KATL", "EHAM", "PHOG" ]

const network = new Network()

 function testNodes(){

  for (i = 0; i< testAirportsICAO.length; i++){
    const icao = testAirportsICAO[i]
    const meta = airports[icao]
    const airport = new Airport(meta)
    network.addVertex(icao, airport)
    console.log(network)
  }
    
    // const testairport = airports["KDFW"]
    // const kdfw = new Airport("KDFW", testairport)
    // console.log(kdfw)
    // return kdfw
}

testNodes()



function selection_oneLoop(arr){
  for (let i = 0; i<arr.length; i++){
    currentMin = arr[0];
    if (currentMin > arr[i+1]){
      currentMin = arr[i+1]
    }
  }
}