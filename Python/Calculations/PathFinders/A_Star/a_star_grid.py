'''
Implementation of the A Star Algorithm using UTM Grid Zones as locations
'''

def establish_grid():
    rows = ['x','w','v','u','t','s','r','q','p','n','m','l','k','j','h','g','f','e','d','c']
    columns = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]

    grid = []
    for row in rows:
        for column in columns:
            grid.append(f'{column}{row}')

    print(grid)

establish_grid()