// ==========================================
// PREMIUM ADVERTISING CATALOG DATA
// ==========================================

const advertisedProducts = [
    {
        id: 1,
        vendorName: "Lusaka Sole Footwear Co.",
        name: "Premium Leather Chelsea Boots",
        price: 850,
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500",
        description: "Handcrafted from top-tier genuine leather. Built for luxury, durability, and a flawless premium finish."
    },
    {
        id: 2,
        vendorName: "Copperbelt Tailored Styles",
        name: "Classic Men's Slim Fit Jeans",
        price: 480,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        description: "Heavyweight designer denim tailored for a sharp, executive look that holds its shape."
    },
    {
        id: 3,
        vendorName: "Zed Urban Trends",
        name: "Minimalist Canvas Sneakers",
        price: 450,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
        description: "Premium high-comfort street sneakers crafted from high-grade breathable textiles."
    },
    {
        id: 4,
        vendorName: "Choma Heritage Apparel",
        name: "High-Waist Premium Female Jeans",
        price: 520,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
        description: "Boutique high-rise stretch denim designed for luxury comfort and an elegant silhouette."
    },
    {
        id: 5,
        vendorName: "Bella Boutique Lusaka",
        name: "Cozy Soft Pink Ladies Slippers",
        price: 350,
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500",
        description: "Plush luxury slide slippers in an attractive soft-pink hue for elegant home comfort."
    },
    {
        id: 6,
        vendorName: "Kabwe Crafts & Leather",
        name: "Executive Genuine Leather Men's Sandals",
        price: 490,
        image: "https://images.unsplash.com/photo-1549298916-c67d09c62766?w=500",
        description: "Rugged, high-grade double-strap thick cut outdoor leather sandals tailored for men."
    },
    {
        id: 7,
        vendorName: "Little Trends Zambia",
        name: "Kids Premium Active Sneakers",
        price: 380,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
        description: "Top-grade cushioned running shoes offering full ankle support and elite daily protection."
    },
    {
        id: 8,
        vendorName: "Kitwe Fashion Hub",
        name: "Luxury Designer Denim Shorts",
        price: 390,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
        description: "Premium casual denim shorts with a flawless designer wash and reinforced stitching."
    }
];

// ==========================================
// COURIER LOGISTICS DATABASE
// ==========================================

const logisticsDatabase = {

    "ZG-101-LUS": {
        status: "In Transit",
        origin: "Choma Distribution Hub",
        destination: "Lusaka Main Delivery Center",
        currentLocation: "Mazabuka Highway Checkpoint",
        eta: "Tomorrow, 14:00 CAT",
        courierNotes: "Shipment delayed slightly due to road maintenance."
    },

    "ZG-202-NDO": {
        status: "Out For Delivery",
        origin: "Lusaka Central Warehouse",
        destination: "Ndola Customer Address",
        currentLocation: "Ndola Delivery Route",
        eta: "Today Before 17:00 CAT",
        courierNotes: "Courier driver assigned successfully."
    },

    "ZG-303-KTW": {
        status: "Delivered",
        origin: "Kitwe Fashion Hub",
        destination: "Kitwe Customer Collection Point",
        currentLocation: "Delivery Completed",
        eta: "Delivered Successfully",
        courierNotes: "Package handed over to customer."
    }

};

// ==========================================
// SECTION NAVIGATION
// ==========================================

window.showSection = function(targetSection) {

    const marketplace = document.getElementById("marketplace-section");
    const tracking = document.getElementById("tracking-section");

    if (!marketplace || !tracking) return;

    if (targetSection === "marketplace") {

        marketplace.style.display = "block";
        tracking.style.display = "none";

    } else if (targetSection === "tracking") {

        marketplace.style.display = "none";
        tracking.style.display = "block";
    }
};

// ==========================================
// MARKETPLACE DISPLAY RENDERING
// ==========================================

