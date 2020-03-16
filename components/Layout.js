import Head from 'next/head';
import TopNav from './Navbar';

const Layout = props => (
  <div>
    <TopNav />
    {props.children}
  </div>
);

export default Layout;
