import "./navbar.css"

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <div className="py-1">
          <a className="navbar-brand badge bg-primary fs-5 text-white" href="/">News Magzine</a>
        </div>

        <div className="navbar-collapse py-1" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5" style={{ cursor: "pointer" }}>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white bg-success badge fs-5 p-2" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <div className="nav-link active nav-btn text-white" onClick={() => { setCategory("technology") }}>Technology</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link active nav-btn text-white" onClick={() => { setCategory("business") }}>Business</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link active nav-btn text-white" onClick={() => { setCategory("health") }}>Health</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link active nav-btn text-white" onClick={() => { setCategory("science") }}>Science</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link active nav-btn text-white" onClick={() => { setCategory("sports") }}>Sports</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link active nav-btn text-white" onClick={() => { setCategory("entertainment") }}>Entertainment</div>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("technology") }}>Technology</div>
            </li> */}
            {/* <li className="nav-item">
              <div className="nav-link active text-white" onClick={() => { setCategory("business") }}>Business</div>
            </li> */}
            {/* <li className="nav-item">
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
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;