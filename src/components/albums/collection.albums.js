import React, { useEffect, useState } from "react"
import Axios from "axios"
import { Carousel, Button, ButtonGroup } from "react-bootstrap"
import Loaders from "../Utilities/loaders"

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false
    if (isCancelled === false) {
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

      // clean up render
      return () => {
        isCancelled = true
      }
    }
  }, [limit])

  const handleLimit = (option) => {
    if (option === "+") {
      setLimit((prev) => prev + 1)
    } else {
      setLimit((prev) => prev - 1)
    }
  }

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <Carousel>
        {/* Carousel item start */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.thumbnailUrl}
                alt="First slide"
                width={450}
                height={450}
              />
              <Carousel.Caption>
                <h3>{data.id}</h3>
                <p>{data.title}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
        {/* Carousel item end */}
      </Carousel>
      <ButtonGroup className="d-flex mt-2 mb-4">
        <Button variant="primary" onClick={() => handleLimit("+")}>
          +
        </Button>
        {limit > 1 && (
          <Button variant="danger" onClick={() => handleLimit("-")}>
            -
          </Button>
        )}
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Collection
