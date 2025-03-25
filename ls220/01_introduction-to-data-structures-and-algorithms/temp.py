# what prints and why?

truthy_values = [1, 2, 3, "hello", [1, 2, 3], {"a": 1}, True, 0, "", [], {}, None, False]
print("Values:")
for value in truthy_values:
    if value:
        print(f"{value} is truthy")
    else:
        print(f"{value} is falsy")
        
        
        
        
