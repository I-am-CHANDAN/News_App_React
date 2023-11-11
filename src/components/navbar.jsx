const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand badge bg-primary fs-5 text-white" href="#">News Magzine</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5" style={{ cursor: "pointer" }}>
            <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("technology") }}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("business") }}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("health") }}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("science") }}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("sports") }}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("entertainment") }}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;