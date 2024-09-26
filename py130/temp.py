# SETUP
from datetime import datetime
import os.path

datestamp = datetime.now()
datestamp = datestamp.isoformat(timespec='seconds')
lines = '\n'.join(['Fare', 'Thee', 'Well', datestamp, ''])

# 👇 THIS IS THE IMPORTANT STUFF 
directory = os.path.dirname(__file__)      # Get directory without filename
path = os.path.join(directory, 'temp.txt') # Append desired text file filename

try:
    with open(path, 'r', encoding='utf-8') as f:
        # Doing it the easy way
        lines = f.readlines()
        other_count = lines.count('Fare')
        print(f"The other count is: {other_count}.")

        # Doing it the hard way
        count = 0
        x = None
        while x != '':
            while x != 'Fare':
                x = f.readline()
            count += 1
        print(f"End of file reached, count = {count}.")
except IOError as e:
    print(f"{e.__class__.__name__}: {e}")
