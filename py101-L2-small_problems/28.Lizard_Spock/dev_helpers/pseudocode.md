# v1
determine_winner(): Decide who wins / loses, update score dict
Print winner
Print score (access dict)
Determine if either user has scored 3 (best of 5)
Print message
... The problem with v1 is that determine_winner() has multiple side-effects.  
... It must update the score, but it must also **return** the winner
... How to resolve?
... 1) I could print the winner (instead of returning it) at the same time I update the dict
... This technically breaks the rule of 'return a useful value or have a side effect but not both' 😟
... 2) One function could return the winner, and another could print and update the score
... However, this method is a little shaky because it relies on passing arguments with precision 😟
... 3) One function updates the score and also the last winner??
... last_winner is a variable
... I think this is the easiest to understand, and also allows for future addition 
... of > 2 player functionality?

# v2
determine_winner(): Decide who wins / loses, 
    update score dict
    update `last_winner` str
Print winner
Print score (access dict)
Determine if either user has scored 3 (best of 5)
Print message

# v3
`SCORE_JUSTIFY` = 15  

SCOREBOARD:
    print_choices()
    print_winner()
    divider()
    blank_line()
    print_scores()
        final score
        'You'.ljust()
        divider()

`winner` = None
`overall_winner` = None
determine_winner(): Decide who wins/loses
    Use return value to update `round_winner` str
update_score():
    Access `round_winner` str and mutate `score` dict
Print winner
Print score
`overall_winner = update_overall_winner()` 
    Determine if either user has scored 3 (best of 5)
        Access `score`
        Return `human` or `computer`
Print message using match case statement

# Options for keeping track of score
    1) global variable list (mutable from within function)
        score = {'human' : 0, 'computer' : 1}
    2) pass score to 







