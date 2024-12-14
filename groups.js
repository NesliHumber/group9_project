// Group objects
const group1 = {
    name: "Math Enthusiasts",
    courses: ["Math", "Statistics", "Calculus"],
    displayInfo() {
        return `${this.name} offers courses in ${this.courses.join(", ")}.`;
    },
    addCourse(course) {
        this.courses.push(course);
        console.log(`Added new course to ${this.name}: ${course}`);
    },
    getTotalCourses() {
        return this.courses.length;
    }
 };
 
 const group2 = {
    name: "JavaScript Developers",
    courses: ["JavaScript", "React", "Node.js"],
    displayInfo() {
        return `${this.name} offers courses in ${this.courses.join(", ")}.`;
    },
    addCourse(course) {
        this.courses.push(course);
        console.log(`Added new course to ${this.name}: ${course}`);
    },
    getTotalCourses() {
        return this.courses.length;
    }
 };
 
 const group3 = {
    name: "AI Innovators",
    courses: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
    displayInfo() {
        return `${this.name} offers courses in ${this.courses.join(", ")}.`;
    },
    addCourse(course) {
        this.courses.push(course);
        console.log(`Added new course to ${this.name}: ${course}`);
    },
    getTotalCourses() {
        return this.courses.length;
    }
 };
 
 // Function to render groups
 function renderGroups() {
    const groupsList = document.getElementById("groups-list");
    
    const groups = [group1, group2, group3];
    
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
 
 // Call the function to render groups on page load
 window.onload = renderGroups;
 