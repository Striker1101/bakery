import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ datas, handleAddCart }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {datas.map((data, index) => {
        return (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>${data.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  handleAddCart(index);
                }}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;
