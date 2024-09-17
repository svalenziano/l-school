'''
Write a program that, given a word, computes the Scrabble score for that word.


You'll need the following tile scores:
Letter 	                        Value
A, E, I, O, U, L, N, R, S, T 	1
D, G 	                        2
B, C, M, P 	                    3
F, H, V, W, Y 	                4
K 	                            5
J, X 	                        8
Q, Z 	                        10

How to Score

Sum the values of all the tiles used in each word. For instance, lets consider the word CABBAGE which has the following letters and point values:

    3 points for C
    1 point for each A (there are two)
    3 points for B (there are two)
    2 points for G
    1 point for E

P
    - Strip whitespace before cacluating values
    - Case insenstive
    - falsy values = 0 score
E
D
    - Dictionary of values
'''

'''
A
    - points = []
    - for letter in word
        - For key, value in dict:
            - if letter in key:
                - append `value` to points
    - return sum of `points`
'''

class Scrabble:
    scores = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10,
}
    
    @classmethod
    def calculate_score(cls, tiles:str):
        points = []
        for tile in tiles:
            found = False
            for letters, score in Scrabble.scores.items():
                if tile.upper() in letters:
                    points.append(score)
                    found = True
            if not found:
                raise ValueError(f"Tile value {tile} not found" +
                                 f" in `scores`!")
        return sum(points)
    
    
    def __init__(self, tiles:str):
        try:
            tiles = tiles.strip()
        except AttributeError:
            tiles = ''
        self._tiles = tiles
    
    def score(self):
        return Scrabble.calculate_score(self._tiles)
    

if __name__ == '__main__':
    test = Scrabble('aeiouX')
    print(test.score())
    print(Scrabble.calculate_score('test'))