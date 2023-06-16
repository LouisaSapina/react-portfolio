const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Astana, Kazakhstan</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+77056318905">+7 (705) 631-89-05</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Gmail</h2>
						<p>
							<a href="mailto:luiza.sapina.ls@gmail.com">
								luiza.sapina.ls@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;