// Restaurant Ordering System JavaScript

// Global variables
let currentOrder = [];
let currentCategory = 'all';
let guestCount = 2;

// Storage keys
const STORAGE_KEYS = {
    menu: 'restaurant_menu_items',
    reservations: 'restaurant_reservations',
    reviews: 'restaurant_reviews'
};

// Sample menu data with attractive Indian food items
const menuItems = [
    // Food Items
    {
        id: 1,
        name: 'Butter Chicken',
        category: 'food',
        price: 599,
        description: 'Tender chicken in rich tomato and butter gravy with naan bread',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 2,
        name: 'Paneer Tikka',
        category: 'food',
        price: 449,
        description: 'Grilled cottage cheese marinated in aromatic spices and yogurt',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 3,
        name: 'Biryani',
        category: 'food',
        price: 799,
        description: 'Fragrant basmati rice cooked with tender meat and aromatic spices',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 4,
        name: 'Tandoori Fish',
        category: 'food',
        price: 899,
        description: 'Fresh fish marinated in tandoori spices and grilled to perfection',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 5,
        name: 'Mixed Vegetable Curry',
        category: 'food',
        price: 349,
        description: 'Assorted vegetables cooked in traditional Indian spices and gravy',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 6,
        name: 'Chicken Tikka Masala',
        category: 'food',
        price: 549,
        description: 'Grilled chicken in creamy tomato and onion gravy with spices',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 7,
        name: 'Dal Makhani',
        category: 'food',
        price: 299,
        description: 'Slow-cooked black lentils with cream and aromatic spices',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 8,
        name: 'Palak Paneer',
        category: 'food',
        price: 399,
        description: 'Fresh spinach curry with cottage cheese and mild spices',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    
    // Drinks
    {
        id: 9,
        name: 'Masala Chai',
        category: 'drinks',
        price: 99,
        description: 'Traditional Indian spiced tea with milk and aromatic spices',
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 10,
        name: 'Lassi',
        category: 'drinks',
        price: 149,
        description: 'Sweet yogurt-based drink with cardamom and saffron',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 11,
        name: 'Mango Shake',
        category: 'drinks',
        price: 199,
        description: 'Fresh mango blended with milk and a hint of cardamom',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 12,
        name: 'Jal Jeera',
        category: 'drinks',
        price: 79,
        description: 'Refreshing cumin and mint drink with black salt',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    
    // Desserts
    {
        id: 13,
        name: 'Gulab Jamun',
        category: 'desserts',
        price: 199,
        description: 'Soft milk solids dumplings soaked in rose-flavored sugar syrup',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 14,
        name: 'Rasmalai',
        category: 'desserts',
        price: 249,
        description: 'Soft cottage cheese patties soaked in sweetened milk',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 15,
        name: 'Kulfi',
        category: 'desserts',
        price: 179,
        description: 'Traditional Indian ice cream with cardamom and pistachios',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&crop=center',
        available: true
    },
    {
        id: 16,
        name: 'Jalebi',
        category: 'desserts',
        price: 129,
        description: 'Crispy spiral-shaped sweet soaked in sugar syrup',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&crop=center',
        available: true
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    bootstrapState();
    initializeMenu();
    setupEventListeners();
    setupSiteRouting();
    setupReservations();
    setupReviews();
    setupContactForm();
    setupAdmin();
    populateGallery();
    populateLandingHighlights();
    updateOrderDisplay();
});

function bootstrapState() {
    // Load persisted menu, else seed with defaults
    const savedMenu = safeParse(localStorage.getItem(STORAGE_KEYS.menu));
    if (Array.isArray(savedMenu) && savedMenu.length) {
        // Replace default menu items while keeping shape
        menuItems.length = 0;
        savedMenu.forEach(i => menuItems.push(i));
    } else {
        // persist initial defaults for admin editing
        localStorage.setItem(STORAGE_KEYS.menu, JSON.stringify(menuItems));
    }
}

function safeParse(value) {
    try { return JSON.parse(value); } catch(e) { return null; }
}

// Initialize menu display
function initializeMenu() {
    displayMenuItems();
    setupCategoryTabs();
}

// Display menu items
function displayMenuItems(category = 'all') {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    let filteredItems = menuItems;
    if (category !== 'all') {
        filteredItems = menuItems.filter(item => item.category === category);
    }
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" onclick="addToOrder(${item.id})" title="${item.name}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price}</span>
                    <button class="add-to-order" onclick="event.stopPropagation(); addToOrder(${item.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup category tabs
function setupCategoryTabs() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            currentCategory = category;
            displayMenuItems(category);
        });
    });
}

