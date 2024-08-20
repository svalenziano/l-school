class PaintJobMixin:

    @property
    def color(self):
        return self._color.replace("Assigned by Mixin: ", '')
    
    @color.setter
    def color(self, color):
        self._color = "Assigned by Mixin: " + color