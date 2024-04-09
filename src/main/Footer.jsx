import { Image } from "react-bootstrap";
function Footer() {
    return (
        <footer>
            <div className="data">
                <div className="attention">
                    <div>
                        <ul>
                            <li><h1><Image src={require("../imgs/logo_footer.png")} width="50%" height="50%" /></h1></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>品牌概念</li>
                            <li>購物須知</li>
                            <li>退貨退款須知</li>
                            <li>常見問題</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>聯絡資訊</li>
                            <br />
                            <li>公司名XXXXXXXXX</li>
                            <li>電話XXXXXXXX</li>
                            <li>地址XXXXXXXXXXXX</li>
                            <br />
                            <li>營業時間</li>
                            <li>早上10點 ～ 下午6點</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <h6>
                        <b>
                            Copyright © 2023 尻哥資訊工作室. All Rights Reserved.　　
                            本站所有內容非商業用，僅練習用。
                        </b>
                    </h6>
                </div>
            </div>
        </footer>
    );
}

export default Footer;