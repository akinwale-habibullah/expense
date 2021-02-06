# expense
Simple expense tracking application using Event Sourcing for persisting data.



<!--
*** Template from https://github.com/othneildrew/Best-README-Template/blob/master/README.md by https://github.com/othneildrew.
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/akinwale-habibullah/expense">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Expense</h3>

  <p align="center">
    An expense tracking implementation using Event Sourcing.
    <br />
    <a href="https://github.com/akinwale-habibullah/expense"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/akinwale-habibullah/expense">View Demo</a>
    ·
    <a href="https://github.com/akinwale-habibullah/expense/issues">Report Bug</a>
    ·
    <a href="https://github.com/akinwale-habibullah/expense/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/akinwale-habibullah/expense)

Most of the materials I came across while trying to learn about Event Sourcing, CQRS and DDD were either implemented in Java, C# or C++. In my experience, there are not enough materials on Event Sourcing, CQRS, and DDD implementations in Node.JS freely available on the internet. 

This is my attempt at documenting what I have learn about Event Sourcing in regards to implementations in Node.JS. This application is a simple introduction to Event Sourcing in Node.JS.

Advantages of Event Sourcing:

* Accurate audit logging: Build auditing functionality as part of your app, which helps guarantee data completeness.
* Easy temporal queries: Easily reconstruct the historical change of an object, considering that in Event Sourcing, we keep a complete historcal history of the object.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [React](https://reactjs.org/)



<!-- GETTING STARTED -->
## Getting Started

Simply clone the project, install the dependencies and run the app. Read the instructions below;

### Prerequisites

This project assumes you have these installed and properly setup on your computer.

* [Node.js](https://nodejs.org/en/)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/akinwale-habibullah/expense
   ```
2. Change directory
   ```sh
   cd expense
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run application
   ```JS
   npm run dev
   ```



<!-- USAGE EXAMPLES -->
## Usage

TODO: Useful examples



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/akinwalehabib/expense/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Akinwale Habib - [@akinwalehabib](https://twitter.com/akinwalehabib) - akinwalehabib@hotmail.com

Project Link: [Repo](https://github.com/akinwale-habibullah/expense)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/akinwale-habibullah/expense?style=for-the-badge
[contributors-url]: https://github.com/akinwale-habibullah/expense/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/akinwale-habibullah/expense.svg?style=for-the-badge
[forks-url]: https://github.com/akinwale-habibullah/expense/network/members
[stars-shield]: https://img.shields.io/github/stars/akinwale-habibullah/expense.svg?style=for-the-badge
[stars-url]: https://github.com/akinwale-habibullah/expense/stargazers
[issues-shield]: https://img.shields.io/github/issues/akinwale-habibullah/expense.svg?style=for-the-badge
[issues-url]: https://github.com/akinwale-habibullah/expense/issues
[license-shield]: https://img.shields.io/github/license/akinwale-habibullah/expense.svg?style=for-the-badge
[license-url]: https://github.com/akinwale-habibullah/expense/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/akinwalehabib
[product-screenshot]: images/screenshot.png