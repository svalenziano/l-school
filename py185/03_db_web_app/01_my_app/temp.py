def gimme_5():
	return next((i for i in range(5) if i == 3), None)

print(gimme_5())