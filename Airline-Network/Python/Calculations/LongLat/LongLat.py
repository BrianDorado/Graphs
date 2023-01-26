from math import radians, cos, sin, asin, sqrt

def calc_distance(longA, latA, longB, latB, unit = 'km'):
    # print(*args)
    radiusInKm = 6371
    radiusInMi = 3956


    longAInRads = radians(longA)
    latAInRads = radians(latA)
    longBInRads = radians(longB)
    latBInRads = radians(latB)
    dlong = longBInRads - longAInRads
    dlat = latBInRads - latAInRads


    a = sin(dlat/2) **2 + cos(latAInRads) * cos(latBInRads) * sin(dlong/2) **2

    c = asin(sqrt(a)) * 2

    if unit == 'km':
        return round(c*radiusInKm,2)
    else:
        return round(c*radiusInMi,2)

lat1 = 53.32055555555556
lat2 = 53.31861111111111
lon1 = -1.7297222222222221
lon2 = -1.6997222222222223

# print(distance(lon1, lat1, lon2, lat2), 'km')
# print(distance(lon1, lat1, lon2, lat2, 'mi'), 'mi')
# print(calc_distance(-112.03, 33.4376, -74.1843, 40.6924, 'mi'), 'mi')
