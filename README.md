# Expedition App

[LIVE](https://thawing-hamlet-72557.herokuapp.com)

A three-page website for gathering job applications. The front end is entirely *React.js* and the backend is a slimmed-down *Rails* API. A Facebook Login component is implemented for name / email autofill. Google Analytics is used to track A/B testing on two different form types for gathering experience information. All UI is styled with *Material-UI* components.

## Rails Backend

The backend is super simple – there is one route for creating a job application (POST */api/applications*) and one model for storing the job application. The Application model contains some basic validations to make sure that all parts of the job application were completed.

**Schema**

Attribute    | Type
------------ | -----------
email | String
firstName | String
lastName | String
overall_exp | Integer
hvac_exp | Integer
refrigeration_exp | Integer
mechanical_exp | Integer

## React Frontend

This "three page website" is more accurately a one-page site that can render three different components: a landing page, an experience form, and a confirmation page. The state is maintained in the ```App``` component, which conditionally renders the ```Home```, ```Experience```, or ```Confirmation``` component.

### App
This is the biggest component because it stores the state. It is here that the Google Analytics events (using ```react-ga```) are triggered on both component mounting and application submission. If a POST request is not successful, ```validateForm``` is triggered, which assigns errors to text fields on the landing page if they are empty or do not match the email regex.

The rendered component is determined by the value of ```this.state.step``` (0 = Home, 1 = Experience, 2 = Confirmation). Additionally, the Experience form type is randomly determined with 50 / 50 odds and the chosen form is stored as the boolean ```this.state.beta```.

### Home
Home contains most of the copy for the job application in addition to a small controlled form for email, first name, and last name. Users can opt to autofill the form with Facebook Login, which fetches the users email and email. The name is then split into a first and last name and the state is updated to include the information.

### Experience
There are two different Experience forms – one uses select fields and the other uses range sliders (not as pretty because Material-UI v1 has yet to implement the slider, so the CSS I chose is a little hokey). It would be nice to add a scale to the range sliders, but on the other hand it might clutter the form.

There might be a cleaner way to programmatically render the four inputs, but I chose to write it all out with the benefit of a simpler data structure. Would probably want to fix this for scale (store experience name with its key).

Note: Experience maxes out at 10 years.

### Confirmation
A bare bones confirmation page that is displayed if the application was successfully posted to the backend. The user is thanked by name.

## Future Work
* Validations could be better (e.g. more descriptive of the errors)
* Refactor jsx rendering to make the components reusable (```get``` and object of job application questions, ```render``` said questions)

