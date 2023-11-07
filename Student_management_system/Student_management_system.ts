class Student {
    static studentCount = 0;
    studentID: string;
    name: string;
    enrolledCourses: string[] = [];
    balance: number = 0;
  
    constructor(name: string) {
      this.name = name;
      this.studentID = this.generateStudentID();
      Student.studentCount++;
    }
  
    generateStudentID(): string {
      const id = String(Student.studentCount) + "10";
      return `S${id}`;
    }
  
    enroll(course: string): void {
      this.enrolledCourses.push(course);
    }
  
    viewBalance(): void {
      console.log(`Balance for ${this.name} (${this.studentID}): $${this.balance}`);
    }
  
    payTuition(amount: number): void {
      this.balance -= amount;
      console.log(`Payment of $${amount} received from ${this.name}.`);
    }
  
    showStatus(): void {
      console.log(`Student ID: ${this.studentID}`);
      console.log(`Name: ${this.name}`);
      console.log('Enrolled Courses:');
      this.enrolledCourses.forEach((course) => {
        console.log(`- ${course}`);
      });
      this.viewBalance();
    }
}
  
  const students: Student[] = [];
  
  function addStudent(name: string): void {
    const student = new Student(name);
    students.push(student);
    console.log(`Student ${student.name} (${student.studentID}) added.`);
  }
  
  function enrollStudent(studentID: string, course: string): void {
    const student = students.find((s) => s.studentID === studentID);
    if (student) {
      student.enroll(course);
      console.log(`Enrolled ${student.name} (${student.studentID}) in ${course}.`);
    } else {
      console.log(`Student with ID ${studentID} not found.`);
    }
  }
  

  addStudent('Amir');
  addStudent('Ali');
  enrollStudent('S001', 'Math');
  enrollStudent('S002', 'History');
  

  
  console.log('\nStudent Details:');
  students.forEach((student) => {
    student.showStatus();
    console.log('--------------------');
  });
