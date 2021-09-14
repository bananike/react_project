import { Fragment, memo, useState } from 'react';
import { Navbar, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import Main from '../Main';
import BebeCam from '../BebeCam';
import CareCenter from '../CareCenter';
import IvoryView from '../IvoryView';
import IvoryMall from '../IvoryMall';
import Contact from '../Contact';
import ScrollToTop from '../../Components/ScrollToTop';

const routes = [
    { path: '/', exact: true, Component: Main, menuTitle: '' },
    { path: '/main', exact: true, Component: Main, menuTitle: '아이보리' },
    { path: '/bebecam', exact: true, Component: BebeCam, menuTitle: '베베캠' },
    { path: '/carecenter', exact: true, Component: CareCenter, menuTitle: '산후조리원' },
    { path: '/ivoryview', exact: true, Component: IvoryView, menuTitle: '아이보리뷰' },
    { path: '/ivorymall', exact: true, Component: IvoryMall, menuTitle: '아이보리몰' },
    { path: '/contact', exact: true, Component: Contact, menuTitle: 'CONTACT' },
];

const Home = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <BrowserRouter>
                <Navbar expand="md">
                    <Link to="/">
                        <h1>
                            <img src="/img/logo.png" alt="아이보리" />
                        </h1>
                    </Link>
                    <NavbarToggler onClick={toggle} className={`menu-trigger type7 ${isOpen ? 'active-7' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {routes.map((m, i) => (
                                <Fragment key={i}>
                                    {m.menuTitle !== '' && (
                                        <NavItem>
                                            <NavLink
                                                to={m.path}
                                                isActive={(match, location) => {
                                                    if (!match && location.pathname === '/' && m.path === '/main') return true;
                                                    else return match;
                                                }}
                                            >
                                                {m.menuTitle}
                                            </NavLink>
                                        </NavItem>
                                    )}
                                </Fragment>
                            ))}
                        </Nav>
                    </Collapse>
                </Navbar>

                <ScrollToTop>
                    {routes.map(({ path, exact, Component }) => (
                        <Route key={path} exact={exact} path={path}>
                            <div style={{ paddingTop: 60 }}>
                                <Component />
                            </div>
                        </Route>
                    ))}
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
});

export default Home;
