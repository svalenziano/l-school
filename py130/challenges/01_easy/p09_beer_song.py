'''
Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire song.

REQS:
    Pay close attention to newlines!
        - Newline at the end of every line
        - Newline between every verse
        - No additional whitespace between sentences
        - Example: "Line1\nLine2\n\nLine1\nLine2\n\n"
'''
class BeerSong:

    MSG_X_BOTTLES = (
            "{current} bottles of beer on the wall, {current} bottles of beer.\n"
            "Take one down and pass it around, "
            "{future} bottles of beer on the wall.\n"
        )

    MSG_2_BOTTLES = (
        "2 bottles of beer on the wall, 2 bottles of beer.\n"
        "Take one down and pass it around, 1 bottle of beer on the wall.\n"
    )

    MSG_1_BOTTLE = (
        "1 bottle of beer on the wall, 1 bottle of beer.\n"
        "Take it down and pass it around, "
        "no more bottles of beer on the wall.\n"
    )

    MSG_0_BOTTLES = (
        "No more bottles of beer on the wall, no more bottles of beer.\n"
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    )

    @classmethod
    def verse(cls, verse_number:int):
        '''
        INPUT = Integer: verse number
        OUTPUT = Multiline string: a single 2-line verse
        ALGO:
            Use match-case statement!
            case 0:
                return string (no f-string needed)
            case 1:
                return string (no f-string needed)
            case _:
                substitute TKTK and KTKT, return string
        '''
        match verse_number:
            case 0:
                return cls.MSG_0_BOTTLES
            case 1:
                return cls.MSG_1_BOTTLE
            case 2:
                return cls.MSG_2_BOTTLES
            case _:
                return cls.MSG_X_BOTTLES.format(current=verse_number,
                                                future=verse_number - 1)

    @classmethod
    def verses(cls, start_verse, end_verse):
        '''
        INPUT = Integer(s): verse numbers
        OUTPUT = Multiline string
            - each verse is identical to `verse`, use `verse` method
            - newline between verses
        ALGO:
            for each num in `verse_numbers`
                return self.verse(num)
        '''
        verses = (cls.verse(num) for num in range(start_verse, end_verse - 1, -1))
        return '\n'.join(verses)


    @classmethod
    def lyrics(cls):
        '''
        INPUT = NONE
        OUTPUT = Multiline string: lyrics of entire song
        ALGO:
            call `verses`, passing integers 0 thru 99 by unpacking a range object
        '''
        return cls.verses(99, 0)


if __name__ == '__main__':
#     x = '''The quick brown fox
# '''
#     y = "The quick brown fox\n"
#     print(x == y)
    
    tests = [99, 98, 1, 0]

    # for num in tests:
    #     print(BeerSong.verse(num))

    print(BeerSong.verses(2, 0))

    # print(BeerSong.lyrics())

    
    print(*'hello world!')