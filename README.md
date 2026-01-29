# 📅 Calendario de Eventos JCI Tunari

Este proyecto es un **calendario de eventos** para JCI Tunari, integrado con **Google Calendar** y diseñado para ser **responsive**, fácil de usar y navegar en cualquier dispositivo.

---

## 🔹 Características

- Vista semanal de eventos.  
- Búsqueda de eventos en tiempo real.  
- Compatible con dispositivos móviles y desktop.  
- Encabezado (`header`) y pie de página (`footer`) con diseño moderno y sombreado.  
- Integración con Google Calendar a través de iframe.  
- Opcional: uso de **FullCalendar** para más control sobre la visualización de los eventos.

---

## 💻 Tecnologías utilizadas

- HTML5  
- CSS3 (diseño responsive, sombreado y estilos modernos)  
- JavaScript (opcional: `app.js` para funcionalidades extra)  
- [FullCalendar](https://fullcalendar.io/)  
- [ICAL.js](https://ical.js.org/) para importar archivos `.ics`  
- Google Calendar embed

---

## ⚙️ Uso

Abre `index.html` en tu navegador directamente.

---

### 🔹 Personaliza el iframe de Google Calendar

```html
<iframe 
  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&hl=es&ctz=America%2FLa_Paz&showPrint=0&mode=WEEK&src=TU_CALENDAR_ID&color=%23039be5" 
  style="border-width:0" 
  width="100%" 
  height="600" 
  frameborder="0" 
  scrolling="no">
</iframe>
````

---

## 🖌️ Personalización

* Cambia colores de header y footer en `styles.css`.
* Ajusta tamaños de logo y sombra para mobile.
* Agrega o quita padding en `main.container` para que el footer no tape contenido.
* Si quieres control total sobre la semana que empieza en lunes, considera usar **FullCalendar** en lugar del iframe.

---

## 📂 Estructura del proyecto

```
├── index.html         # Página principal
├── styles.css         # Estilos del proyecto
├── app.js             # Scripts opcionales
├── README.md          # Este archivo
└── assets/
    └── logo.png       # Logo del proyecto
```

---

## 👏 Créditos

* [FullCalendar](https://fullcalendar.io/)
* [Google Calendar](https://calendar.google.com/)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

```