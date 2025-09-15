# Aseguradora Backend

CRUD de pólizas de seguros (Node.js + Express + MongoDB Atlas).

## Campos
- numeroPoliza (String, único)
- tipoSeguro (String: Auto, Vida, Hogar, Salud)
- titular (String)
- monto (Number)

## Instalación
npm install

## Ejecutar
- Copia .env.example a .env y completa MONGO_URI
- npm run dev

## Rutas
POST   /api/policies
GET    /api/policies
GET    /api/policies/:id
PUT    /api/policies/:id
DELETE /api/policies/:id
