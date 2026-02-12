import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Products({ setCartCount }) {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1518441902117-f0a6c6d1b0f1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155228b7d4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Products</h2>

      <Row className="g-4">
        {products.map(p => (
          <Col md={3} key={p.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                src={p.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>{p.name}</Card.Title>
                <Card.Text className="fw-bold">₹ {p.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => setCartCount(c => c + 1)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;