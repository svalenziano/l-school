from uuid import uuid4

class SessionPersistence:
    def __init__(self, session):
        self.session = session
        if 'lists' not in self.session:
            self.session['lists'] = []

    def find_list_by_id(self, list_id):
        '''Returns matching list, otherwise `None`'''
        return next((lst for lst in self.session['lists']
                     if lst['id'] == list_id), None)
    
    def all_lists(self):
        return self.session['lists']
    
    def create_list(self, title:str):
        '''
        Create a new list and update session

        :title: name for new list
        '''
        self.session['lists'].append({
            'id': str(uuid4()),
            'title': title,
            'todos': [],
        })
        self.session.modified = True

    def update_list_by_id(self, list_id, title:str):
        '''
        Update list title

        Doesn't validate the list title or id.  You should do this elsewhere.
        '''
        lst = self.find_list_by_id(list_id)
        lst['title'] = title
        self.session.modified = True

    def delete_list(self, list_id):
        self.session['lists'] = [lst for lst in self.session['lists']
                        if lst['id'] != list_id]
        self.session.modified = True


