response = ""
while True:
    response = input("You can do it, right?" ).casefold()
    breakp
    for quitter_language in ['no', 'quit', 'stop']:
        if quitter_language in response:
            break   