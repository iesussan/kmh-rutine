---
applyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx,**/*.css"
---

# 🌀 Buenas Prácticas – Tailwind CSS + React

Esta guía define el estándar de estilo para trabajar con **Tailwind CSS** en proyectos **React**. Se enfoca en mantener **legibilidad**, **reusabilidad** y **coherencia estética** usando herramientas como `clsx`, `@apply`, y buenas prácticas con **React Router** para navegación.

**⚠️ IMPORTANTE: Esta guía ha sido actualizada basada en errores comunes identificados en el diagnóstico del proyecto.**

---

## ✅ Versión Recomendada de Tailwind

* **ACTUALIZADO:** Usa la versión **3.4.x** de Tailwind CSS (versión estable probada).
* **EVITAR:** Tailwind 4.x puede causar incompatibilidades con PostCSS.

* Cambios de sintaxis respecto a versiones anteriores:

  | ❌ Tailwind Antiguo      | ✅ Tailwind 3.4.x |
  | ------------------------ | ------------------ |
  | `bg-black bg-opacity-50` | `bg-black/50`      |
  | `text-opacity-75`        | `text-black/75`    |

* Al usar `@apply`, asegúrate de que las clases sean compatibles con Tailwind 3.4.x.

* Ejecuta `npm run build` después de cambios en CSS para validar la compilación.

---

## 🛠️ Instalación Base

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
npx tailwindcss init -p
```

### Configuración de ES Modules

**⚠️ CRÍTICO:** Para evitar errores de módulos, asegúrate de configurar ES Modules correctamente:

#### `package.json`
```json
{
  "name": "my-app",
  "type": "module",
  // ...resto de la configuración
}
```

### `tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### `postcss.config.js`
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

### `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📦 Organización del Proyecto

```
/src
├── components/
├── pages/
├── layouts/
├── hooks/            # Custom hooks
├── services/         # Llamadas a APIs y lógica de negocio
├── context/          # Contextos de React
├── utils/            # Utilidades
├── App.jsx
├── main.jsx
└── index.css
```

## 📋 Dependencias Recomendadas

### Dependencias principales
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.1",
    "axios": "^1.6.2",
    "@heroicons/react": "^2.0.18",
    "react-hook-form": "^7.48.2",
    "zod": "^3.22.4",
    "@hookform/resolvers": "^3.3.2",
    "clsx": "^2.0.0"
  }
}
```

### Dependencias de desarrollo
```json
{
  "devDependencies": {
    "vite": "^5.0.8",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16",
    "@vitejs/plugin-react": "^4.2.1",
    "jest": "^29.7.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^6.1.5"
  }
}
```

**⚠️ NOTA:** Las versiones especificadas han sido probadas y validadas para evitar conflictos de compatibilidad.

---

## 📂 Rutas con React Router

```bash
npm install react-router-dom
```

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

---

## 🎨 Buenas prácticas con Tailwind + React

### ✅ Usa `clsx` para condiciones

```bash
npm install clsx
```

```jsx
import { clsx } from "clsx";

const Button = ({ active }) => (
  <button className={clsx(
    "px-4 py-2 rounded text-white",
    active ? "bg-blue-500" : "bg-gray-400"
  )}>
    Click me
  </button>
);
```

### ✅ Usa `@apply` en archivos CSS para clases reusables

```css
/* styles/button.css */
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
```

```jsx
import "../styles/button.css";
<button className="btn-primary">Guardar</button>
```

### ❌ Evita usar demasiadas clases inline

```jsx
// ❌ Muy largo
<div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between" />

// ✅ Divide estilos o usa @apply / componentes
```

---

## 🚫 Deprecaciones en Tailwind 4

| Obsoleto         | Reemplazo Sugerido |
| ---------------- | ------------------ |
| `bg-opacity-*`   | `bg-black/50`      |
| `text-opacity-*` | `text-black/75`    |

---

## 💡 Tips Extra

* Define componentes visuales reutilizables (`Button`, `Card`, `Input`)
* Usa clases condicionales con `clsx` o `classnames`
* Prefiere el uso de layouts para organizar zonas comunes (header, sidebar)
* Aplica estructura de rutas con `<Outlet />` para layouts anidados




# Validación de Formularios – React Hook Form + Zod + Tailwind

Esta guía define el estándar para validar formularios en proyectos React/Next.js usando `react-hook-form`, `zod` y estilos con `@apply` de TailwindCSS. Ideal para garantizar formularios robustos, accesibles y con diseño consistente.

---

## Librerías necesarias

Debes verificar que las dependencias estén instaladas en tu proyecto. Si no las tienes, puedes instalarlas con el siguiente comando:

```bash
npm install react-hook-form zod @hookform/resolvers
```

**⚠️ NOTA:** Estas dependencias ya están incluidas en las dependencias recomendadas de este proyecto.

---

## Estructura recomendada

```
/components
  FormularioContacto.tsx
