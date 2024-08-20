import os

# print(__file__)  # print current filepath
# print(os.path.abspath(__file__))  # print absolute filepath 
asset_path = os.path.abspath(f'{__file__}/../assets')
print(asset_path)

image_paths = [f'{asset_path}/kitten.png', f"{asset_path}/puppy.png"]
print(image_paths)