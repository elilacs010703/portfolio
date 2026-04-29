import { useEffect, useRef } from "react"
import gsap from "gsap"

function Hero() {

  const title = useRef()
  const role = useRef()
  const description = useRef()
  const image = useRef()

  useEffect(() => {

    gsap.from(title.current, {
      y: 80,
      opacity: 0,
      duration: 1
    })

    gsap.from(role.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.3
    })

    gsap.from(description.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6
    })

    gsap.from(image.current, {
      x: -80,
      opacity: 0,
      duration: 1,
      delay: 0.4
    })

  }, [])

  return (
    <section style={styles.hero}>

      <div style={styles.container}>

        <img
          ref={image}
          src="/profile.png"
          alt="Elijah Lacra"
          style={styles.image}
        />

        <div>

          <h1 ref={title} style={styles.title}>
            Elijah Andjelo M. Lacra
          </h1>

          <h2 ref={role} style={styles.role}>
            Full Stack Developer
          </h2>

          <p ref={description} style={styles.description}>
            Fresh Computer Engineering graduate passionate about backend
            development, APIs, and scalable systems. I enjoy building
            efficient solutions and solving complex technical problems.
          </p>

        </div>

      </div>

    </section>
  )
}

const styles = {

  hero: {
    height: "100vh",
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },

  container: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
    maxWidth: "1000px",
    padding: "20px"
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #38bdf8"
  },

  title: {
    fontSize: "3rem",
    marginBottom: "10px"
  },

  role: {
    color: "#38bdf8",
    marginBottom: "20px"
  },

  description: {
    maxWidth: "500px",
    lineHeight: "1.6"
  }

}

export default Hero
