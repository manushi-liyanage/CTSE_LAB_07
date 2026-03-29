# Azure Microservices Starter Repo

This starter repo contains:

- `gateway/` - Node.js Express API for Azure Container Apps
- `frontend/` - simple static frontend for Azure Static Web Apps

## Local structure

```text
azure-microservices-starter/
├── gateway/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
└── frontend/
    └── index.html
```

## Build Docker image

```powershell
docker build -t <registry-name>.azurecr.io/gateway:v1 .\gateway
```

## Run locally

```powershell
docker run -p 3000:3000 <registry-name>.azurecr.io/gateway:v1
```

Then open:
- `http://localhost:3000/`
- `http://localhost:3000/health`
- `http://localhost:3000/api/message`

## Static Web App note

Because this frontend is plain HTML, use:

```powershell
az staticwebapp create --name sliit-frontend-app --resource-group microservices-rg --location eastus --source https://github.com/<your-username>/<your-repo> --branch main --app-location "/frontend" --output-location ""
```

After deployment, edit `frontend/index.html` and change `API_BASE_URL` from `http://localhost:3000` to your deployed gateway URL, then push the change to GitHub.
