# Utiliza una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]