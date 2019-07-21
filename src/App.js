import React from "react";
import "./App.css";

function App() {
  return (
    <div className="h-100">
      <div className="color-switcher animated">
        <h5>Accent Color</h5>
        <ul className="accent-colors">
          <li className="accent-primary active" data-color="primary">
            <i className="material-icons">check</i>
          </li>
          <li className="accent-secondary" data-color="secondary">
            <i className="material-icons">check</i>
          </li>
          <li className="accent-success" data-color="success">
            <i className="material-icons">check</i>
          </li>
          <li className="accent-info" data-color="info">
            <i className="material-icons">check</i>
          </li>
          <li className="accent-warning" data-color="warning">
            <i className="material-icons">check</i>
          </li>
          <li className="accent-danger" data-color="danger">
            <i className="material-icons">check</i>
          </li>
        </ul>
        <div className="close">
          <i className="material-icons">close</i>
        </div>
      </div>
      <div className="color-switcher-toggle animated pulse infinite">
        <i className="material-icons">settings</i>
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* <!-- Main Sidebar --> */}
          <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
            <div className="main-navbar">
              <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                <a className="navbar-brand w-100 mr-0" href="#top" style={{lineHeight: '25px'}} >
                  <div className="d-table m-auto">
                    <img
                      id="main-logo"
                      className="d-inline-block align-top mr-1"
                      style={{maxWidth: '25px'}}
                      src="images/shards-dashboards-logo.svg"
                      alt="Shards Dashboard"
                    />
                    <span className="d-none d-md-inline ml-1">
                      Chun Admin
                    </span>
                  </div>
                </a>
                <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none" href="#top">
                  <i className="material-icons">&#xE5C4;</i>
                </a>
              </nav>
            </div>
            <form
              action="#"
              className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none"
            >
              <div className="input-group input-group-seamless ml-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <input
                  className="navbar-search form-control"
                  type="text"
                  placeholder="Search for something..."
                  aria-label="Search"
                />
              </div>
            </form>
            <div className="nav-wrapper">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link " href="index.html">
                    <i className="material-icons">edit</i>
                    <span>Blog Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="components-blog-posts.html">
                    <i className="material-icons">vertical_split</i>
                    <span>Blog Posts</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="add-new-post.html">
                    <i className="material-icons">note_add</i>
                    <span>Add New Post</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="form-components.html">
                    <i className="material-icons">view_module</i>
                    <span>Forms &amp; Components</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="tables.html">
                    <i className="material-icons">table_chart</i>
                    <span>Tables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="user-profile-lite.html">
                    <i className="material-icons">person</i>
                    <span>User Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="errors.html">
                    <i className="material-icons">error</i>
                    <span>Errors</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {/* <!-- End Main Sidebar --> */}
          <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <div className="main-navbar sticky-top bg-white">
              {/* <!-- Main Navbar --> */}
              <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                <form
                  action="#"
                  className="main-navbar__search w-100 d-none d-md-flex d-lg-flex"
                >
                  <div className="input-group input-group-seamless ml-3">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-search" />
                      </div>
                    </div>
                    <input
                      className="navbar-search form-control"
                      type="text"
                      placeholder="Search for something..."
                      aria-label="Search"
                    />
                  </div>
                </form>
                <ul className="navbar-nav border-left flex-row ">
                  <li className="nav-item border-right dropdown notifications">
                    <a
                      className="nav-link nav-link-icon text-center"
                      href="#top"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="nav-link-icon__wrapper">
                        <i className="material-icons">&#xE7F4;</i>
                        <span className="badge badge-pill badge-danger">2</span>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-small"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#top">
                        <div className="notification__icon-wrapper">
                          <div className="notification__icon">
                            <i className="material-icons">&#xE6E1;</i>
                          </div>
                        </div>
                        <div className="notification__content">
                          <span className="notification__category">Analytics</span>
                          <p>
                            Your website’s active users count increased by
                            <span className="text-success text-semibold">
                              28%
                            </span>{" "}
                            in the last week. Great job!
                          </p>
                        </div>
                      </a>
                      <a className="dropdown-item" href="#top">
                        <div className="notification__icon-wrapper">
                          <div className="notification__icon">
                            <i className="material-icons">&#xE8D1;</i>
                          </div>
                        </div>
                        <div className="notification__content">
                          <span className="notification__category">Sales</span>
                          <p>
                            Last week your store’s sales count decreased by
                            <span className="text-danger text-semibold">5.52%</span>
                            . It could have been worse!
                          </p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item notification__all text-center"
                        href="#top"
                      >
                        {" "}
                        View all Notifications{" "}
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-nowrap px-3"
                      data-toggle="dropdown"
                      href="#top"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        className="user-avatar rounded-circle mr-2"
                        src="images/avatars/0.jpg"
                        alt="User Avatar"
                      />
                      <span className="d-none d-md-inline-block">
                        Sierra Brooks
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-small">
                      <a className="dropdown-item" href="user-profile-lite.html">
                        <i className="material-icons">&#xE7FD;</i> Profile
                      </a>
                      <a
                        className="dropdown-item"
                        href="components-blog-posts.html"
                      >
                        <i className="material-icons">vertical_split</i> Blog Posts
                      </a>
                      <a className="dropdown-item" href="add-new-post.html">
                        <i className="material-icons">note_add</i> Add New Post
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#top">
                        <i className="material-icons text-danger">&#xE879;</i>{" "}
                        Logout{" "}
                      </a>
                    </div>
                  </li>
                </ul>
                <nav className="nav">
                  <a
                    href="#top"
                    className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
                    data-toggle="collapse"
                    data-target=".header-navbar"
                    aria-expanded="false"
                    aria-controls="header-navbar"
                  >
                    <i className="material-icons">&#xE5D2;</i>
                  </a>
                </nav>
              </nav>
            </div>
            {/* <!-- / .main-navbar --> */}
            <div className="error">
              <div className="error__content">
                <h2>500</h2>
                <h3>Something went wrong!</h3>
                <p>There was a problem on our end. Please try again later.</p>
                <button type="button" className="btn btn-accent btn-pill">
                  &larr; Go Back
                </button>
              </div>
              {/* <!-- / .error_content --> */}
            </div>
            {/* <!-- / .error --> */}
          </main>
        </div>
      </div>
      <div className="promo-popup animated">
        <a
          href="http://bit.ly/shards-dashboard-pro"
          className="pp-cta extra-action"
        >
          <img src="https://dgc2qnsehk7ta.cloudfront.net/uploads/sd-blog-promo-2.jpg" alt="Logo"/>
        </a>
        <div className="pp-inner-content">
          <h2>Shards Dashboard Pro</h2>
          <p>A premium & modern Bootstrap 4 admin dashboard template pack.</p>
          <a
            className="pp-cta extra-action"
            href="http://bit.ly/shards-dashboard-pro"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
