def execute_login(f):
    @wraps(f)
    def decorated_func(self, *args, **kwargs):
        with self.client.session_transaction() as session:
            session['username'] = "admin"
        return f(self, *args, **kwargs)
    return decorated_func

@execute_login
def test_editing_document(self):
    response = self.client.get("/changes.txt/edit")
    self.assertEqual(200, response.status_code)