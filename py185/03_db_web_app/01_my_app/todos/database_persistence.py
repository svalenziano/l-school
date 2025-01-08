import os
from contextlib import contextmanager
import psycopg2
from textwrap import dedent
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
        self.setup_schema()

    @contextmanager
    def _database_connect(self):
        
        if os.environ.get("LS_DEV_MACHINE").lower() == 'true':
            connection = psycopg2.connect(dbname='todos')
        else:
            connection = psycopg2.connect(os.environ('DATABASE_URL'))

        try:
            with connection:
                yield connection
        finally:
            connection.close()

    def setup_schema(self):
        """
        Check for necessary tables.  Set them up, if they don't exist.
        """
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute("""
                            SELECT COUNT(*) FROM information_schema.tables
                            WHERE table_schema = 'public'
                                AND table_name = 'lists'
                            """)
                if cur.fetchone()[0] == 0:
                    cur.execute("""
                                CREATE TABLE lists (
                                    id serial PRIMARY KEY,
                                    title text NOT NULL
                                );
                                """)
                cur.execute("""
                            SELECT COUNT(*) FROM information_schema.tables
                            WHERE table_schema = 'public'
                                AND table_name = 'todos'
                            """)
                if cur.fetchone()[0] == 0:
                    cur.execute("""
                                CREATE TABLE todos (
                                    id serial PRIMARY KEY,
                                    title text NOT NULL,
                                    completed boolean NOT NULL DEFAULT false,
                                    list_id int NOT NULL
                                        REFERENCES lists(id)
                                        ON DELETE CASCADE
                                );
                                """)

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
        query = dedent("""
                SELECT * FROM todos
                    WHERE list_id = %s   
                """)
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
        query = "INSERT INTO lists (title) VALUES (%s)"
        logger.info("Executing the query: %s", query)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (title,))


    def update_list_by_id(self, list_id, title:str):
        query = "UPDATE lists SET title = %s WHERE id = %s"
        logger.info("Executing the query %s with list_id=%s and title=%s", 
                    query, list_id, title)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (title, list_id))

    def delete_list(self, list_id):
        query = """
                DELETE FROM lists WHERE id = %s;
                """
        logger.info("Executing the query %s with list_id=%s", query, list_id)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (list_id,))
        

    def create_todo(self, list_id, todo_title):
        query = """
                INSERT INTO todos (title, list_id) VALUES (%s, %s)
                """
        logger.info("Executing the query %s with list_id=%s and todo_title=%s", 
                    query, list_id, todo_title)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (todo_title, list_id))

    def find_todo_by_id(self, todo_id, list_id):
        query = "SELECT * FROM todos WHERE list_id = %s and id = %s"
        logger.info("Executing query %s with id=%s and list_id=%s",
                    query, todo_id, list_id)
        with self._database_connect() as con:
            with con.cursor(cursor_factory=DictCursor) as cur:
                cur.execute(query, (list_id, todo_id))
                result = cur.fetchone()
        logger.info("Result: %s", result)
        return result

    def delete_todo_by_id(self, todo_id, list_id):
        query = "DELETE FROM todos WHERE list_id = %s and id = %s"
        logger.info("Executing query %s with id=%s and list_id=%s",
                    query, todo_id, list_id)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (list_id, todo_id))

    def update_todo_by_id(self, todo_id, list_id, new_status):
        query = """UPDATE todos SET completed = %s
                        WHERE list_id = %s AND id = %s
                """
        logger.info("Executing query %s with id=%s and list_id=%s",
                    query, new_status, todo_id, list_id)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (new_status, list_id, todo_id))

    def mark_all_todos_completed(self, list_id):
        query = "UPDATE todos SET completed = true WHERE list_id = %s"
        logger.info("Executing query %s with list_id %s", query, list_id)
        with self._database_connect() as con:
            with con.cursor() as cur:
                cur.execute(query, (list_id,))



if __name__ == '__main__':
    x = DatabasePersistence()
    print(x.all_lists())
    print(x._find_todos_for_list(1))
    breakpoint()
    # print(x.find_list(1))