// Add item to order
function addToOrder(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;
    
    // Check if item already exists in order
    const existingItem = currentOrder.find(orderItem => orderItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        currentOrder.push({
            ...item,
            quantity: 1
        });
    }
    
    updateOrderDisplay();
    
    // Show success feedback
    showOrderFeedback(`${item.name} added to order!`);
}

// Remove item from order
function removeFromOrder(itemId) {
    currentOrder = currentOrder.filter(item => item.id !== itemId);
    updateOrderDisplay();
}

// Update item quantity
function updateItemQuantity(itemId, change) {
    const item = currentOrder.find(item => item.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromOrder(itemId);
    } else {
        updateOrderDisplay();
    }
}

// Update order display
function updateOrderDisplay() {
    const orderItemsContainer = document.getElementById('order-items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    if (!orderItemsContainer) return;
    
    if (currentOrder.length === 0) {
        orderItemsContainer.innerHTML = `
            <div class="empty-order">
                <i class="fas fa-utensils"></i>
                <p>No items in order</p>
                <small>Click on menu items to add them</small>
            </div>
        `;
        
        // Reset totals
        if (subtotalElement) subtotalElement.textContent = '₹0';
        if (taxElement) taxElement.textContent = '₹0';
        if (totalElement) totalElement.textContent = '₹0';
        return;
    }
    
    // Display order items
    orderItemsContainer.innerHTML = currentOrder.map(item => `
        <div class="order-item">
            <button class="remove-item" onclick="removeFromOrder(${item.id})">
                <i class="fas fa-times"></i>
            </button>
            <div class="order-item-header">
                <span class="item-name">${item.name}</span>
                <span class="item-price">₹${item.price * item.quantity}</span>
            </div>
            <div class="item-details">
                <div class="item-quantity">
                    <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity} Units</span>
                    <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, 1)">+</button>
                </div>
                <span>₹${item.price} each</span>
            </div>
        </div>
    `).join('');
    
    // Calculate and display totals
    const subtotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + tax;
    
    if (subtotalElement) subtotalElement.textContent = `₹${subtotal}`;
    if (taxElement) taxElement.textContent = `₹${Math.round(tax)}`;
    if (totalElement) totalElement.textContent = `₹${Math.round(total)}`;
}

// Clear order
function clearOrder() {
    if (currentOrder.length === 0) {
        showOrderFeedback('Order is already empty!');
        return;
    }
    
    if (confirm('Are you sure you want to clear the entire order?')) {
        currentOrder = [];
        updateOrderDisplay();
        showOrderFeedback('Order cleared successfully!');
    }
}

// Process payment
function processPayment() {
    if (currentOrder.length === 0) {
        showOrderFeedback('Please add items to your order first!');
        return;
    }
    // Open payment modal for method selection
    openPaymentModal();
}

// Add customer note
function addCustomerNote() {
    document.getElementById('note-modal').style.display = 'block';
}

// Close note modal
function closeNoteModal() {
    document.getElementById('note-modal').style.display = 'none';
}

// Save customer note
function saveCustomerNote() {
    const note = document.getElementById('customer-note').value.trim();
    if (note) {
        showOrderFeedback('Customer note added successfully!');
        closeNoteModal();
        document.getElementById('customer-note').value = '';
    } else {
        showOrderFeedback('Please enter a note first!');
    }
}

// Split bill
function splitBill() {
    if (currentOrder.length === 0) {
        showOrderFeedback('Please add items to your order first!');
        return;
    }
    
    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.18;
    const perPerson = total / guestCount;
    
    alert(`Bill split for ${guestCount} guests:\nTotal: ₹${Math.round(total)}\nPer person: ₹${Math.round(perPerson)}`);
}

// Guest counter functions
function increaseGuests() {
    if (guestCount < 20) {
        guestCount++;
        document.getElementById('guest-count').textContent = guestCount;
    }
}

function decreaseGuests() {
    if (guestCount > 1) {
        guestCount--;
        document.getElementById('guest-count').textContent = guestCount;
    }
}

// Go back function
function goBack() {
    showOrderFeedback('Back button clicked!');
}

// Show order feedback
function showOrderFeedback(message) {
    // Create a temporary feedback element
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    feedback.textContent = message;
    
    document.body.appendChild(feedback);
    
    // Remove after 3 seconds
    setTimeout(() => {
        feedback.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    }
}

// Search functionality
function performSearch(query) {
    if (query.length < 2) {
        displayMenuItems(currentCategory);
        return;
    }
    
    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #a0aec0;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 15px; opacity: 0.5;"></i>
                <p>No items found for "${query}"</p>
                <small>Try a different search term</small>
            </div>
        `;
        return;
    }
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" onclick="addToOrder(${item.id})" title="${item.name}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price}</span>
                    <button class="add-to-order" onclick="event.stopPropagation(); addToOrder(${item.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Landing highlights
function populateLandingHighlights() {
    const grid = document.getElementById('landing-highlights-grid');
    if (!grid) return;
    const topItems = [...menuItems].slice(0, 6);
    grid.innerHTML = topItems.map(item => `
        <div class="menu-item" title="${item.name}" onclick="navigateTo('ordering-section'); setTimeout(()=>scrollToMenuItem(${item.id}), 200)">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <h3 class="menu-item-name">${item.name}</h3>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price}</span>
                    <button class="add-to-order" onclick="event.stopPropagation(); addToOrder(${item.id})"><i class="fas fa-plus"></i> Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

function navigateTo(viewId) {
    const navBtn = document.querySelector('.nav-link[data-view="' + viewId + '"]');
    if (navBtn) navBtn.click();
}

function scrollToMenuItem(id) {
    // Helper if needed; for now, just focus the grid
    const grid = document.getElementById('menu-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
}

// --------------------
// View routing
// --------------------
function setupSiteRouting() {
    const links = document.querySelectorAll('.nav-link');
    const footerLinks = document.querySelectorAll('.footer-links a[data-view]');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const viewId = link.getAttribute('data-view');
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            const viewEl = document.getElementById(viewId);
            if (viewEl) viewEl.classList.add('active');
            // Reset scroll to top of page on view change
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    footerLinks.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = a.getAttribute('data-view');
            const targetNav = document.querySelector('.nav-link[data-view="' + viewId + '"]');
            if (targetNav) targetNav.click(); else {
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                const viewEl = document.getElementById(viewId);
                if (viewEl) viewEl.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// --------------------
// Reservations
// --------------------
function setupReservations() {
    const form = document.getElementById('reservation-form');
    const list = document.getElementById('reservations-list');
    if (!form || !list) return;

    renderReservations();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const reservation = {
            id: Date.now(),
            name: document.getElementById('res-name').value.trim(),
            phone: document.getElementById('res-phone').value.trim(),
            email: document.getElementById('res-email').value.trim(),
            date: document.getElementById('res-date').value,
            time: document.getElementById('res-time').value,
            guests: Number(document.getElementById('res-guests').value || 1),
            notes: document.getElementById('res-notes').value.trim()
        };
        const reservations = safeParse(localStorage.getItem(STORAGE_KEYS.reservations)) || [];
        reservations.push(reservation);
        localStorage.setItem(STORAGE_KEYS.reservations, JSON.stringify(reservations));
        form.reset();
        renderReservations();
        alert('Reservation confirmed!');
    });
}

function renderReservations() {
    const container = document.getElementById('reservations-list');
    if (!container) return;
    const reservations = safeParse(localStorage.getItem(STORAGE_KEYS.reservations)) || [];
    if (reservations.length === 0) {
        container.innerHTML = '<h3>Upcoming Reservations</h3><div class="empty">No reservations yet</div>';
        return;
    }
    const items = reservations.sort((a,b)=>a.date.localeCompare(b.date) || a.time.localeCompare(b.time)).map(r => `
        <div class="admin-item">
            <div style="width:60px;height:60px;display:flex;align-items:center;justify-content:center;background:#f7fafc;border-radius:8px;color:#4a5568;">${r.guests}</div>
            <div class="meta">
                <strong>${r.name}</strong>
                <span>${r.date} ${r.time} • ${r.guests} guests</span>
                <small>${r.phone}${r.email ? ' • ' + r.email : ''}</small>
            </div>
            <div class="actions">
                <button class="btn-secondary" onclick="deleteReservation(${r.id})">Delete</button>
            </div>
        </div>
    `).join('');
    container.innerHTML = '<h3>Upcoming Reservations</h3>' + items;
}

function deleteReservation(id) {
    const reservations = safeParse(localStorage.getItem(STORAGE_KEYS.reservations)) || [];
    const next = reservations.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.reservations, JSON.stringify(next));
    renderReservations();
}

// --------------------
// Reviews
// --------------------
function setupReviews() {
    const form = document.getElementById('review-form');
    if (!form) return;
    renderReviews();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const review = {
            id: Date.now(),
            name: document.getElementById('rev-name').value.trim(),
            rating: Number(document.getElementById('rev-rating').value),
            comment: document.getElementById('rev-comment').value.trim(),
            time: new Date().toISOString()
        };
        if (!review.rating) { alert('Please select a rating'); return; }
        const reviews = safeParse(localStorage.getItem(STORAGE_KEYS.reviews)) || [];
        reviews.unshift(review);
        localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(reviews));
        form.reset();
        renderReviews();
        showOrderFeedback('Thanks for your review!');
    });
}

