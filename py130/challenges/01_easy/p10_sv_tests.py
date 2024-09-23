import unittest
from p10_series import Series

class TestSeries(unittest.TestCase):
    def test_constructor_valid(self):
        a = Series('12345')
        b = Series('1')
        c = Series('230948202')
        for series in [a, b, c]:
            self.assertIsNotNone(series)

    # @unittest.skip("Optional string to describe reason for skipping")
    def test_constructor_invalid(self):
        with self.assertRaises(TypeError,
                               msg="Non-string should raise error"):
            Series(123)
        with self.assertRaises(ValueError):
            Series('abc')
            print('Non-numeric string should raise ValueError')
    



if __name__ == '__main__':
    unittest.main()
    runner = unittest.TextTestRunner()