function displayAdvertisements() {
    const displayArea = document.getElementById("main-display");
    if (!displayArea) return;
    
    displayArea.innerHTML = ""; 
    const gridContainer = document.createElement("div");
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
    gridContainer.style.gap = "25px";
    gridContainer.style.padding = "20px 0";

    advertisedProducts.forEach(product => {
        const card = document.createElement("div");
        card.style.backgroundColor = "#ffffff";
        card.style.padding = "20px";
        card.style.borderRadius = "8px";
        card.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
        card.style.textAlign = "center";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "space-between";
        card.style.position = "relative";
        card.style.border = "1px solid #e2e8f0";

        card.innerHTML = `
            <span style="position: absolute; top: 10px; left: 10px; background-color: #475569; color: white; padding: 5px 12px; font-size: 0.75rem; font-weight: bold; border-radius: 4px;">
                ${product.vendorName}
            </span>
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 6px; margin-bottom: 15px; margin-top: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #0f172a; font-size: 1.1rem; height: 44px; overflow: hidden; font-weight: 600;">${product.name}</h3>
            <p style="color: #64748b; font-size: 0.85rem; margin: 0 0 15px 0; height: 50px; overflow: hidden;">${product.description}</p>
            <div style="font-size: 1.3rem; font-weight: bold; color: #0f172a; margin-bottom: 15px;">ZK ${product.price}</div>
            <button style="background-color: #0f172a; color: white; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: bold;" onclick="viewVendorDetails(${product.id})">
                Inquire Delivery Logistics
            </button>
        `;
        gridContainer.appendChild(card);
    });
    displayArea.appendChild(gridContainer);
}

window.viewVendorDetails = function(productId) {
    const selectedAd = advertisedProducts.find(p => p.id === productId);
    if (selectedAd) {
        alert(`🏬 Ad Vendor: ${selectedAd.vendorName}\n\nConnecting frontend state to tracking simulator.`);
        window.showSection('tracking');
    }
};

// ==========================================
// TRACK COURIER SYSTEM
// ==========================================

window.simulateTracking = function() {

    const trackingInput = document.getElementById("tracking-input");
    const resultBox = document.getElementById("tracking-result-box");

    if (!trackingInput || !resultBox) return;

    const codeEntered = trackingInput.value.trim().toUpperCase();

    if (!codeEntered) {
        alert("Please enter a tracking ID.");
        return;
    }

    resultBox.style.display = "block";

    // ---------- VALID TRACKING ----------
    if (logisticsDatabase[codeEntered]) {

        const item = logisticsDatabase[codeEntered];

        resultBox.innerHTML = `
            <div style="
                background:#f0fdf4;
                border:1px solid #bbf7d0;
                padding:20px;
                border-radius:12px;
                text-align: left;
            ">
                <h3 style="
                    color:#166534;
                    margin-top:0;
                    margin-bottom:15px;
                ">
                    📦 Shipment Located
                </h3>
                <p style="margin:6px 0;"><strong>Status:</strong> <span style="background:#bbf7d0; color:#166534; padding:3px 10px; border-radius:20px; font-size:0.85rem; font-weight:bold;">${item.status}</span></p>
                <p style="margin:6px 0;"><strong>Origin:</strong> ${item.origin}</p>
                <p style="margin:6px 0;"><strong>Destination:</strong> ${item.destination}</p>
                <p style="margin:6px 0;"><strong>Current Location:</strong> ${item.currentLocation}</p>
                <p style="margin:6px 0;"><strong>ETA:</strong> ${item.eta}</p>
                <div style="
                    margin-top:15px;
                    padding:12px;
                    background:white;
                    border-left:4px solid #22c55e;
                    border-radius:6px;
                    font-style:italic;
                    color:#334155;
                ">
                    "${item.courierNotes}"
                </div>
            </div>
        `;
    }
    // ---------- INVALID TRACKING ----------
    else {
        resultBox.innerHTML = `
            <div style="
                background:#fef2f2;
                border:1px solid #fecaca;
                padding:20px;
                border-radius:12px;
                color:#991b1b;
                text-align: left;
            ">
                <h3 style="margin-top:0;">
                    ❌ Tracking ID Not Found
                </h3>
                <p style="margin:0;">
                    Please check the shipment tracking code and try again.
                </p>
            </div>
        `;
    }
};

// Initial view setup
window.onload = displayAdvertisements;