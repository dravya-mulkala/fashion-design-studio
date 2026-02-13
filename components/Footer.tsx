import Container from './Container';

const footerLinks = [
  'About',
  'Contact',
  'Shipping & Returns',
  'Terms of Use & Privacy',
  'Gift Cards'
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white py-10">
      <Container className="space-y-5 text-center text-sm text-slate-500">
        <div className="flex flex-col items-center gap-2">
          {footerLinks.map((item) => (
            <p key={item} className="hover:text-slate-700">
              {item}
            </p>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Fashion Design Studio. Crafted for modern wardrobes.</p>
      </Container>
    </footer>
  );
}
