class Bike:
    def ride(self):
        return "Let's ride!"

class MountainBike(Bike):
    def ride(self):
        # return f"{super().ride()} Over rocks!"
        return f"{Bike.ride('123')} Over rocks!"

mtb = MountainBike()
print(mtb.ride())