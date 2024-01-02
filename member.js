function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkills2 = document.getElementById("memberSkills2");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        member.style.display = "none";
        memberSkills.style.display = "none";
        memberSkills2.style.display = "none";
    } else {
        skills.style.display = "none";
        member.style.display = "block";
        memberSkills.style.display = "block";
        memberSkills2.style.display = "block";
    }
}