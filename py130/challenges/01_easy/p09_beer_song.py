'''
Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire song.
'''
class BeerSong:

    _MSG_X_BOTTLES = (
            "{current} bottles of beer on the wall, {current} bottles of beer.\n"
            "Take one down and pass it around, "
            "{future} bottles of beer on the wall.\n"
        )

    _MSG_2_BOTTLES = (
        "2 bottles of beer on the wall, 2 bottles of beer.\n"
        "Take one down and pass it around, 1 bottle of beer on the wall.\n"
    )

    _MSG_1_BOTTLE = (
        "1 bottle of beer on the wall, 1 bottle of beer.\n"
        "Take it down and pass it around, "
        "no more bottles of beer on the wall.\n"
    )

    _MSG_0_BOTTLES = (
        "No more bottles of beer on the wall, no more bottles of beer.\n"
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    )

    @classmethod
    def verse(cls, verse_number:int):
        match verse_number:
            case 0:
                return cls._MSG_0_BOTTLES
            case 1:
                return cls._MSG_1_BOTTLE
            case 2:
                return cls._MSG_2_BOTTLES
            case _:
                return cls._MSG_X_BOTTLES.format(current=verse_number,
                                                future=verse_number - 1)

    @classmethod
    def verses(cls, start_verse, end_verse):
        verses = (cls.verse(num) 
                  for num in range(start_verse, end_verse - 1, -1))
        return '\n'.join(verses)

    @classmethod
    def lyrics(cls):
        return cls.verses(99, 0)


if __name__ == '__main__':
    
    tests = [99, 98, 1, 0]
    for num in tests:
        print(BeerSong.verse(num))

    print(BeerSong.verses(2, 0))