'''
P
    Input = ID (integer), list of transations
    Output = True or false: is item available?
    Reqs
        ex = 
        Implicit
E

D

A
    - use `transactions_for` to get all matching transactions
    - init empty list
    - generate list of quantities
        - if `movement` == `in` append a positive quantity
        - else append negative qty
    - sum the quantities
    - return sum > 0
C
'''

def transactions_for(item_id, list_of_transactions):
    return [item for item in list_of_transactions
            if item['id'] == item_id]

def is_item_available(item, transactions):
    matching = transactions_for(item, transactions)
    qtys = []
    for match in matching:
        if match['movement'] == 'in':
            qtys.append(match['quantity'])
        else:
            qtys.append(match['quantity'] * -1)
    qty = sum(qtys)
    return qty > 0


transactions = [
    {"id": 101, "movement": 'in',  "quantity":  5},
    {"id": 105, "movement": 'in',  "quantity": 10},
    {"id": 102, "movement": 'out', "quantity": 17},
    {"id": 101, "movement": 'in',  "quantity": 12},
    {"id": 103, "movement": 'out', "quantity": 20},
    {"id": 102, "movement": 'out', "quantity": 15},
    {"id": 105, "movement": 'in',  "quantity": 25},
    {"id": 101, "movement": 'out', "quantity": 18},
    {"id": 102, "movement": 'in',  "quantity": 22},
    {"id": 103, "movement": 'out', "quantity": 15},
]

print(is_item_available(101, transactions) == False)  # True
print(is_item_available(103, transactions) == False)  # True
print(is_item_available(105, transactions) == True)   # True