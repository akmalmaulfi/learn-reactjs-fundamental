import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button, Card, Modal } from "react-bootstrap"
import Loaders from "../Utilities/loaders"

const CollectionPosts = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(5)
  const [show, setShow] = useState(false)
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false
    if (isCancelled === false) {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

      return () => (isCancelled = true)
    }
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = (data) => {
    setShow(true)
    setDetails(data)
  }

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {/* Looping card start */}
        {datas.map((data, i) => {
          return (
            <div key={i}>
              <Card style={{ width: "200px", margin: "20px" }}>
                <Card.Body>
                  <Card.Title>{data.id}</Card.Title>
                  <Card.Text>{data.title}</Card.Text>
                  <Button variant="primary" onClick={() => handleShow(data)}>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
        {/* Looping Card End */}

        {/* Details Modal Start */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Title : {details.title}</Modal.Title>
            <br />
          </Modal.Header>
          <Modal.Body>
            <h3>Id : {details.id}</h3>
            <h4>UserId : {details.userId}</h4>
            <h5>Body : {details.body}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Details Modal End */}
      </div>
    </React.Fragment>
  )
}

export default CollectionPosts
