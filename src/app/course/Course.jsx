const Course = ({ course }) => {
  const { information, index, objetives } = course

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '500px',
        margin: 'auto',
      }}
    >
      <h1>{information.name}</h1>
      <p>{information.description}</p>
      <p>{information.nextCallDate}</p>
      <p>{information.price}$</p>
      <p>{information.hours} hours</p>
      <p>{information.places} student places</p>
      <p>{information.enrolledStudents} enrolled students</p>
      <p>{information.successPercentage}% success</p>
      <section>
        <h2>Sections</h2>
        <ol>
          {index.map(section => (
            <li key={`section-${section.number}`}>
              <div>
                <h3>{section.name}</h3>
                <p>{section.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h2>Objetives</h2>
        <ul>
          {objetives.map((objetive, idx) => (
            <li key={`objetive-${idx}`}>{objetive}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Course
