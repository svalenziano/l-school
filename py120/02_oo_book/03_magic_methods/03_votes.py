class Candidate:

    def __init__(self, name):
        self._votes = 0
        self._name = name
        

    def __iadd__(self, number):
        self._votes += number

    def __repr__(self):
        return f"Candidate({repr(self.name)})"
    
    def __lt__(self, other):
        if not isinstance(other, Candidate):
            return NotImplemented
        return self.votes < other.votes

    @property
    def votes(self):
        return self._votes
    
    @property
    def name(self):
        return self._name

class Election:

    def __init__(self, candidates):
        self.candidates = sorted(list(candidates), reverse=True)
        # Calc total votes
        votes = [c.votes
                 for c in self.candidates]
        self._total_votes = sum(votes)


    def results(self):
        for c in self.candidates:
            print(f"{c.name}: {c.votes} votes")
        print()
        print(self.get_winner_msg())
            

    def get_winner_msg(self):
        self.candidates.sort(reverse=True)  # ensure list is sorted
        winner = self.candidates[0]
        percentage = round(winner.votes / self._total_votes * 100, 1)
        return f"{winner.name} won: {percentage}% of votes"

mike_jones = Candidate('Mike Jones')
susan_dore = Candidate('Susan Dore')
kim_waters = Candidate('Kim Waters')

candidates = {    # set of Candidate objects
    mike_jones,
    susan_dore,
    kim_waters,
}

votes = [
    mike_jones,
    susan_dore,
    mike_jones,
    susan_dore,
    susan_dore,
    kim_waters,
    susan_dore,
    mike_jones,
]

for candidate in votes:   #  addition operation on Candidate objects
    candidate += 1

#for c in candidates:
#    print(c.__dict__)

election = Election(candidates)  # create election object that accepts set of candidates
print(election.results())        # invoke `results` method of Election object