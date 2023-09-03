import { Container } from 'react-bootstrap';

import './style.css'

export default function AppTermsOfUse() {
	return (
		<Container>
			<div>
				<div>
					<h1 className="py-3 text-start"><strong>Joke! Joke! Joke!</strong></h1>
				</div>
				<div>
					<h3 className="text-start"><strong>Terms of Use (English)</strong></h3>
					<p>The API includes error handling mechanisms to provide informative responses in case of issues or unexpected situations.</p>
					<ol>
						<p className="ms-5">
							<li>
								<span className="fw-bold">Acceptance of Terms:</span>
							</li>
							<ul>
								<li>By accessing or using the Joke Generator ("the Service"), you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use the Service.
								</li>
							</ul>

							<li>
								<span className="fw-bold">Use of the Service:</span>
							</li>
							<ul>
								<li>You may use the Service for personal and non-commercial purposes. You may not use the Service in any way that violates applicable laws or regulations.
								</li>
							</ul>

							<li>
								<span className="fw-bold">Content:</span>
							</li>
							<ul>
								<li>The jokes and content provided by the Service are for entertainment purposes only. We do not guarantee the accuracy, completeness, or reliability of the jokes.
								</li>
							</ul>

							<li>
								<span className="fw-bold">User Conduct:</span>
							</li>
							<ul>
								<li>You are responsible for your conduct while using the Service. You must not use the Service for any unlawful purpose or in any way that infringes on the rights of others.
								</li>
							</ul>

							<li>
								<span className="fw-bold">API Usage:</span>
							</li>
							<ul>
								<li>If you access the Service's API, you must adhere to the API documentation and rate limits provided. Abuse of the API may result in access restrictions.
								</li>
							</ul>

							<li>
								<span className="fw-bold">Privacy:</span>
							</li>
							<ul>
								<li>We may collect and use information as described in our Privacy Policy. By using the Service, you consent to such data practices.
								</li>
							</ul>
							<li>
								<span className="fw-bold">Change of Terms:</span>
							</li>
							<ul>
								<li>We reserve the right to modify these Terms of Use at any time. You are responsible for reviewing the updated terms periodically.
								</li>
							</ul>
							<li>
								<span className="fw-bold">Termination:</span>
							</li>
							<ul>
								<li>We may terminate or suspend your access to the Service at our discretion, with or without notice, for any reason, including a breach of these terms.
								</li>
							</ul>

							<li>
								<span className="fw-bold">Disclaimer:</span>
							</li>
							<ul>
								<li>The Service is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use the Service.
								</li>
							</ul>

							<li>
								<span className="fw-bold">Contact:</span>
							</li>
							<ul>
								<li> If you have questions or concerns about these Terms of Use, please <a href="mailto:carloicorcuera@gmail.com?subject=Joke!%20Joke!%20Joke!%20Terms%20of%20Use%20Concern">contact us</a>.
								</li>
							</ul>
						</p>
					</ol>
				</div>
			</div>
		</Container>
	)
}