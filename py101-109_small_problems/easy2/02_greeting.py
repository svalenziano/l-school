

def main():
    name = input("What is your name? ").strip(' .')
    if name.endswith('!'):
        print(f"HELLO {name.upper()} WHY ARE WE YELLING?")
    else:
        print(f"Hello... {name}.")

if __name__ == '__main__':
    main()