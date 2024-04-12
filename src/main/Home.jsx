import React, { useState } from "react";
import { Carousel, Image, Table } from "react-bootstrap";
import { Container } from "semantic-ui-react";


function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <div className="wrapper">
                <Carousel activeIndex={index} onSelect={handleSelect} className='img_change'>
                    <Carousel.Item>
                        <Image src={require("../imgs/Carousel1.png")} className="d-block w-100" alt="..." style={{ borderRadius: '10px', }} height='100%' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require("../imgs/Carousel2.png")} className="d-block w-100" alt="..." style={{ borderRadius: '10px', }} height='100%' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={require("../imgs/Carousel3.png")} className="d-block w-100" alt="..." style={{ borderRadius: '10px', }} height='100%' />
                    </Carousel.Item>
                </Carousel>

                <hr />

                <div>
                    <h2 style={{ textAlign: "center" }}>人氣商品</h2>
                </div>

                <hr />

                <div>
                    <Table width="100%">
                        <tr>
                            <td width="70%"><Image src={require("../imgs/home_img1.png")} width="100%" height="100%" /></td>
                            <td className="home_font">
                                採用純粹植栽<br />
                                回饋於大自然<br />
                                最簡單、最新鮮
                            </td>
                        </tr>
                    </Table>
                    <Table width="100%">
                        <tr>
                            <td className="home_font">
                                不破壞環境<br />
                                有機種植<br />
                                不施灑農藥
                            </td>
                            <td width="70%"><Image src={require("../imgs/home_img2.png")} width="100%" height="100%" /></td>
                        </tr>
                    </Table>
                </div>
            </div>
        </Container>
    );
}

export default Home;