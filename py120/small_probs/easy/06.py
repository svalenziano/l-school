
# SV Code
class Pet:
    def __init__(self, type, name):
        self.pet_type = type
        self.name = name
    
    @property
    def pet_type(self):
        return self._pet_type
    
    @pet_type.setter
    def pet_type(self, pet_type):
        self._pet_type = pet_type

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, name):
        self._name = name

'''
shelter.adopt
    - Call person.adopt
    - Create list of (pet, person) tuples?
person
    - adopt method
        - add to list of adopted pets
    - number of pets
        - return length of list (of adopted pets)
'''

class Owner:

    def __init__(self, name):
        self.name = name
        self._pets = []

    def adopt(self, pet:Pet):
        self._pets.append(pet)

    def number_of_pets(self):
        return len(self._pets)
    
    @property
    def pets(self):
        return self._pets
    

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, name):
        self._name = name


class Shelter:
    def __init__(self):
        self._adoption_ledger = []

    def adopt(self, owner:Owner, pet:Pet):
        owner.adopt(pet)
        self._adoption_ledger.append((owner, pet))

    @property
    def owners(self):
        return {adoption[0] for adoption in self._adoption_ledger}
    
    def adoptions_by_owner(self, owner):
        return [adoption[1]
                for adoption in self._adoption_ledger
                if adoption[0] == owner]

    def print_adoptions(self):
        if not self.owners:
            print("No adoptions ☹️")
        for owner in self.owners:
            print(f"{owner.name} has adopted the following pets:")
            for pet in self.adoptions_by_owner(owner):
                print(f"a {pet.pet_type} named {pet.name}")
            print()

        

# LS tests

cocoa   = Pet('cat', 'Cocoa')
cheddar = Pet('cat', 'Cheddar')
darwin  = Pet('bearded dragon', 'Darwin')
kennedy = Pet('dog', 'Kennedy')
sweetie = Pet('parakeet', 'Sweetie Pie')
molly   = Pet('dog', 'Molly')
chester = Pet('fish', 'Chester')

phanson = Owner('P Hanson')
bholmes = Owner('B Holmes')

shelter = Shelter()
shelter.adopt(phanson, cocoa)
shelter.adopt(phanson, cheddar)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)



shelter.print_adoptions()
print(f"{phanson.name} has {phanson.number_of_pets()} "
      "adopted pets.")
print(f"{bholmes.name} has {bholmes.number_of_pets()} "
      "adopted pets.")

'''
EXPECTED OUTPUT
P Hanson has adopted the following pets:
a cat named Cocoa
a cat named Cheddar
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
'''

#print(shelter.adoptions_by_owner(phanson))