def magic_login(self):
    with self.client.session_transaction() as session:
        session['username'] = "admin"

def test_editing_document(self):
    self.magic_login()
    # Test some functionality that requires a logged-in user
    response = self.client.get("/changes.txt/edit")
    self.assertEqual(200, response.status_code)