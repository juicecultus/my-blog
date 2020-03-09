import Link from 'next/link';
import '../styles/main.scss';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/category/lifestyle'>
      <a style={linkStyle}>Lifestyle</a>
    </Link>
    <Link href='/category/lifestyle/london-mum'>
      <a style={linkStyle}>Lifestyle</a>
    </Link>
    <Link href='/category/lifestyle/tiny-kitchen'>
      <a style={linkStyle}>Lifestyle</a>
    </Link>
    <Link href='/category/lifestyle/tiny-humans'>
      <a style={linkStyle}>Lifestyle</a>
    </Link>
    <Link href='/category/reviews'>
      <a style={linkStyle}>Reviews</a>
    </Link>
    <Link href='/category/photography'>
      <a style={linkStyle}>Photography</a>
    </Link>
    <Link href='/category/look-book'>
      <a style={linkStyle}>Look Book</a>
    </Link>
    <Link href='/category/travel'>
      <a style={linkStyle}>Travel and Holidays</a>
    </Link>
  </div>
);

export default Header;
