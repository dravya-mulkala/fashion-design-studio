import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white py-8">
      <Container className="text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Fashion Design Studio. Crafted for modern wardrobes.</p>
      </Container>
    </footer>
  );
}
