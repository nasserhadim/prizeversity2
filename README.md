# How to Setup:

## Prerequisites:

1. Install [Node.js (for backend and frontend)](https://nodejs.org/).

2. Install [MongoDB (for the database)](https://www.mongodb.com/).

3. Install a code editor like [VS Code](https://code.visualstudio.com/).

4. Create Google OAuth Client ID/Secret for `.env` file

> Navigate to: https://console.cloud.google.com/apis/credentials
>
> Make sure to add/register the redirect_uri, e.g. `http://localhost:5000/api/auth/google/callback`. You can do so from the `Project > OAuth 2.0 Client IDs > Authorized redirect URIs > Add URI`
>
> Ref/Tutorial: https://youtu.be/TjMhPr59qn4?si=EKFlIMkQg4Eq6gDo

5. Create Microsoft OAuth Client ID/Secret for `.env` file

> Retrieved via App Registrations on Azure Portal: https://portal.azure.com/?quickstart=True#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
> 
> Make sure to add/register the redirect_uri, e.g. `http://localhost:5000/api/auth/microsoft/callback`. You can do so from the `App Registration > Authentication > Add a (web) platform > Add Web Redirect URI` if you didn't do it initially upon creation of the App registration.
> 
> For supported account types, select `Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)`. This is the associated type of the default `/common` auth API callback Microsoft uses.

## Create Project Folders:

```
prizeversity2/
├── backend/
├── frontend/
└── README.md
```

## Initialize Backend and Frontend:

### Navigate to the backend folder and run:

```
npm init -y
npm install express mongoose passport passport-google-oauth20 passport-microsoft cors dotenv
```

> Create `backend/.env`
>
> Create `backend/server.js`
>
> Create `backend/config/passport.js`
>
> Create `backend/models/User.js`
>
> Add the rest of files as needed!

### Frontend Setup with `Vite`.

#### Create Vite Project

```
npm create vite@latest frontend -- --template react # If prompted for framework, select React, and variant: JavaScript
cd frontend
npm install
npm install axios react-router-dom socket.io-client
```

> Create `frontend/vite.config.js`
>
> Create `frontend/src/main.jsx`
>
> Create `frontend/src/App.jsx`
>
> Create `frontend/src/pages/Home.jsx`

# How to Run it:

> Start MongoDB:

```
mongod
```

> Start the backend:

```
cd backend
node server.js
```

> Start the frontend:

```
cd frontend
npm run dev
```

> Open browser, navigate to: `http://localhost:5173/`
