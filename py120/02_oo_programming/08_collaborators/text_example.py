class Engine:
    def start(self):
        print('Starting!')

class Car:
    def __init__(self, engine):
        self.engine = engine

    def start(self):
        return self.engine.start()

class Driver:
    def __init__(self, car):
        self.car = car

    def drive(self):
        return self.car.start()

engine = Engine()
car = Car(engine)
driver = Driver(car)
driver.drive()