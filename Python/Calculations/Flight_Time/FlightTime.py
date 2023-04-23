def calcFlightTime(distance, units = 'mi'):
    '''
    Takes Distance and units as arguments (mi is default). 
    Units (string) can be passed in as 
    - mi
    - km
    - knots
    Returns estimated flight time as a tuple (hours, minutes). 
    Flight time is calculated based on average Speed of:
    - 500mph 
    - 804km/h
    - 434knots

    '''

    if units == 'mi':
        basetime = round(distance/500, 2)
    elif units == 'km':
        basetime = round(distance/804, 2)
    else:
        basetime = round(distance/434, 2)

    whole, dec = divmod(basetime + .42,1)

    hours = whole
    minutes = dec*60

    return hours, minutes


# print(calcFlightTime(2126.97))

# help(calcFlightTime)


