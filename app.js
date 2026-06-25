// 1. The Service Database Array
const electricalServices = [
    {
        title: "Fault Finding & Troubleshooting",
        description: "Identify and isolate mysterious power trips, short circuits, or wiring issues safely and efficiently.",
        icon: "⚡"
    },
    {
        title: "Full House Rewiring",
        description: "Complete upgrades for aging or faulty home electrical systems to modern safety compliance standards.",
        icon: "🔌"
    },
    {
        title: "DB Box Upgrades",
        description: "Replace old fuse boxes with high-quality, certified Distribution Boards and sensitive ELCB breakers.",
        icon: "📟"
    },
    {
        title: "Lighting & Fan Installation",
        description: "Professional structural mounting and seamless wiring for all modern ceiling fans and light fixtures.",
        icon: "💡"
    }
];

// 2. Function to dynamically build and inject the Bootstrap grid cards
function renderServices() {
    // Grab the target container shell from your HTML
    const gridContainer = document.getElementById('services-grid');
    
    // Clear out anything inside it just in case
    gridContainer.innerHTML = "";

    // Loop through our array of service objects
    electricalServices.forEach(service => {
        // Create the Bootstrap card column template using backticks (Template Literals)
        const cardHTML = `
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 border-0 shadow-sm p-4 text-center bg-white">
                    <div class="fs-1 text-warning mb-3">${service.icon}</div>
                    <h3 class="h5 fw-bold mb-2">${service.title}</h3>
                    <p class="text-muted small mb-0">${service.description}</p>
                </div>
            </div>
        `;
        
        // Append this card structural layout string straight into our row container
        gridContainer.innerHTML += cardHTML;
    });
}

// 3. Execute the logic when the browser finishes loading the page layout
window.addEventListener('DOMContentLoaded', renderServices);