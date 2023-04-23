def dijkstra_over(network, source, destination, waypoints =[]):
    '''
    Order of Waypoints is the order in which they will be visited
    '''
    visited = []
    path = []
    adjacency_List = source.connections

    # is destination an immediate neighbor?

    for icao in adjacency_List:
        if icao == destination: return icao
        visited.append(icao)
    

