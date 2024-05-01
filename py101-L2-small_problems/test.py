names = [[1,2,3],"Stevo", "", " ", None]

for name in names:              # this is the example provided by the text
    if name and len(name) > 0:
        print(f"Hi, {name}.")
    else:
        print("Hello, whoever you are.")

    if name:                     # this is simpler, and works?
        print(f"Hi, {name}.")
    else:
        print("Hello, whoever you are.")

    if len(name) > 0:            # this doesn't work
        print(f"Hi, {name}.")
    else:
        print("Hello, whoever you are.")

    print("*" * 20)

