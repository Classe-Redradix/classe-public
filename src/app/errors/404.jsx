import Link from 'next/link'

const Error404 = () => {
  return (
    <section
      style={{
        maxWidth: 500,
        margin: '2rem auto',
        textAlign: 'center',
      }}
    >
      <h1>Page not found</h1>
      <img
        src="https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"
        alt="Not found page"
        style={{
          display: 'block',
          marginBottom: '2rem',
        }}
      />
      <Link href="/">Come back to home</Link>
    </section>
  )
}

export default Error404
