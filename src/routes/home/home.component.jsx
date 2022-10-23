import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaArrowCircleRight, FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";

import "./home.styles.css"

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const { isLoading, data } = useQuery("places", () => {
    return axios.get("http://localhost:5000/");
  });

  useEffect(() => {
    if (!isLoading) {
      const image = document.getElementById("header-image");
      image.src = place.imageURL;
    }
  }, [slideIndex, isLoading]);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  const place = data?.data[slideIndex].placeInfo;

  const slideRight = () => {
    if (slideIndex < 2) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 2) {
      setSlideIndex(0);
    }
  };

  const slideLeft = () => {};

  // const images = data?.data.map((dt) => dt.placeInfo.imageURL);
  // console.log(images);

  console.log(slideIndex);
  console.log(place.name);

  return (
    <div>
      <MDBRow>
        <MDBCol
          size="md"
          className="bg-trans-black-blur bg-opacity-50 p-5 shadow-5 rounded-4 text-light"
          style={{ height: "calc(100vh - 250px)" }}
        >
          <h1 className="mt-5 jumbo-text mb-4">{place.name}</h1>
          <p className="mb-5">{place.description.slice(0, 300).concat("...")}</p>
          <button className="btn btn-warning px-5 py-2 text-dark shadow-3">Booking <FaArrowRight /></button>
        </MDBCol>
        <MDBCol
          size="md"
          className="d-flex justify-content-center align-items-center"
          style={{ height: "calc(100vh - 250px)" }}
        >
          <div className="d-flex">
            <img
              id="header-image"
              className="mx-auto rounded-8 border border-5 border-dark mt-3 mt-lg-0"
              src=""
              style={{ height: "550px", width: "350px", objectFit: "cover" }}
              alt=""
            />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol size="md" className="d-flex gap-4 p-4 justify-content-center">
          <FaArrowCircleLeft onClick={slideLeft} className="carousel-arrow" />
          <FaArrowCircleRight onClick={slideRight} className="carousel-arrow" />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Home;
