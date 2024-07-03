export class Navbar {
  constructor(page) {
    this.page = page;

    this.courses = page.getByTestId("topmenu-Courses");
    this.challenges = page.getByTestId("topmenu-Challenges");
    this.interviewQuestions = page.getByTestId("topmenu-Interview Questions");
    this.diary = page.getByTestId("topmenu-Diary");
  }
}
