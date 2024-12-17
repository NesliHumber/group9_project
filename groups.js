// Group class
class Group {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }

    displayInfo() {
        return `${this.name} offers courses in ${this.courses.join(", ")}.`;
    }

    addCourse(course) {
        this.courses.push(course);
        console.log(`Added new course to ${this.name}: ${course}`);
    }

    getTotalCourses() {
        return this.courses.length;
    }
}

// Initial groups
let groups = [
    new Group("Math Enthusiasts", ["Math", "Statistics", "Calculus"]),
    new Group("JavaScript Developers", ["JavaScript", "React", "Node.js"]),
    new Group("AI Innovators", ["Artificial Intelligence", "Machine Learning", "Deep Learning"])
];

// Function to render groups
function renderGroups() {
    const groupsList = document.getElementById("groups-list");
    groupsList.innerHTML = ''; // Clear existing groups
    
    groups.forEach(group => {
        const groupCard = document.createElement("div");
        groupCard.className = "group-card";
        
        const groupName = document.createElement("h2");
        groupName.textContent = group.name;

        const groupInfo = document.createElement("p");
        groupInfo.textContent = group.displayInfo();

        const joinButton = document.createElement("button");
        joinButton.className = "join-button";
        joinButton.textContent = "Join";
        joinButton.onclick = () => alert(`You have joined ${group.name}!`);

        groupCard.appendChild(groupName);
        groupCard.appendChild(groupInfo);
        groupCard.appendChild(joinButton);

        groupsList.appendChild(groupCard);
    });
}

// Function to handle group creation
function createGroup(event) {
    event.preventDefault();
    const nameInput = document.getElementById('group-name');
    const coursesInput = document.getElementById('group-courses');

    const name = nameInput.value.trim();
    const courses = coursesInput.value.split(',').map(course => course.trim());

    if (name && courses.length > 0) {
        const newGroup = new Group(name, courses);
        groups.push(newGroup);
        renderGroups();
        nameInput.value = '';
        coursesInput.value = '';
    }
}

// Event listeners
window.onload = () => {
    renderGroups();
    document.getElementById('create-group-form').addEventListener('submit', createGroup);
};