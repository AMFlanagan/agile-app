import { Fragment } from 'react';
import Link from 'next/link';
import styles from './NavBar.scss';

const NavBar = ({ page }) => {
    return (
        <Fragment>
            <style jsx>{styles}</style>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Garys magical fucking app</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${page === 'index' ? 'active' : ''}`}>
                            <Link href="/">
                                <a className="nav-link" href="">Estimator</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${page === 'rtg' ? 'active' : ''}`}>
                            <Link href="/rtg">
                                <a className="nav-link">RTG</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default NavBar;
