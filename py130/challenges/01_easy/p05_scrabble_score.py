class Scrabble:
    POINTS = {
        "AEIOULNRST": 1,
        "DG": 2,
        "BCMP": 3,
        "FHVWY": 4,
        "K": 5,
        "JX": 8,
        "QZ": 10,
    }

    def __init__(self, word):
        self.word = word if word else ""

    def score(self):
        letters = [letter for letter in self.word.upper() if letter.isalpha()]

        total = 0
        for letter in letters:
            for all_letters, point in self.POINTS.items():
                if letter in all_letters:
                    total += point
                    break

        return total

    @classmethod
    def calculate_score(cls, word):
        return cls(word).score()