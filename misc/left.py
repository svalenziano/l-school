'''

'''

from pprint import pp

under_5_mortality = {
    2019 : {
        'India' : 3.4,
        'UK' : 0.4,
        'Sweden' : 0.3,
        'France' : 0.4,
    },
    1914 : {
        'India' : 34.5,
        'UK' : 15.5,
        'France' : 15.5,
        'Sweden' : 10.1,
    },
    1950 : {
        'India' : 26.7,
        'France' : 5.7,
        'UK' : 3.7,
        'Sweden' : 2.7
    },
}

'''
Given the dictionary above, write some code that will 
transform it into the dictionary below.

REQS:
- Countries should be in alpha order, ascending
- Years should be in ascending order
- Should work with dictionaries with different values (don't hardcode any values)
- Reduction should be a positive number, rounded to no more than one decimal place
'''

reformatted = {
    'France': {
        1914: 15.5, 
        1950: 5.7, 
        2019: 0.4, 
        'Reduction': 15.1
    },
    'India': {
        1914: 34.5, 
        1950: 26.7, 
        2019: 3.4, 
        'Reduction': 31.1
    },
    'Sweden': {
        1914: 10.1, 
        1950: 2.7, 
        2019: 0.3, 
        'Reduction': 9.8
    },
    'UK': {
        1914: 15.5, 
        1950: 3.7, 
        2019: 0.4, 
        'Reduction': 15.1
    }
}



'''
SV NOTES
    

    India
        1914 rate
        2019 rate
        Reduction : 


    Algo:
        - v1 high
            - Create set of countries
                - Sort alphabetically ascending
            - Create list of years
            - For each country
                - Create empty dict
                - Add 1914 rate
                - Add 2019 rate
                - Add reduction between first and last year (should be a positive number)

'''

def reformat(orig_dict):
    years = sorted(list(orig_dict.keys()))
    first_year = years[0]
    last_year = years[-1]
    countries = [country
                 for country in orig_dict[first_year]]
    countries.sort()
    new_dict = {}
    for country in countries:
        new_dict[country] = {}
        for year in years:
            new_dict[country][year] = orig_dict[year][country]
        reduction = (orig_dict[first_year][country] -
                     orig_dict[last_year][country])
        new_dict[country]['Reduction'] = round(reduction, 1)
    return new_dict

pp(reformat(under_5_mortality))

print(reformatted == reformat(under_5_mortality))

