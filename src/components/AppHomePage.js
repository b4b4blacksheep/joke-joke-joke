import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'


import "./style.css"

export default function AppHomePage() {
	return (
		<>
		<Container>
			<div>
				<div>
					<h1 className="py-4 text-center"><strong>Joke! Joke! Joke!</strong></h1>
					<h3 className="pt-4 text-start"><strong>Welcome to the Jokes Generator Documentation</strong></h3>
					<p className="ms-4"><li>In this documentation, you will discover insights into our whimsical creation: the Jokes Generator, a lighthearted endeavor designed to bring joy and laughter to all. The project is divided into two parts: the Tagalog Jokes Generator and the English Jokes Generator.</li></p>
				</div>
				<div>
					<h3 className="pt-5 text-start"><strong>Tagalog Jokes Generator:</strong></h3>
					<p className="ms-4"><li>With the Tagalog Jokes Generator, we aim to spread laughter within the Filipino community and beyond. This component is tailored to deliver humorous anecdotes and witty jests in the Tagalog language. Its purpose is to add a touch of mirth to your day and brighten your spirits.</li></p>
					<p className="ms-4"><li>API Documentation of the <a href="https://tagalog-jokes-documentation.vercel.app/" target="_blank">Tagalog Jokes Generator</a>.</li></p>
				</div>
				<div>
					<h3 className="pt-5 text-start"><strong>English Jokes Generator:</strong></h3>
					<p className="ms-4"><li>The English Jokes Generator caters to a broader audience, offering a diverse selection of jokes in the English language. Our goal is to evoke smiles and chuckles across cultures and backgrounds, fostering a sense of unity through shared laughter.</li></p>
					<p className="ms-4"><li>API Documentation of the <a href="https://official-joke-api.appspot.com/" target="_blank">English Jokes Generator</a>.</li></p>
				</div>
				<div>
					<h3 className="pt-5 text-start"><strong>Terms of Use:</strong></h3>
					<p className="ms-4"><li>These Terms of Use ("Terms") govern your use of the "Joke! Joke! Joke!" application ("the Application") provided by the developer. Please <Link to="/terms-of-use">read</Link> these Terms carefully before using the Application.</li></p>
				</div>
			</div>
		</Container>
		<Footer />
		</>
	)
}

function Footer() {
  return (
    <Navbar className="bg-body-tertiary footer">
      <Container fluid className="justify-content-end pt-5 pb-5">
          <Navbar.Text >
            Developed solely by: <a href="https://www.linkedin.com/in/carlo-i-corcuera/" target="_blank">Sir Carlo Corcuera</a>
          </Navbar.Text>
      </Container>
    </Navbar>
  );
}