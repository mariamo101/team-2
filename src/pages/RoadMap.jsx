/* eslint-disable */
import { Container, Row, Col } from "reactstrap";
// Button for feedback
import MainButton from "../components/feedbackboard/mainButton/MainButton";
import { useEffect, useState, useContext } from "react";
import {useNavigate} from 'react-router-dom'
// styles
import styles from "../styles/RoadMap.module.css";
import RoadMapFilter from "../components/UI/RoadMapFilter";
// Contexts
import { FeedbackContext } from "../store/feedback-context";

const statuses = [
  {
    name: "Planned",
    value: "planned",
    id: 1,
    color: "#F49F85",
    process: "Ideas prioritized for research",
  },
  {
    name: "In-Progress",
    value: "in-progress",
    id: 2,
    color: "#AD1FEA",
    process: "Currently being developed",
  },
  {
    name: "Live",
    value: "live",
    id: 3,
    color: "#62BCFA",
    process: "Released features",
  },
];

function RoadMap() {
  const [stateNum, setStateNum] = useState(1);
  const { getFeedbacksByName, productData } = useContext(FeedbackContext);
  const [products, setProducts] = useState(null);
  const [planned, setPlanned] = useState(null);
  const [progress, setProgress] = useState(null);
  const [live, setLive] = useState(null);

  const navigate = useNavigate()
  useEffect(() => {
    const filteredNames = statuses.filter((item) => item.id === stateNum)[0]
      .value;
    setProducts(getFeedbacksByName(filteredNames));
    
    setPlanned(getFeedbacksByName("planned"));
    setProgress(getFeedbacksByName("in-progress"));
    setLive(getFeedbacksByName("live"));
  }, [stateNum]);

  return (
    <>
      <Container className="max-w-screen-desktop overflow-x-hidden">
        <Row>
          <header className="bg-headerBg flex justify-between items-center text-textSecondary px-4 py-4 mobile:rounded-lg">
            <Col
              lg="1"
              className="items-center justify-between  text-[.6125rem] mobile:text-[.8125rem] flex flex-col"
            >
              <div className="flex  items-center gap-3 cursor-pointer flex-wrap  flex-row self-start">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 9L2 5l4-4"
                    stroke="#fff"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className=" font-bold"  onClick={()=>navigate(-1)}>Go Back</span>
              </div>
              <p className="m-0 tracking-[-0.25px] font-bold">Roadmap</p>
            </Col>
            <Col lg="6" className="flex flex-row-reverse">
              <MainButton text="+ Add Feedback" path="/new-feedback" />
            </Col>
          </header>
        </Row>
        <Row>
          <div className="flex tablet:hidden">
            {statuses.map((status) => (
              <Col
                key={status.id}
                xs={12 / statuses.length}
                className="flex  justify-center items-center mt-3 relative"
                onClick={() => setStateNum(status.id)}
              >
                <span
                  className={`font-bold text-[13px] mb-2 cursor-pointer ${
                    status.id === stateNum ? "text-title" : "text-viewD"
                  }`}
                >
                  {status.name}
                </span>
                {stateNum === status.id && (
                  <div
                    className={`${styles.animation} w-[60%] h-1 mb-1 bg-[${status.color}] absolute -bottom-1  rounded-sm`}
                  />
                )}
              </Col>
            ))}
          </div>
          {/* <div className="h-[1px] w-full bg-[#8C92B3] opacity-45 tablet:hidden" /> */}
        </Row>
        <div className="tablet:hidden">
          <Row>
            <Col lg="12" className="tablet:hidden ml-6 pt-6 ">
              <h1 className="w-fit text-title text-[1.1rem] font-bold">
                {statuses[stateNum - 1].value}
              </h1>
              <p className="text-[.9rem] text-paragraph">
                {statuses[stateNum - 1].process}
              </p>
            </Col>
          </Row>
          <Row className="tablet:hidden mx-4">
            {products &&
              products.map((feedback) => <RoadMapFilter feedback={feedback} />)}
          </Row>
        </div>
      </Container>
      <Container className="hidden tablet:block">
        <Row>
          {statuses.map((item) => {
            console.log(item);
            return(<Col lg="4" xs="4" className="mt-3 hidden tablet:block">
              <h1 className="w-fit text-title text-[1.1rem] font-bold">
                {item.name}
              </h1>
              <p className="text-[.9rem] text-paragraph">{item.process}</p>
            </Col>)
              })}
        </Row>
        <Row>
        
          <Col lg='4' sm='4'>
            {
              planned && planned.map((item)=>(
                <>
                <RoadMapFilter feedback={item} />
                </>
              ))
            }
          </Col>
          <Col lg='4' sm='4'>
            {
              progress && progress.map((item)=>(
                <>
                <RoadMapFilter feedback={item} />
                </>
              ))
            }
          </Col>
          <Col lg='4' sm='4'>
            {
              live && live.map((item)=>(
                <RoadMapFilter feedback={item} />
              ))
            }
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default RoadMap;
