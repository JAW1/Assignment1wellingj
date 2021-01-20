

var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    var assignmentWeight = .5
    var groupProjectWeight = .1
    var quizWeight = .1
    var examWeight = .2
    var intexWeight = .1

    var assignmentPointsEarned = document.getElementById('assignments').value
    var groupProjectPointsEarned = document.getElementById('groupProjects').value
    var quizPointsEarned = document.getElementById('quizzes').value
    var examPointsEarned = document.getElementById('exams').value
    var intexPointsEarned = document.getElementById('intex').value

    var totalGrade = 0

    totalGrade = totalGrade + (assignmentWeight * assignmentPointsEarned)
    totalGrade = totalGrade + (groupProjectWeight * groupProjectPointsEarned)
    totalGrade = totalGrade + (quizWeight * quizPointsEarned)
    totalGrade = totalGrade + (examWeight * examPointsEarned)
    totalGrade = totalGrade + (intexWeight * intexPointsEarned)

    alert(totalGrade)


});