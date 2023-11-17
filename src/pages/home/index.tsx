import { Button, Form, Nav, Tab } from 'react-bootstrap';
import styles from './home.module.scss';

const Home: React.FC = () => {
	return (
		<>
			<div className={`${styles.mainWrapBlue} rounded-top-4 d-flex flex-column`}>
				{/* window header */}
				<div className="d-flex justify-content-between my-3 px-3">
					<h4 className="fs-4 fw-bold m-0">Agent Assist</h4>
					<span className={`${styles.minimizeButton} d-flex justify-content-center align-items-center rounded-circle`}>
						<span className="material-icons">remove</span>
					</span>
				</div>
				<Tab.Container defaultActiveKey="tabScript">
					{/* nav tabs */}
					<div className={`${styles.navWrap} mb-3 mx-3 p-2 rounded`}>
						<Nav variant="pills" className={`${styles.buttonsNavHome} gap-1 justify-content-between`}>
							<Nav.Item>
								<Nav.Link className="py-1 px-2 d-flex align-items-center gap-1" eventKey="tabScript">
									<span className="material-icons">description</span>
									Script
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="py-1 px-2 d-flex align-items-center gap-1" eventKey="tabHelp">
									<span className="material-icons">search</span>
									Help
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="py-1 px-2 d-flex align-items-center gap-1" eventKey="tabTranscript">
									<span className="material-icons">record_voice_over</span>
									Transcript
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
					<div className={`${styles.promptTabContainer} d-flex flex-column flex-grow-1`}>
						<Tab.Content className="flex-grow-1">
							<Tab.Pane eventKey="tabScript" className="h-100">
								{/* chat panel */}
								<div className="position-relative h-100">
									<div className={`${styles.chatPanelWrap} h-100 px-3`}>
										<div className={`${styles.stepContent} mb-3`}>
											<h4 className="fs-6 fw-bold">Step 3: Phone Configuration</h4>
											<p className="m-0">
												In this step, you can configure the phone line with calling features and offer phone number
												porting or search for a prefered number for the customer
											</p>
										</div>
										<div className={`${styles.chatBubble} ${styles.sent} mb-3 p-3 shadow-sm`}>
											<p className="m-0">"Do you have an existing phone number you would like to keep?"</p>
										</div>
										<div className={`${styles.chatBubble} ${styles.received}  mb-3 p-3 shadow-sm`}>
											<p className="m-0">"I want some more information"</p>
										</div>
										<div className={`${styles.chatBubble} ${styles.sent} mb-3 p-3 shadow-sm`}>
											<p className="m-0">
												"Is there a new number you would like to search for such as a number ending with a particular
												last 4 digit?"
											</p>
										</div>
									</div>
									{/* input text box */}
									<div className="position-absolute bottom-0 end-0 start-0 px-3 py-2 bg-info d-flex gap-2">
										<Form.Control
											className={`${styles.inputText} rounded-5`}
											placeholder="Type here..."
											aria-label="Type"
										/>
										<Button
											className={`${styles.sendButton} d-inline-flex bg-light justify-content-center align-items-center rounded-circle p-0`}
										>
											<span className="material-icons text-dark fs-5">send</span>
										</Button>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="tabHelp">...</Tab.Pane>
							<Tab.Pane eventKey="tabTranscript">...</Tab.Pane>
						</Tab.Content>
					</div>
				</Tab.Container>
			</div>
		</>
	);
};
export default Home;
