class Transport():

    def __init__(self, name:str) -> None:
        self.name = name
        self.type = type(self).__name__
        print(f"New {self.type} object called {name}!")

class CoolBike(Transport):
    
    def wheelie(self, distance):
        print(f"{self.name} just pulled a sick {distance} meter-long wheelie, yo!")

gertrude = CoolBike('Gertrude')
gertrude.wheelie(666)