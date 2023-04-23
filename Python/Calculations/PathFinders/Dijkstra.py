def dijkstra_over(network, source, destination, waypoints =[]):
    '''
    Order of Waypoints is the order in which they will be visited
    '''
    visited = []
    adjacency_List = source.connections

    for icao in adjacency_List:
        if icao == destination: return icao
        visited.append(icao)
    

