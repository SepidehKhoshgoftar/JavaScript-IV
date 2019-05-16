// CODE here for your Lambda Classes
class person{
    constructor(attributes){
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;

    }
    speak(){
    return `Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location}are the object's own props`; 
    }
}
class Instractor extends person {
    constructor(instractorAtt){
    super(instractorAtt);
   this.specialty = instractorAtt.specialty ;
   this.favInstructor = instractorAtt.favInstructor;
   this.catchPhrase = instractorAtt.catchPhrase
    }

demo(subject){
   return `Today we are learning about ${this.subject}.`;
}
grade(student,subject){
    return '{student.name} receives a perfect score on {subject}';
}
}
