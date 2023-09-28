import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/shop-title.png";

export default function NavBarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="nav-height">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <Link className=" nav-link" href="#home">
                <Image
                  src={Logo}
                  width={60}
                  height={50}
                  className="img-nav"
                  alt="store image"
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mt-2 pages-links  home-link"
                href="#home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mt-2 pages-links"
                href="#about-refs"
              >
                What is Refs?
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active mt-2  pages-links"
                href="#another-about"
              >
                Another Option
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active mt-2  pages-links"
                href="#our-arts"
              >
                Our Arts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mt-2 pages-links"
                href="#about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
