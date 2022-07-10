import Course from "./components/Course";
import Note from "./components/Note";

function App() {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  const totalExercises = (course) => {
    const exercises = [];
    for (const item of course.parts) {
      exercises.push(item.exercises);
    }
    return exercises.reduce((previous, current) => previous + current);
  }

  return (
    <div>
      {
        courses.map(course => {
          const total = totalExercises(course);
          return (
            <div key={course.id}>
              <h1>{course.name}</h1>
              <Course course={course.parts} />
              <p>Total of {total} exercises</p>
            </div>
          );
        }) 
      }
    </div>
  );
}

export default App;
