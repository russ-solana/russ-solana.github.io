// =========================================
// ELEMENTS
// =========================================

const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");

const status = document.querySelector(".status");
const counter = document.querySelector(".counter");

const emailBtn = document.querySelector("#email-btn");
const calendarBtn = document.querySelector("#calendar-btn");
const receiptBtn = document.querySelector("#receipt-btn");
const clickupBtn = document.querySelector("#clickup-btn"); // <--- ADDED THIS MISSING VARIABLE

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const closeBtn = document.querySelector(".close");


// =========================================
// PROJECT DATA
// =========================================

const email = {
    title: "Email Management",

    description:
        "Organized an inbox using folders, labels, and Gmail filters to improve workflow and automate email organization.",

    labels: [
        "BEFORE",
        "AFTER",
        "EMAIL FILTERS"
    ],

    images: [
        "images/portfolio_pics/unorganized_email.png",
        "images/portfolio_pics/organized_email.png",
        "images/portfolio_pics/filters.png"
    ]
};

const calendar = {
    title: "Calendar Management",

    description:
        "Managed appointments, reminders, and schedules using an organized calendar system.",

    labels: [
        "BEFORE",
        "AFTER"
    ],

    images: [
        "images/portfolio_pics/unorganized_calendar.png",
        "images/portfolio_pics/organized_calendar_Backup.png"
    ]
};

const receipt = {
    title: "Receipt & Invoice Management",

    description:
        "Organized receipts and invoices into Xero's searchable filing system.",

    labels: [
        "BEFORE",
        "AFTER"
    ],

    images: [
        "images/portfolio_pics/Messy_bills.png",
        "images/portfolio_pics/Organized_receipts_in_xero.png"
    ]
};

const clickup = {
    title: "ClickUp Operations Hub",

    description:
        "Transformed an unstructured task list into a color-coded ClickUp workspace equipped with custom statuses, platform metadata, and multi-view tracking.",

    labels: [
        "BEFORE",
        "AFTER"
    ],

    images: [
        "images/portfolio_pics/Before_Clickup.png",
        "images/portfolio_pics/After_Clickup.png"
    ]
};

// =========================================
// VARIABLES
// =========================================

let currentProject = null;
let currentImage = 0;


// =========================================
// FUNCTIONS
// =========================================

function updateModal() {

    modalImage.src = currentProject.images[currentImage];

    modalTitle.textContent = currentProject.title;

    modalDescription.textContent = currentProject.description;

    status.textContent = currentProject.labels[currentImage];

    counter.textContent =
        (currentImage + 1) + " / " + currentProject.images.length;

    prevBtn.disabled = currentImage === 0;
    nextBtn.disabled = currentImage === currentProject.images.length - 1;
}

function showProject(project) {

    currentProject = project;
    currentImage = 0;

    updateModal();

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


// =========================================
// PROJECT BUTTONS
// =========================================

emailBtn.addEventListener("click", function () {
    showProject(email);
});

calendarBtn.addEventListener("click", function () {
    showProject(calendar);
});

receiptBtn.addEventListener("click", function () {
    showProject(receipt);
});

clickupBtn.addEventListener("click", function () {
    showProject(clickup);
});

// =========================================
// NEXT BUTTON
// =========================================

nextBtn.addEventListener("click", function () {

    if (currentImage < currentProject.images.length - 1) {

        currentImage++;

        updateModal();

    }

});


// =========================================
// PREVIOUS BUTTON
// =========================================

prevBtn.addEventListener("click", function () {

    if (currentImage > 0) {

        currentImage--;

        updateModal();

    }

});


// =========================================
// CLOSE BUTTON
// =========================================

closeBtn.addEventListener("click", function () {

    modal.classList.remove("show");

    document.body.style.overflow = "";

});


// =========================================
// CLOSE WHEN CLICKING BACKGROUND
// =========================================

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("show");

        document.body.style.overflow = "";

    }

});

// =========================================
// OPEN MODAL IMAGE IN A NEW TAB
// =========================================

modalImage.addEventListener("click", function () {
    if (modalImage.src) {
        window.open(modalImage.src, "_blank");
    }
});