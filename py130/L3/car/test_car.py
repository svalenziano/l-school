import unittest
from car import Car

class CarTest(unittest.TestCase):
    def test_car_exists(self):
        car = Car()
        self.assertTrue(car is not None)

    def test_wheels(self):
        car = Car()
        self.assertEqual(4, car.wheels)

    def test_name_is_none(self):
        car = Car()
        self.assertIsNone(car.name)

    def test_instance_of_car(self):
        car = Car()
        self.assertIsInstance(car, Car)

    def test_includes_car(self):
        car = Car()
        lst = [1,2,3]
        lst.append(car)
        self.assertIn(car, lst)

    @unittest.skip
    def test_bad_wheels(self):
        car = Car()
        self.assertEqual(3, car.wheels)

if __name__ == '__main__':
    unittest.main()