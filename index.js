
const reportTitle = "Capstone Cohort Submission Tracker";

const submissions = [
  { type: "sponsor", cohort: "Fall 2026", status: "Pending" },
  { type: "student", cohort: "Fall 2026", status: "Pending" },
  { type: "student", cohort: "Fall 2026", status: "Approved" },
  { type: "sponsor", cohort: "Fall 2025", status: "Pending" }
];

const activeCohort = "Fall 2026";

const pending = submissions.filter(item =>
  item.cohort === activeCohort && item.status === "Pending"
);

console.log(reportTitle);
console.log(`Cohort: ${activeCohort}`);
console.log(`Total pending: ${pending.length}`);
console.log(`Student pending: ${pending.filter(item => item.type === "student").length}`);
console.log(`Sponsor pending: ${pending.filter(item => item.type === "sponsor").length}`);