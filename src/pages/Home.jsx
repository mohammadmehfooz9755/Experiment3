import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="bg-primary text-light py-5">
      <Container className="text-center">
        <h1 className="fw-bold">Welcome to ShopEase</h1>
        <p className="mt-3 fs-5">
          Shop electronics, fashion, and home essentials.
        </p>
        <Button variant="light" size="lg">
          Explore Products
        </Button>
      </Container>
    </div>
  );
}

export default Home;