function renderReviews() {
    const container = document.getElementById('reviews-list');
    if (!container) return;
    const reviews = safeParse(localStorage.getItem(STORAGE_KEYS.reviews)) || [];
    if (reviews.length === 0) {
        container.innerHTML = '<h3>Recent Reviews</h3><div class="empty">No reviews yet</div>';
        return;
    }
    const stars = n => '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n);
    const items = reviews.map(r => `
        <div class="admin-item">
            <div style="width:60px;height:60px;display:flex;align-items:center;justify-content:center;background:#f7fafc;border-radius:8px;color:#f6ad55;">${'★'.repeat(r.rating)}</div>
            <div class="meta">
                <strong>${r.name}</strong>
                <span>${new Date(r.time).toLocaleString()}</span>
                <small>${r.comment}</small>
            </div>
            <div class="actions">
                <button class="btn-secondary" onclick="deleteReview(${r.id})">Delete</button>
            </div>
        </div>
    `).join('');
    container.innerHTML = '<h3>Recent Reviews</h3>' + items;
}

function deleteReview(id) {
    const reviews = safeParse(localStorage.getItem(STORAGE_KEYS.reviews)) || [];
    const next = reviews.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(next));
    renderReviews();
}

// --------------------
// Contact
// --------------------
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for reaching out! We will contact you shortly.');
        form.reset();
    });
}

