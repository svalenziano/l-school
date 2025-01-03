import psycopg2
from psycopg2 import extras

connection = psycopg2.connect(dbname='ls185_1_4')

try:
    with connection:
        with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
            cursor.execute('''
                            SELECT genre, count(id) FROM films
                            WHERE duration < 110
                            GROUP BY genre;''')
            films = cursor.fetchall()
finally:
    connection.close()

for film in films:
    print(f"{film['genre'].rjust(10)} | {film['count']}")