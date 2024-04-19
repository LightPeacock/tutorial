import React from 'react'
import 'C:/Users/clnar/OneDrive/Desktop/Projects/tut/src/App.css'

export default function About() {
  return (
    <div>
        <nav id="navbar-example2" className="navbar bg-body-dark px-3 mb-3 rounded-2">
         <a className="navbar-brand" href="/">About Us</a>
          <ul className="nav nav-pills">
          <li className="nav-item">
         <a className="nav-link" href="#scrollspyHeading1">Details</a>
         </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">About</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Dropdown</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">Achievements</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Skills</a></li>
        <li><hr className="dropdown-divider"/></li>
      </ul>
    </li>
  </ul>
</nav>
<div class="scrollspy-example bg-body-tertiary p-3 rounded-2" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  </div>
      </div>

  )
}
