import tomllib

class Series:
    
    with open("p10.toml", 'rb') as f:
        MESSAGES = tomllib.load(f)
    
    def __init__(self, numeric_string:str):
        if not isinstance(numeric_string, str):
            raise TypeError(self.MESSAGES['error_numeric_str'])
        
        try:
            int(numeric_string)
        except ValueError:
            raise ValueError(self.MESSAGES['error_numeric_str'])
        
        self._numeric_string = numeric_string

    def slices(self, slice_length:int):
        nums = [int(digit) for digit in self._numeric_string]

        if slice_length > len(nums):
            raise ValueError(self.MESSAGES['error_over_length'])
        
        return [nums[start_idx: start_idx + slice_length]
                for start_idx in range(len(nums) - slice_length + 1)]