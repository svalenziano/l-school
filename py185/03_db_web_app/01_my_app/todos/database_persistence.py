from contextlib import contextmanager
import psycopg2
from psycopg2.extras import DictCursor


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
        pass
    
    def all_lists(self):
        with self._database_connect(self) as con:
            pass
    
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