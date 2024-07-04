import yaml

with open('tic_tac_toe.yaml', 'r') as file:
	dict_from_yaml = yaml.safe_load(file)
	
print(type(dict_from_yaml))
print(dict_from_yaml)
print(dict_from_yaml['intro_text'])