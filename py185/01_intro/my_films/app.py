import psycopg2
from psycopg2 import extras

try:
    with psycopg2.connect(dbname='ls185_1_4') as connection:
        with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
            cursor.execute('''
                            SELECT * FROM films JOIN directors
                            ON films.director_id = directors.id
                            WHERE name = 'Sidney Lumet';
            ''')
            x = cursor.fetchall()
            print(x)
finally:
    connection.close()
    