// --------------------
// Admin Menu CRUD
// --------------------
function setupAdmin() {
    const form = document.getElementById('menu-form');
    const resetBtn = document.getElementById('menu-reset-btn');
    if (!form) return;
    renderAdminMenu();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const idValue = document.getElementById('menu-id').value;
        const payload = {
            id: idValue ? Number(idValue) : Date.now(),
            name: document.getElementById('menu-name').value.trim(),
            category: document.getElementById('menu-category').value,
            price: Number(document.getElementById('menu-price').value || 0),
            description: document.getElementById('menu-description').value.trim() || '',
            image: document.getElementById('menu-image').value.trim() || 'https://images.unsplash.com/photo-1600891963935-c9f4a3f8e6b0?w=400&h=400&fit=crop&crop=center',
            available: true
        };
        const current = safeParse(localStorage.getItem(STORAGE_KEYS.menu)) || [];
        const existsIndex = current.findIndex(i => i.id === payload.id);
        if (existsIndex >= 0) current[existsIndex] = payload; else current.push(payload);
        localStorage.setItem(STORAGE_KEYS.menu, JSON.stringify(current));
        // sync in-memory items used by ordering view
        menuItems.length = 0; current.forEach(i => menuItems.push(i));
        form.reset();
        document.getElementById('menu-save-btn').textContent = 'Add Item';
        renderAdminMenu();
        displayMenuItems(currentCategory);
        showOrderFeedback('Menu saved');
    });
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            form.reset();
            document.getElementById('menu-id').value = '';
            document.getElementById('menu-save-btn').textContent = 'Add Item';
        });
    }
}

