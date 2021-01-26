//Jacob Welling Assignment 2
$("#submitButton").click(function () {
    //assign variables
    var assignmentWeight = .5
    var groupProjectWeight = .1
    var quizWeight = .1
    var examWeight = .2
    var intexWeight = .1
    //Validation is located within the tags of GradeCalcPage.cshtml
    var assignmentPointsEarned = $('assignments').value
    var groupProjectPointsEarned = $('groupProjects').value
    var quizPointsEarned = $('quizzes').value
    var examPointsEarned = $('exams').value
    var intexPointsEarned = $('intex').value

    var totalGrade = 0
    //calculate total grade
    totalGrade = totalGrade + (assignmentWeight * assignmentPointsEarned)
    totalGrade = totalGrade + (groupProjectWeight * groupProjectPointsEarned)
    totalGrade = totalGrade + (quizWeight * quizPointsEarned)
    totalGrade = totalGrade + (examWeight * examPointsEarned)
    totalGrade = totalGrade + (intexWeight * intexPointsEarned)
    //display total grade
    
    alert(totalGrade)


});