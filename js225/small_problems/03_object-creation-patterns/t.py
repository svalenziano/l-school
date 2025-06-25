import Rhino
import os

# Create a headless Rhino document
doc = Rhino.RhinoDoc.CreateHeadless(None)

# Set up options for reading DWG files
options = Rhino.FileIO.FileDwgReadOptions()
options.ImportCurves = False
options.EmbedTexturesInModel = False

# Specify the path to the DWG file
path = os.path.expanduser("~/Desktop/temp/test.dwg")

# Import the DWG file into the document
doc.Import(path, options.ToDictionary())

# Print the number of objects imported
print(f"{doc.Objects.Count} objects")
for obj in doc.Objects:
    bbox = obj.Geometry.GetBoundingBox(True)
    print(f"Center is {bbox.Center}")

# Dispose of the document
doc.Dispose()