function renderAdminMenu() {
    const container = document.getElementById('menu-items-admin');
    if (!container) return;
    const items = safeParse(localStorage.getItem(STORAGE_KEYS.menu)) || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">No items</div>'; return; }
    container.innerHTML = items.map(i => `
        <div class="admin-item">
            <img src="${i.image}" alt="${i.name}">
            <div class="meta">
                <strong>${i.name}</strong>
                <small>${i.category}</small>
                <span class="price">₹${i.price}</span>
            </div>
            <div class="actions">
                <button class="btn-secondary" onclick="editMenuItem(${i.id})">Edit</button>
                <button class="btn-primary" onclick="deleteMenuItem(${i.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function editMenuItem(id) {
    const items = safeParse(localStorage.getItem(STORAGE_KEYS.menu)) || [];
    const item = items.find(i => i.id === id);
    if (!item) return;
    document.getElementById('menu-id').value = item.id;
    document.getElementById('menu-name').value = item.name;
    document.getElementById('menu-category').value = item.category;
    document.getElementById('menu-price').value = item.price;
    document.getElementById('menu-image').value = item.image;
    document.getElementById('menu-description').value = item.description;
    document.getElementById('menu-save-btn').textContent = 'Update Item';
}

function deleteMenuItem(id) {
    const items = safeParse(localStorage.getItem(STORAGE_KEYS.menu)) || [];
    const next = items.filter(i => i.id !== id);
    localStorage.setItem(STORAGE_KEYS.menu, JSON.stringify(next));
    menuItems.length = 0; next.forEach(i => menuItems.push(i));
    renderAdminMenu();
    displayMenuItems(currentCategory);
}

// --------------------
// Gallery population
// --------------------
function populateGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    const images = [
        { src: 'https://images.unsplash.com/photo-1541542684-4a4c69d23234?w=800', cap: 'Dining Area' },
        { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800', cap: 'Chef Special' },
        { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800', cap: 'Fresh Ingredients' },
        { src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=800', cap: 'Event Night' },
        { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', cap: 'Signature Dishes' },
        { src: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=800', cap: 'Dessert Platter' }
    ];
    grid.innerHTML = images.map(i => `
        <div class="gallery-card">
            <img src="${i.src}" alt="${i.cap}">
            <div class="caption">${i.cap}</div>
        </div>
    `).join('');
}

// --------------------
// Payment Modal + mock flows
// --------------------
function openPaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.style.display = 'block';
}

function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.style.display = 'none';
}

function payOnline(provider) {
    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.18;
    closePaymentModal();
    showOrderFeedback('Processing payment...');
    setTimeout(() => {
        alert(`Payment via ${provider.toUpperCase()} successful! Total: ₹${Math.round(total)}\nOrder completed for ${guestCount} guests.`);
        currentOrder = [];
        updateOrderDisplay();
    }, 1500);
}
