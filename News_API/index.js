import dotenv from "dotenv"
import express from "express"
import articlesRouter from "./routes/articles.js"
import breakingEventsRouter from "./routes/breakingEvents.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use("/api/articles", articlesRouter)
app.use("/api/breaking-events", breakingEventsRouter)

app.get("/api", (req, res) => {
    res.send(`
        <h1>API Documentation - News API</h1>
    
    <div class="endpoint">
        <h2>/api/articles</h2>
        <p>Recupera una lista de artículos de noticias basados en los parámetros de búsqueda y filtrado proporcionados.</p>
        
        <div class="parameter">
            <strong>Parámetros de consulta:</strong>
            <ul>
                <li><code>query</code> (string) - Término de búsqueda para filtrar artículos por palabra clave.</li>
                <li><code>category</code> (string) - Categoría de noticias para filtrar (por ejemplo, 'technology', 'sports').</li>
                <li><code>language</code> (string) - Código de idioma (ISO 639-1). Por defecto, 'en'.</li>
                <li><code>page</code> (int) - Número de página para la paginación. Por defecto, '1'.</li>
                <li><code>pageSize</code> (int) - Número de artículos por página. Por defecto, '10'.</li>
                <li><code>fromDate</code> (string) - Fecha de inicio para filtrar artículos ('YYYY-MM-DD').</li>
                <li><code>toDate</code> (string) - Fecha de finalización para filtrar artículos ('YYYY-MM-DD').</li>
            </ul>
        </div>

        <div class="code">
            <strong>Ejemplo de uso:</strong> /api/articles?query=bitcoin&category=technology&page=1&pageSize=10
        </div>
    </div>

    <div class="endpoint">
        <h2>/api/articles/:id</h2>
        <p>Recupera un artículo específico por su ID.</p>
        
        <div class="code">
            <strong>Ejemplo de uso:</strong> /api/articles/123456
        </div>
    </div>

    <div class="endpoint">
        <h2>/api/breaking-events</h2>
        <p>Recupera eventos de última hora basados en los parámetros de búsqueda y filtrado proporcionados.</p>
        
        <div class="parameter">
            <strong>Parámetros de consulta:</strong>
            <ul>
                <li><code>language</code> (string) - Código de idioma (ISO 639-1). Por defecto, 'en-US'.</li>
                <li><code>region</code> (string) - Región de los eventos. Por defecto, 'us'.</li>
                <li><code>category</code> (string) - Categoría de eventos.</li>
                <li><code>page</code> (int) - Número de página para la paginación. Por defecto, '1'.</li>
                <li><code>pageSize</code> (int) - Número de eventos por página. Por defecto, '10'.</li>
            </ul>
        </div>

        <div class="code">
            <strong>Ejemplo de uso:</strong> /api/breaking-events?language=en-US&region=us&page=1&pageSize=10
        </div>
    </div>
        `)

    }
)

app.listen(PORT, () => {
    console.clear()
    console.log(`Server running on port ${PORT}`)
})