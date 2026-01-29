document.addEventListener("DOMContentLoaded", () => {
    const calendarEl = document.getElementById("calendar");
    const searchEl = document.getElementById("search");
    let allEvents = [];
    let searchTerm = "";

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: "es",
        timeZone: "America/La_Paz",
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,listWeek"
        },
        buttonText: {
            today: "Hoy",
            month: "Mes",
            list: "Agenda"
        },
        events: {
            url: "/calendar", // apunta al mini backend
            format: "ics"
        },
        eventDidMount: (info) => {
            info.el.setAttribute("title", info.event.title);
        },
        eventDidMount: (info) => {
            info.el.setAttribute("title", info.event.title);

            // Aplicar búsqueda
            if (searchTerm && !info.event.title.toLowerCase().includes(searchTerm)) {
                info.el.classList.add("hidden");
            } else {
                info.el.classList.remove("hidden");
            }
        }
    });

    calendar.render();


    // Buscador
    // searchEl.addEventListener("input", (e) => {
    //     searchTerm = e.target.value.toLowerCase();

    //     // Re-renderizar todos los eventos visibles
    //     calendar.getEvents().forEach(event => {
    //         if (event.el) {
    //             if (!searchTerm || event.title.toLowerCase().includes(searchTerm)) {
    //                 event.el.classList.remove("hidden");
    //             } else {
    //                 event.el.classList.add("hidden");
    //             }
    //         }
    //     });
    // });


    searchEl.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const events = calendar.getEvents();

        events.forEach(event => {
            if (!event.el) return;

            if (term && event.title.toLowerCase().includes(term)) {
                event.el.classList.add("highlight");
            } else {
                event.el.classList.remove("highlight");
            }
        });
    });

});
