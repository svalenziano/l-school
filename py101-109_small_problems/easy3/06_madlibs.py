'''
https://launchschool.com/exercises/fddf66ac
'''

def main():
    noun = input('Enter a noun: ') or 'dragon'
    verb = input('Enter a verb: ') or 'swoosh'
    adjective = input('Enter an adjective: ') or 'gloomy'
    adverb = input('Enter an adverb: ') or 'swoomily'
    
    print(
        f"Do you {verb} your {adjective} {noun} {adverb}? That's hilarious!",
        f"The {adjective} {noun} {verb}s {adverb} over the lazy dog.",
        f"The {noun} {adverb} {verb}s up to Joe's {adjective} turtle.",
        sep = '\n'
    )

if __name__ == '__main__':
    main()



