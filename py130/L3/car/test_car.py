import unittest
from car import Car

class CarTest(unittest.TestCase):

    @unittest.skip
    def test_wheels2(self):
        car = Car()
        self.assertEqual(3, car.wheels)
    
    @unittest.skip
    def test_wheels3(self):
        car = Car()
        self.assertEqual(2, car.wheels)
    
    def test_wheels(self):
        car = Car()
        self.assertEqual(car.wheels, 4)

if __name__ == '__main__':
    unittest.main()