import Course from "./components/Course";
import data from "./data";

function App() {
  const courses = data;

  return (
    courses.map(course => {
      return <Course key={course.id} course={course}/>
    })
  );
}

export default App;
