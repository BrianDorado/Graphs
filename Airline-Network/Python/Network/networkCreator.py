class Connections_Network():
    def __init__(self) -> None:
        self.Network = {}

    def __str__(self) -> str:
        pass

    def addVertex(self, icao, meta):

        self.Network[icao] = meta

    def deleteVertex(self, icao):
        del self.Network[icao]

    def locateVertex(self, icao):
        return self.Network[icao]

    def findPath(self, source, destination, waypoints=[]):
        '''
        Sorted by Number of Transfers
        Also accounts for Flight time and distance
        E.G. 
        San Franciso - Tokyo - Paris || 5139 -> 2911 --> 8050
        -- is not the same as --
        San Franciso - New York - Paris || 6034 -> 3626 --> 9660
        
        '''
        origin = self.locateVertex[source]
        final_D = self.locateVertex[destination]




class Node():
    def __init__(self, icao, name, lat, lon, city, state, country, tz, runway_length, carriers) -> None:
        self.icao = icao
        self.airport_name = name
        self.lat = lat
        self.lon = lon
        self.city = city
        self.state = state
        self.country = country
        self.tz = tz
        self.runway_length = runway_length
        self.carriers = carriers
        self.connections = []

    def __str__(self) -> str:
        return f'''
            ICAO:{self.icao}, 
            Name: {self.airport_name},
            Latitude: {self.lat}, 
            Longitude: {self.lon}
            City: {self.city}
            State: {self.state}
            Country: {self.country}
            TimeZone: {self.tz}
            '''

    def add_connection(self, icao) -> bool:
        self.connections.push(icao)


# def test():
#     test_d = {}

#     test_d['name'] = {"name": "Brian", "age" : 17, "hobbies": []}

#     print(test_d)

# test()
