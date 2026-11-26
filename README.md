# FSD2 Lab — 14 Programs

Public repository. No GitHub login required for cloning.

```bash
git clone https://github.com/bhavana2007/FSD2-lab.git
cd FSD2-lab
```

| Question | Topic | Folder |
|---|---|---|
| 1 | Routing and parameters | `express-routing` |
| 2 | GET POST DELETE | `express-http-methods` |
| 3 | Middleware and login | `express-middleware-login` |
| 4 | Student profile | `react-student-profile` |
| 5 | Props and counter | `react-counter` |
| 6 | Subjects list | `react-subjects-list` |
| 7 | Page routing | `react-router` |
| 8 | useState student name | `react-usestate` |
| 9 | Student form and details | `react-student-form` |
| 10 | MongoDB CRUD | `mongodb-crud` |
| 11 | MongoDB find sort limit | `mongodb-queries` |
| 12 | Mongoose student | `mongoose-student` |
| 13 | Todo list | `react-todo` |
| 14 | Quiz app | `react-quiz` |

## ExpressJS (Q1–3)

```bash
cd express-routing
npm install
npm start
```
Open http://localhost:3000. Stop using Ctrl+C.

## React (Q4–9, Q13–14)

```bash
cd react-counter
npm install
npm run dev
```
Open Vite's displayed URL (usually http://127.0.0.1:5173).

## MongoDB (Q10–11)
Start MongoDB and open `mongosh`. Paste the commands from `mongodb-crud/queries.js` or `mongodb-queries/queries.js` into `mongosh`. Do not run these with Node.

## Mongoose (Q12)
Start MongoDB server, then:
```bash
cd mongoose-student
npm install
npm start
```

## Example: Q1 and Q5
```bash
git clone https://github.com/bhavana2007/FSD2-lab.git
cd FSD2-lab
cd express-routing
npm install
npm start
```
After stopping with Ctrl+C:
```bash
cd ../react-counter
npm install
npm run dev
```

Requires Git, Node.js, npm and an internet connection for dependency installation; MongoDB/mongosh are required for database questions. No `node_modules` files are committed. Each folder has a README.
