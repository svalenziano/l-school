numbers = [1, 2, 3, 4, 5]

def lbyl_fetch_6th(lst):
    if len(lst) >= 6:
        return lst[5]
    return "List is less than 6 elements long."

def afnp_fetch_6th(lst):
    try:
        return lst[5]
    except IndexError as e:
        return(e)
    
print(lbyl_fetch_6th(numbers))
print(afnp_fetch_6th(numbers))
print(afnp_fetch_6th([0,0,0,0,0,0,0,0,0]))