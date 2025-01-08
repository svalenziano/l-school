from contextlib import contextmanager
import psycopg2
import logging
from psycopg2.extras import (
    DictCursor, 
    RealDictCursor,
)

LOG_FORMAT = '%(asctime)s - %(levelname)s - %(message)s'
logging.basicConfig(level=logging.INFO,
                    format=LOG_FORMAT)
logger = logging.getLogger(__name__)

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

    def find_list(self, list_id):
        query = "SELECT * FROM lists WHERE ID = %s"
        logger.info("Executing the query %s with list_id %s", query, list_id)
        print("🔴")
        with self._database_connect() as con: 
            with con.cursor(cursor_factory=DictCursor) as cur:
                cur.execute(query, (list_id,))
                result = dict(cur.fetchone())
        todos = self._find_todos_for_list(list_id)
        result.setdefault('todos', todos)
        return result
    
    def _find_todos_for_list(self, list_id):
        query = """
                SELECT * FROM todos
                    WHERE list_id = %s   
                """
        logger.info("Executing the query %s with list_id %s", query, list_id)
        with self._database_connect() as con:
            with con.cursor(cursor_factory=DictCursor) as cur:
                cur.execute(query, (list_id, ))
                result = cur.fetchall()
        return result

    def all_lists(self):
        query = "SELECT * FROM lists"
        logger.info("Executing the query: %s", query)
        with self._database_connect() as conn:
            with conn.cursor(cursor_factory=DictCursor) as cursor:
                cursor.execute(query)
                results = cursor.fetchall()
        results = [dict(row) for row in results]
        for row in results:
            row.setdefault('todos', [])
        return results

    
    def create_list(self, title:str):
        """
        LOG
        Create cursor
        Execute INSERT statement
        No return value
        """
        query = "INSERT INTO lists (title) VALUES (%s)"
        logger.info("Executing the query: %s", query)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (title,))


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
    print(x.all_lists())
    print(x._find_todos_for_list(1))
    breakpoint()
    # print(x.find_list(1))