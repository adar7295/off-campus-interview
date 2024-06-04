import React from 'react'

const About = () => {
  return (
    <div>
      
    <div>
      <>
        <header className={`bg-blue-700 ${styles.header}`}>
          <h1>About Us</h1>
        </header>
        <main className={styles.main}>
          <section>
            <h2 className="text-3xl text-black font-bold mb-2">
              Our<span className="text-blue-700">Company</span>
            </h2>
            <p>
              At Office Space, we're dedicated to revolutionizing the way you
              work. We understand that the traditional office model doesn't
              always suit the diverse needs of modern businesses and
              professionals. That's why we've crafted a flexible office space
              solution that adapts to you.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-black font-bold my-4">Our<span className="text-blue-700">Mission</span></h2>
            <p>
              Our mission is simple: to provide a dynamic workspace that fosters
              productivity, collaboration, and innovation. We believe that where
              you work should empower you to do your best work, whether you're a
              freelancer, startup, or established corporation.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-black font-bold my-4">Our<span className="text-blue-700">Spaces</span></h2>
            <p>
            From private offices and dedicated desks to shared coworking areas and meeting rooms, we have a space that's perfect for you. Our thoughtfully designed environments are equipped with high-speed internet, ergonomic furniture, and everything else you need to thrive.
            </p>
          </section>
        </main>
        <footer className={`bg-blue-700 ${styles.footer}`}>
          <p>© 2024 office Space. All rights reserved.</p>
        </footer>
      </>
    </div>
  


    </div>
  );
}

export default About;