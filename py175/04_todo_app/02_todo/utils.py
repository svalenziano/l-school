from flask import g, flash

def title_len_valid(title, min, max):
    if min <= len(title) <= max:
        # flash(f'length {len(title)} is valid (btw {min} and {max})', category='info')
        return True
    
    flash((f'☹️ Name must be between {min} ' +
               f'and {max} characters long'), 
               category='error')
    return False

def title_unique(title:str, lists):
    list_titles = (lst['title'] for lst in lists)
    if title in list_titles:
        flash('List name already exists!  Please choose a unique name.', 
              'error')
        return False
    return True
