const Course = (props) => {
    return (
      <div>
        <Header header = {props.course.name}/>
        <Content parts = {props.course.parts}/>
        <Total total = {props.course.parts} />
      </div>
    )
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.header}</h1>
      </div>
    )
    }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => 
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>       
          )}
      </div>
    )
  }
  
  const Total = (props) => {
    const total = props.total.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.exercises
      }, 0)
    return (
     <div>
       <b>total of {total} exercises</b>
     </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }

  export default Course