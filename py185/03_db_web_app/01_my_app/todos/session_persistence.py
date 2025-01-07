class SessionPersistence:
    def __init__(self, session):
        self.session = session
        if 'lists' not in self.session:
            self.session['lists'] = []

    def find_list_by_id(self, list_id):
        '''Returns matching list, otherwise `None`'''
        return next((lst for lst in self.session['lists']
                     if lst['id'] == list_id), None)