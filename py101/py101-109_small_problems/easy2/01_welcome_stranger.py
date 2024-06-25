
def greetings(name_list, career_dict):
    return(f"Hello, {' '.join(name_list)}'! " 
           f"Nice to have a {career_dict['title']} "
           f"{career_dict['occupation']} around."

    )

def test():
    print(greetings([1,2,3]))

def main():
    greeting = greetings(
    ["John", "Q", "Doe"],
    {"title": "Master", "occupation": "Plumber"},
    )
    print(greeting)
    # Hello, John Q Doe! Nice to have a Master Plumber around.


if __name__ == "__main__":
    main()