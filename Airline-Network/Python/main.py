import json
import random

from Calculations.LongLat.LongLat import calc_distance
from Calculations.Flight_Time.FlightTime import calcFlightTime

from Network.networkCreator import Connections_Network, Node

def main():
    f = open('test_airports.json')
    
    data = json.load(f)
    # print(data)

    # origin = input("Please Enter Place of Origin: ")
    # destination = input("Please Enter Destination: ")
    
    origin = random.choice(data)
    destination = random.choice(data)


    # distance = calc_distance(float(origin["lon"]), float(origin["lat"]), float(destination["lon"]), float(destination["lat"]), "mi")

    # flightTime = calcFlightTime(distance)

    # print(f'The Distance between {origin["name"]} and {destination["name"]} is {distance} miles.\nEstimated Flight time is: {int(flightTime[0])} hours and {int(flightTime[1])} minutes')

    AirNetwork = Connections_Network()

    for airport in data:
        airport_node = Node(
            airport["icao"], airport["name"], airport["lat"], airport["lon"], airport["city"], airport["state"], airport["country"], airport['tz'], airport["runway_length"], airport["carriers"]
        )

        AirNetwork.addVertex(airport["icao"], airport_node)

    # for node in AirNetwork.Network:
    #     print(AirNetwork.Network[node])

    exampleNode = AirNetwork.locateVertex(origin["icao"]) 
    print(exampleNode)




main()