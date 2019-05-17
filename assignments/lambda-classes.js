// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;

    }
    speak(){
    return `Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location}are the object's own props`; 
    }
}
class Instructor extends Person {
  constructor(instractorAtt){
    super(instractorAtt);
    this.specialty = instractorAtt.specialty ;
    this.favInstructor = instractorAtt.favInstructor;
    this.catchPhrase = instractorAtt.catchPhrase;
    }

demo(subject){
   return `Today we are learning about ${subject}.`;
}
grade(student,subject){
    return `${student.name} receives a perfect score on ${subject}`;
}
}
class Student extends Person {
  constructor(StudentAtt){
    super(StudentAtt);
    this.previousBackground = StudentAtt.previousBackground ;
    this.className = StudentAtt.className;
    this.favSubjects = StudentAtt.favSubjects;
    }

listsSubjects(){
   return `${this.favSubjects}.`;
}
PRAssignment(student, subject){
    return `${Student.name} has submitted a PR for ${subject}`;
}
sprintChallenge(student, subject){
    return `${Student.name} has begun sprint challenge on  ${subject}`;
}
}
class ProjectManager extends Person {
    constructor(ProjectManagerAtt){
      super(ProjectManagerAtt);
      this.gradClassName = ProjectManagerAtt.gradClassName;
      this.className = ProjectManagerAtt.favInstructor;
    }
  
    standUp(name, channel){
     return `${name}announces to ${channel}, @${channel} standy times!​​​​​.`;
  }
  debugsCode(name, student, subject){
      return `${name} debugs ${student}'s code on ${subject}.`;
  }
}
const evelyn = new Person ({
    "name": 'Evelyn',
    "age": 31,
    "location":'Guam',
    "gender": "F",
 });
 const tim = new Person({
    "name": 'Tim',
    "age": 40,
    "location": 'New York',
    "gender": "M",
 });
 const don = new Person({
    "name": 'Don',
    "age": 45,
    "location": 'Hawaii',
    "gender": "M",
 });
 
 const josh = new Instructor({
    "name": 'Josh',
    "age": 48,
    "location": 'Utah',
    "gender": "M",
    "specialty": 'Redux',
    "favLanguage": 'Python',
    "catchPhrase": 'Never Surrender!!',
 });
 const moises = new Instructor({
    "name": 'Moises',
    "age": 35,
    "location": 'Florida',
    "gender": "M",
    "specialty": 'JavaScript',
    "favLanguage": 'French',
    "catchPhrase": 'Viva Cuba!!',
 });
 const jax = new Instructor({
    "name": 'Jackee',
    "age": 30,
    "location": 'North Dakota',
    "gender": "F",
    "specialty": 'Zoom',
    "favLanguage": 'Spanish',
    "catchPhrase": 'Lets talk about it!!',
 });
 
 const lavell = new Student({
    "name": 'lavell',
    "age": 30,
    "location": 'San Francisco',
    "gender": "M",
     "previousBackground": 'Teacher',
    "className": 'CS10',
    "favSubjects": 'Art',
 });
 
 const maribel = new Student({
    "name": 'Maribel',
    "age": 36,
    "location": 'Phillipines',
    "gender": "F",
    "previousBackground": 'Wev Developer',
    "className": 'CS10',
    "favSubjects": 'Math',
 });
 
 const marco = new Student({
    "name": 'Marco',
    "age": 39,
    "location": 'San Diego',
    "gender": "M",
    "previousBackground": 'Librarian',
    "className": 'CS10',
    "favSubjects": 'Coding',
 });
 
 const dresean = new ProjectManager({
    "name": 'DreSean',
    "age": 33,
    "location": 'Chicago',
    "gender": 'M',
    "specialty": 'Python tutor',
    "favLanguage": 'German',
    "catchPhrase": 'just do it!!',
    "gradClassName": 'CS5',
    "favInstructor": 'Josh Knell',
 });
 const patrick = new ProjectManager({
    "name": 'Patrick',
    "age": 45,
    "location": 'Mississippi',
    "gender": 'M',
    "specialty": 'JS',
    "favLanguage": 'Italian',
    "catchPhrase": 'Finish your Repl.it!!',
    "gradClassName": 'CS1',
    "favInstructor": 'Patty Kennedy',
 });
 const dante = new ProjectManager({
    "name": 'Dante',
    "age": 35,
    "location": 'Phillipines',
    "gender": 'M',
    "specialty": 'Oracle',
    "favLanguage": 'Chinese',
    "catchPhrase": 'Never say Die!!',
    "gradClassName": 'CS10',
    "favInstructor": 'Dan Frehner',
 });
 
 
 console.log(evelyn.name); //?
 console.log(evelyn.speak());
 josh.speak();
 console.log(josh.demo('React'));
 console.log(moises.grade(evelyn,'JavaScript'));
 console.log(moises.grade(jax,'JavaScript'));
 
 console.log(lavell.listsSubjects());
 console.log(marco.PRAssignment(evelyn, 'Oracle'));
 console.log(lavell.sprintChallenge(marco, 'React'));
 
 console.log(dresean.gradClassName);
 console.log(dresean.standUp('Dre', 'CS10 Channel'));
 console.log(dante.debugsCode('Patrick','Dante','Classes'));