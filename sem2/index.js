function generateInputs() {
    const numSubjects = parseInt(document.getElementById("subjects").value);
    const container = document.getElementById("marksContainer");

    container.innerHTML = "";

    if (isNaN(numSubjects) || numSubjects < 5) {
        alert("Please enter at least 5 subjects.");
        return;
    }

    for (let i = 1; i <= numSubjects; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "100";
        input.placeholder = `Enter marks for Subject ${i}`;
        input.classList.add("subject-input");
        input.id = `subject${i}`;

        container.appendChild(input);
    }

    document.getElementById("calculateBtn").style.display = "block";
}

function calculateGrade() {
    const numSubjects = parseInt(document.getElementById("subjects").value);

    let total = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const marks = parseFloat(document.getElementById(`subject${i}`).value);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert(`Please enter valid marks for Subject ${i}`);
            return;
        }

        total += marks;
    }

    const percentage = total / numSubjects;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `
        Total Marks: ${total}<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: ${grade}
    `;
}