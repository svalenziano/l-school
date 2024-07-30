class PaintJobMixin:

    @property
    def color(self):
        return self._color
    
    @color.setter
    def color(self, color):
        self._color = color