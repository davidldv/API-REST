import app from "./app.js"; // Importamos app de app.js
import { config } from "dotenv"; // Importamos dotenv para gestionar variables de entorno

console.clear(); // Limpiamos la consola para mantener el log limpio

config(); // Cargamos las variables de entorno desde el archivo .env

const PORT = process.env.PORT || 3001; // Definimos que el puerto será el 3001 o el que nos dé el servidor

// Documentacion de la API
app.get("/api", (req, res) => {
    res.send(`
        <h1>Github API Documentation</h1>
        
        <div class="endpoint">
            <h2>1. Get User Information</h2>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Endpoint:</strong> <code>/api/github/user/:username</code></p>
            <div class="params">
                <h3>Path Parameters:</h3>
                <div class="param-item"><span>:username</span> (string) - GitHub username to get information about.</div>
            </div>
            <div class="queries">
                <h3>Query Parameters (Optional):</h3>
                <div class="query-item"><span>include_repos</span> (boolean) - Whether to include details about the user's public repositories. Default is <code>false</code></div>
            </div>
            <div class="examples">
                <h3>Example:</h3>
                <code>/api/github/user/username?include_repos=true</code>
            </div>
            <div class="errors">
                <h3>Possible Errors:</h3>
                <div class="error-item"><span>404 Not Found:</span> The provided username does not exist.</div>
                <div class="error-item"><span>400 Bad Request:</span> The parameter <code>username</code> is not valid.</div>
                <div class="error-item"><span>500 Internal Server Error:</span> Server error while processing the request.</div>
            </div>
        </div>

        <div class="endpoint">
            <h2>2. Get User Repositories</h2>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Endpoint:</strong> <code>/api/github/user/:username/repos</code></p>
            <div class="params">
                <h3>Path Parameters:</h3>
                <div class="param-item"><span>:username</span> (string) - GitHub username to get repositories for.</div>
            </div>
            <div class="queries">
                <h3>Query Parameters (Optional):</h3>
                <div class="query-item"><span>sort</span> (string) - Criterion to sort repositories. Possible values: <code>created</code> <code>updated</code> <code>pushed</code> <code>full_name</code> Default is <code>full_name</code></div>
                <div class="query-item"><span>direction</span> (string) - Direction of sorting. Possible values: <code>asc</code> <code>desc</code> Default is <code>asc</code></div>
            </div>
            <div class="examples">
                <h3>Example:</h3>
                <code>/api/github/user/username/repos?sort=updated&direction=desc</code>
            </div>
            <div class="errors">
                <h3>Possible Errors:</h3>
                <div class="error-item"><span>404 Not Found:</span> The provided username does not exist.</div>
                <div class="error-item"><span>400 Bad Request:</span> The parameter <code>username</code> is not valid.</div>
                <div class="error-item"><span>500 Internal Server Error:</span> Server error while processing the request.</div>
            </div>
        </div>

        <div class="endpoint">
            <h2>3. Get Repository Details</h2>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Endpoint:</strong> <code>/api/github/user/:username/repos/:repo</code></p>
            <div class="params">
                <h3>Path Parameters:</h3>
                <div class="param-item"><span>:username</span> (string) - GitHub username.</div>
                <div class="param-item"><span>:repo</span> (string) - Name of the repository.</div>
            </div>
            <div class="examples">
                <h3>Example:</h3>
                <code>/api/github/user/:username/repos/:repo</code>
            </div>
            <div class="errors">
                <h3>Possible Errors:</h3>
                <div class="error-item"><span>404 Not Found:</span> The provided repository does not exist.</div>
                <div class="error-item"><span>400 Bad Request:</span> The parameter <code>username</code> or <code>repo</code> is not valid.</div>
                <div class="error-item"><span>500 Internal Server Error:</span> Server error while processing the request.</div>
            </div>
        </div>
        `)
})

// Iniciamos el servidor en el puerto definido y mostramos un mensaje de comprobación
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});