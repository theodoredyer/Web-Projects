## Model, View, Controller
Split the application into separate sections that each have their own purpose.

### Controller
Handles request flow, and communicates with the model
Requests data from the model and sends it to the view
Receives presentation from the view and sends it back to the user.

### Model
Handles data logic, and interacts with the database
Sends the data back to the controller to forward to the view

### View
Handles data presentation, dynamically rendered.
sends view information back to the controller to forward to the user

