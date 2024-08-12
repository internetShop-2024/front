import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./dist/bread.css";



const translations = {
    home: "ГОЛОВНА",
    catalog: "КАТАЛОГ",
    plants_protecting_tools: "ЗАСОБИ ЗАХИСТУ РОСЛИН",
    cart: "КОРЗИНА"
};

const translatePath = (path) => {
    return translations[path] || path;
};

export function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);


    if (location.pathname === "/" || location.pathname === '/sign-in'|| location.pathname === '/sign-up') {
        return null;
    }

    return (
        <nav id='bread'>
            <ul className="breadcrumb">
                <li className='prev_link'>
                    <Link className='prev' to="/">{translatePath('home')}</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to} className={isLast ? '' : 'prev_link'}>
                            <Link className={isLast ? 'active_link' : 'prev'} to={to}>{translatePath(value)}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}