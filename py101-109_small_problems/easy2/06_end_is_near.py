
def penultimate(string_of_multiple_words):
    # split
    words = string_of_multiple_words.split(' ')
    # return 2nd to last list element
    return words[-2]

def main():
    # These examples should print True
    print(penultimate("last word") == "last")
    print(penultimate("Launch School is great!") == "is")
    print(penultimate("My word!  The sun sure is bright today.") == "bright")

if __name__ == '__main__':
    main()