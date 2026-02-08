import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';

export const Layout: React.FC = () => {
    return (
        <>
            <MobileBottomNav />
            <Header />
            <main className="flex-1 pb-24 md:pb-0">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