/lib
  validaciones.ts
/styles
  components.css
```

---

## Estilos base con Tailwind + @apply

```css
@import "tailwindcss";
/* components.css */
.input {
  @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition;
}

.input-error {
  @apply border-red-500 ring-red-500;
}

.label {
  @apply block text-sm font-medium text-gray-700;
}

.error-text {
  @apply text-sm text-red-600 mt-1;
}

.btn {
  @apply bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition;
}
```

---

## Definición del esquema con Zod

```ts
// lib/validaciones.ts
import { z } from "zod";

export const formularioSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  edad: z.coerce.number().min(18, "Debes ser mayor de edad"),
});

export type FormularioInput = z.infer<typeof formularioSchema>;
```

---

## Componente de formulario usando react-hook-form

```tsx
// components/FormularioContacto.tsx
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formularioSchema, FormularioInput } from "../lib/validaciones";
import "../styles/components.css";

export function FormularioContacto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioInput>({
    resolver: zodResolver(formularioSchema),
  });

  const onSubmit = (data: FormularioInput) => {
    console.log("Datos validados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="label">Nombre</label>
        <input type="text" {...register("nombre")} className={`input ${errors.nombre ? 'input-error' : ''}`} />
        {errors.nombre && <p className="error-text">{errors.nombre.message}</p>}
      </div>

      <div>
        <label className="label">Email</label>
        <input type="email" {...register("email")} className={`input ${errors.email ? 'input-error' : ''}`} />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>

      <div>
        <label className="label">Edad</label>
        <input type="number" {...register("edad")} className={`input ${errors.edad ? 'input-error' : ''}`} />
        {errors.edad && <p className="error-text">{errors.edad.message}</p>}
      </div>

      <button type="submit" className="btn">Enviar</button>
    </form>
  );
}
```

---

## 🚨 Troubleshooting y Configuración de Módulos

### Problema común: Error de ES Modules

Si encuentras el error:
```
Warning: To load an ES module, set "type": "module" in the package.json
```

**Solución:**
1. Agrega `"type": "module"` en tu `package.json`
2. Usa sintaxis ES6 en todos los archivos de configuración

### Configuración correcta de archivos

#### ✅ Para proyectos con `"type": "module"` (Recomendado para Vite)
```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}

// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### ❌ Evitar CommonJS en proyectos con Vite
```js
// ❌ NO usar en proyectos con "type": "module"
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Validación de configuración
```bash
# Después de cualquier cambio de configuración
npm run build  # Verificar que compile sin errores
npm run dev    # Verificar que el servidor inicie correctamente
```

---

## 📝 Notas Importantes Basadas en Diagnóstico de Errores

### Errores Comunes y Prevención

1. **Error de ES Modules:**
   - Siempre incluir `"type": "module"` en `package.json` cuando uses Vite
   - Usar `export default` en lugar de `module.exports` para archivos de configuración

2. **Error de PostCSS con Tailwind 4.x:**
   - Preferir Tailwind CSS 3.4.x por estabilidad y compatibilidad
   - Validar que todas las herramientas del build sean compatibles entre sí

3. **Versionado de Dependencias:**
   - Usar las versiones específicas recomendadas en esta guía
   - Evitar versiones bleeding-edge en proyectos de producción

### Comandos de Validación

Después de configurar el proyecto, ejecuta estos comandos para validar:

```bash
npm install          # Instalar dependencias
npm run build        # Verificar que compile sin errores
npm run dev          # Verificar que el servidor inicie correctamente
```

### Referencias

- [Diagnóstico completo de errores](../../../FRONT_DIAGNOSTIC.md)
- [Dependencias recomendadas](../../../GUIDELINES.md#frontend-react)