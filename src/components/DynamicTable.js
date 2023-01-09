import { ListGroup } from "react-bootstrap";

const DynamicTable = ({ data}) => {
  const dataItems = data.map((data, index) => {
    return(
      <ListGroup>
        <ListGroup.Item key={index}>
          {data}
        </ListGroup.Item>
      </ListGroup>
    )
  })
  return(
    {dataItems}
  )
}

export default DynamicTable