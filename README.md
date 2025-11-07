<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🚀 Ejecuta y Despliega tu Aplicación de AI Studio

Este proyecto contiene todo lo necesario para **ejecutar tu aplicación de Gemini** de manera local y prepararla para el despliegue.

---

## ✨ Ver en AI Studio

Puedes ver, editar y experimentar con el código fuente de esta aplicación directamente en **Google AI Studio** a través del siguiente enlace:

[**Abrir en AI Studio**](https://ai.studio/apps/drive/1HbhsakGRM0FrWsSIjTca_CoWS9GaX5V0)

---

## 💻 Ejecución Local

Sigue estos sencillos pasos para poner en marcha la aplicación en tu entorno local.

### Requisitos

* **Node.js** (versión recomendada: 18 o superior)

### Pasos

1.  **Instala las dependencias** del proyecto:
    ```bash
    npm install
    ```

2.  **Configura tu Clave API:**
    * Obtén tu **Gemini API Key** desde Google AI Studio.
    * Crea o abre el archivo de configuración de entorno **`.env.local`** en la raíz del proyecto.
    * Añade tu clave en ese archivo:
        ```env
        GEMINI_API_KEY="TU_CLAVE_API_DE_GEMINI_AQUI"
        ```

3.  **Ejecuta la aplicación:**
    ```bash
    npm run dev
    ```

La aplicación estará disponible en `http://localhost:3000` (o el puerto que te indique la consola).

---

## 🌐 Despliegue

Este proyecto, al ser una aplicación web estándar de Node.js, es compatible con la mayoría de los servicios de *hosting*. Puedes desplegarla fácilmente en plataformas como **Netlify, Vercel, o Google Cloud Run**.

**Asegúrate de:**
* Establecer la variable de entorno `GEMINI_API_KEY` en la configuración de tu plataforma de despliegue antes de construir (build) la aplicación.

---