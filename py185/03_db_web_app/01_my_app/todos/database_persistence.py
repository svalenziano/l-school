from contextlib import contextmanager
import psycopg2
from psycopg2.extras import DictCursor, RealDictCursor


class DatabasePersistence:
  
    def __init__(self):
        pass

    @contextmanager
    def _database_connect(self):
        try:
            with psycopg2.connect(dbname='todos') as connection:
                yield connection
        finally:
            connection.close()

    def find_list_by_id(self, list_id):
        query = "SELECT * FROM lists WHERE ID = %s"
        with self._database_connect() as con: 
            with con.cursor(cursor_factory=DictCursor) as cur:
                cur.execute(query, (list_id,))
                result = dict(cur.fetchall())
        result.setdefault('todos', [])
        return result

    def all_lists(self):
        query = "SELECT * FROM lists"
        with self._database_connect() as conn:
            with conn.cursor(cursor_factory=DictCursor) as cursor:
                cursor.execute(query)
                results = cursor.fetchall()
        results = [dict(row) for row in results]
        for row in results:
            row.setdefault('todos', [])
        return results

    
    def create_list(self, title:str):
        pass

    def update_list_by_id(self, list_id, title:str):
        pass

    def delete_list(self, list_id):
        pass

    def create_todo(self, list_id, todo_title):
        pass

    def find_todo_by_id(self, todo_id, list_id):
        pass

    def delete_todo_by_id(self, todo_id, list_id):
        pass

    def update_todo_by_id(self, todo_id, list_id, new_status):
        pass

    def mark_all_todos_completed(self, list_id):
        pass


if __name__ == '__main__':
    x = DatabasePersistence()
    # print(x.all_lists())
    print(x.find_list_by_id(1))