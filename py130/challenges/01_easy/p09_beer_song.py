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
    @classmethod
    def verse(cls, verse_number:int):
        '''
        INPUT = Integer: verse number
        OUTPUT = Multiline string: a single 2-line verse
        ALGO:
            Use match-case statement!
            case 0:
                return f-string
            case 1:
                f-string
            case _:
                f-string
        '''
        pass

    @classmethod
    def verses(cls, *verse_numbers:int):
        '''
        INPUT = Integer(s): verse numbers
        OUTPUT = Multiline string
            - each verse is identical to `verse`, use `verse` method
            - newline between verses
        ALGO:
            for each num in `verse_numbers`
                return self.verse(num)
        '''
        pass

    @classmethod
    def lyrics(cls):
        '''
        INPUT = NONE
        OUTPUT = Multiline string: lyrics of entire song
        ALGO:
            call `verses`, passing integers 0 thru 99 by unpacking a range object
        '''


if __name__ == '__main__':
    x = '''The quick brown fox
'''
    y = "The quick brown fox\n"
    print(x == y)