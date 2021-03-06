import React from 'react';
import LayoutNav from '../components/LayoutNav';
import Footer from '../components/Footer';
import DeployButton from '../components/DeployButton'
import Auth from '../components/Auth';
import styles from './styles.module.scss';

class Deploy extends React.Component {
    render() {
        return (
			<Auth needsAuth={false}>
				<div className="deploy-page">
					<main className="content">
						<header className="header">
							<LayoutNav effect={true} static={true} sidebarHamburguerIcon={true} />
						</header>

						<section className={`container-fluid container-fluid-max-lg ${styles.container}`}>
							<ol>
								<li>
									<h2>Write your documentation <a href="https://drive.google.com/drive/u/1/folders/1M0L3J8z5MTjppfs7uJrahVTDti1TZewh">here</a>
									</h2>
								</li>
								<li>
									<h2>Push this button to deploy changes to staging site:
										<DeployButton deployHook={`${process.env.GATSBY_UAT_DEPLOY_HOOK}`}>
											UAT
										</DeployButton>
									</h2>
								</li>
								<li>
									<h2>Preview your changes <a href="https://uat--lfrism-doc.netlify.com/">here</a>
									</h2>
								</li>
								<li>
									<h2>Once you're happy with you're changes deploy to production by pushing this button:
										<DeployButton deployHook={`${process.env.GATSBY_PRD_DEPLOY_HOOK}`}>
											PROD
										</DeployButton>
									(it'll be there in a few minutes)
									</h2>
								</li>
							</ol>
						</section>

						<section className={styles.footerContainer}>
							<Footer />
						</section>
					</main>
				</div>
			</Auth>
    )};
}

export default Deploy;
