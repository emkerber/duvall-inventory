# TO DO

## ADMIN

### Admin form to add new questions
- [ ] Form fields for verbiage (textarea), which category (dropdown), and four response option inputs with four question weight sliders
    - [ ] When no category is selected, option inputs and weight sliders are hidden
- [ ] Clicking 'Submit' dispatches to a saga, which sends an HTTP POST
- [ ] question router sends INSERT to db
- [ ] "Saved!" displays in a snackbar when POST is complete
- [ ] HTTP GET fresh set of existing questions
- [ ] Nav bar link for admins
- [ ] view is only accessible by admins

### Admin view of all existing questions
- [ ] on load, dispatch to saga to HTTP GET all existing questions
- [ ] server returns results organized by category
- [ ] render all existing questions with their potential responses and associated weights
    - [ ] questions are grouped by category, under headers for each category
- [ ] Nav bar link for admins
- [ ] view is only accessible by admins

### Admin can update and delete an existing question
- [ ] clicking on a question from the list of all existing questions brings admin user to view with prepopulated form
- [ ] saga handles UPDATE and DELETE HTTP
- [ ] question router sends UPDATE and DELETE statements to db
- [ ] HTTP GET fresh set of existing questions

## USER

### Has user taken assessment?
- [ ] GET user.auth_level and result rows where user_id

### User assessment presents questions one at a time
- [ ] Back button

### When user submits all questions, calculate results
- [ ] Perform logic for calculating each category result
- [ ] POST result for each category into result table

### If user has already taken assessment, their results are displayed instead
- [ ] Text to display results

## STYLE

### Click button in Nav to switch between CSS stylesheets
- [ ] formal style
- [ ] silly style

## DEPLOY
- npm run build
- new Heroku project
- link Heroku project to GitHub repo
- new Heroku PG db
- connect to new db via Postico and create tables
- new env var in Heroku for server_sesh_secret
- "manual deploy"
