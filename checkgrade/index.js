function checkGrade(totalScore, studentScore) {
  let sum = 0;
  for (const total of totalScore) {
    sum += total;
  }
  const average = sum / totalScore.length;
  let grade;
  if (studentScore === 100) {
    grade = 'A++';
  } else if (studentScore >= 90) {
    grade = 'A';
  } else if (studentScore >= 80) {
    grade = 'B';
  } else if (studentScore >= 60) {
    grade = 'C';
  } else if (studentScore >= 90) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  if (studentScore > 60) {
    return `Rata-rata nilai kelas: ${average}. Grade kamu: ${grade}. Selamat kamu lulus.`;
  } else {
    return `Rata-rata nilai kelas: ${average}. Grade kamu: ${grade}. Maaf kamu gagal lulus`;
  }
}

console.log(checkGrade([90, 80, 40, 54, 67, 71, 88, 100, 93, 78], 80));
console.log(checkGrade([90, 80, 40, 54, 67, 71, 88, 100, 93, 78], 40));
