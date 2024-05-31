import datetime

age = int(input("What is your age? ") or 36)
retire_age = int(input("At what age would you like to retire? ") or 65)
years_left = retire_age - age
#current_year = int(datetime.date.today().isoformat()[0:4])
current_year = datetime.date.today().year

print(f"It's {current_year}. You will retire in {current_year + years_left}.")
print(f"You only have {years_left} years of work to go!")