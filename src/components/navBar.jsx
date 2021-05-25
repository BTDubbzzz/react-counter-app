const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#Home">
					Navbar{' '}
					<span>Current amount of counters that have values: {totalCounters}</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
