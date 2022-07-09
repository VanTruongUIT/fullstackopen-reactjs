import React from 'react'


const Header = (props) => {
  return (
    <div>
    {/* props.course: tức là truyền data từ bên ngoài vào, có nghĩa là khi khởi tạo, khai báo một component mới phải truyền key à course={} */}
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {

  return (
    <div>
    {/* props.part: Phải truyền part={} khi tạo một một component Content */}
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
    {/* Tuy ở đây mình gọi 2 lần props.part.name và props.part.exercises Nhưng mình chỉ quan tâm đến props. cái gì sau nó để truyền vô thôi, còn phía sau là do dữ liệu của cái được vào mình không quan tâm*/}
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of Excercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}
    </p>
  );
};

const App = (props) => {
  const course = {
    name: "Half Stack application development",
    part: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      },
    ]
  };

  return (
    <div>
      <Header course={course?.name} />
      <Content part={course.part}/>
      <Total part={course.part} />
    </div>
  );
};

export default App;
