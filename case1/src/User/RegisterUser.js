import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import imageBanner from "../img/BannerLogin3.png"
import { MyContext } from "../MyContext";
export default function RegisterUser() {
    let navigate = useNavigate();
    let [data, setData] = useState({ name: '', username: '', password: '', dob: '' });
    let [cxt, setCXT] = useContext(MyContext);
    return (
        <>

            <header>
                <div className="container p-0 headerCha">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg_dark padding_tablet">
                        <a className="navbar-brand" href="#">
                            <img src="img/logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler margin" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse block-menu" id="navbarSupportedContent">
                            {/* <!-- <div className="mr-auto"></div> --> */}
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link  text-reset " href="WebGiay.html">Trang Chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-reset" href="#">Giới Thiệu</a>
                                </li>
                                <li className="nav-item dropdown hoverMenu">
                                    <a className="nav-link text-reset redColor" href="http://localhost:3001/homepages" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Sản Phẩm
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </a>
                                    <div className="dropdown-menu bg_dark menuCon">
                                        <a className="dropdown-item " href="http://localhost:3001/homepages">Adidas</a>
                                        <a className="dropdown-item" href="http://localhost:3001/homepages">Nike</a>
                                        <a className="dropdown-item" href="http://localhost:3001/homepages">Converse</a>
                                        <a className="dropdown-item" href="http://localhost:3001/homepages">Puma</a>
                                        <a className="dropdown-item" href="http://localhost:3001/homepages">MLB</a>
                                    </div>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-reset" href="#">Tin Tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-reset" href="#">Liên Hệ</a>
                                </li>

                            </ul>
                        </div>
                        <div className="d-flex header-right marginLeft a">
                            <div className="timKiem">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <div className="timKiemChiTiet">
                                    <input type="text" placeholder="Tìm kiếm sản phẩm" />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="taiKhoan">
                                <Link to={"/homepages/login"}>
                                    <i className="fa-solid fa-user"></i>
                                    {/* <div className='userName'>
                                        <h6 style={{ color: "white" }}>{cxt.user && cxt.user.username}</h6>
                                    </div> */}
                                </Link>
                            </div>
                            <div className="gioHang">
                                <i className="fa-solid fa-cart-shopping">
                                    <div className="ThongBaoGioHang">
                                        <div className="headerOf_Notify2">
                                            <h3>Sản phẩm mới thêm</h3>
                                        </div>
                                        <div className="sanPhamThongBao2">
                                            <div className="hinh2">
                                                <img src="img/giaymoi2.jpg" alt="" />
                                            </div>
                                            <div className="text2">
                                                <h4 className="tieuDe2">Giày sneaker cổ cao</h4>
                                            </div>
                                            <div className="gia">
                                                <p>135.000 VNĐ</p>
                                            </div>
                                        </div>

                                        <div className="sanPhamThongBao2">
                                            <div className="hinh2">
                                                <img src="img/giaymoi5.jpg" alt="" />
                                            </div>
                                            <div className="text2">
                                                <h4 className="tieuDe2">Giày adidas thể thao</h4>
                                            </div>
                                            <div className="gia">
                                                <p>125.000 VNĐ</p>
                                            </div>
                                        </div>

                                        <div className="sanPhamThongBao2">
                                            <div className="hinh2">
                                                <img src="img/giaymoi8.jpg" alt="" />
                                            </div>
                                            <div className="text2">
                                                <h4 className="tieuDe2">Dép puma cổ điển</h4>
                                            </div>
                                            <div className="gia">
                                                <p>350.000 VNĐ</p>
                                            </div>
                                        </div>

                                        <div className="sanPhamThongBao2">
                                            <div className="hinh2">
                                                <img src="img/giaymoi7.jpg" alt="" />
                                            </div>
                                            <div className="text2">
                                                <h4 className="tieuDe2">Giày nike cổ cao</h4>
                                            </div>
                                            <div className="gia">
                                                <p>450.000 VNĐ</p>
                                            </div>
                                        </div>
                                        <div className="buttonXemALL2">
                                            <a href="ThanhToan.html" className="btnXemHet2">Xem Giỏ Hàng</a>
                                        </div>
                                    </div>
                                </i>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* <div className="slideshowTinTuc">     
        <div className="overlay2"></div>
        <img src="img/bannerSanPham.png" alt=""/>
        <div className="content">
            <h2>Sản Phẩm</h2>
        </div>
    </div> */}

            <div className="container-fluid">
                <div className="container-md dangNhap">
                    <div className="row">
                        <div className="col-md-6 phanHinhDangNhap">
                            <img src={imageBanner} alt="" />
                        </div>
                        <div className="col-md-6 phanDangNhap">
                            <h3>Đăng Kí Tài Khoản</h3>
                            <form action="#" className="was-validated">
                                <div className="mb-3 mt-3 formDN">
                                    <input type="text" className="form-control input" id="uname" placeholder="" name="name" onChange={(e) => {
                                        setData({ ...data, name: e.target.value })
                                    }} required />
                                    <label for="uname" className="form-label label">Tên</label>
                                    <i className="fa-solid fa-user"></i>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Vui lòng nhập tên</div>
                                </div>
                                <div className="mb-3 formDN">
                                    <input type="text" className="form-control input" id="pwd" placeholder="" name="username" required onChange={(e) => {
                                        setData({ ...data, username: e.target.value })
                                    }} />
                                    <label for="pwd" className="form-label label">Tài Khoản</label>
                                    <i className="fa-solid fa-lock"></i>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Vui lòng nhập tài khoản</div>
                                </div>
                                <div className="mb-3 formDN">
                                    <input type="text" className="form-control input" id="pwd" placeholder="" name="password" required onChange={(e) => {
                                        setData({ ...data, password: e.target.value })
                                    }} />
                                    <label for="pwd" className="form-label label">Mật Khẩu</label>
                                    <i className="fa-solid fa-lock"></i>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Vui lòng nhập mật khẩu</div>
                                </div>
                                <div className="mb-3 formDN">
                                    <input type="text" className="form-control input" id="pwd" placeholder="" name="dob" required onChange={(e) => {
                                        setData({ ...data, dob: e.target.value })
                                    }} />
                                    <label for="pwd" className="form-label label">Ngày sinh</label>
                                    <i className="fa-solid fa-lock"></i>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Vui lòng nhập ngày sinh theo dd/mm/yyyy</div>
                                </div>

                                <div class="form-check mb-3">
                                    <label class="form-check-label check" for="myCheck">
                                        <input class="form-check-input" type="checkbox" name="remember" id="myCheck" required /> Đồng ý với <a href="">Chính sách, quy định chung và Thông báo bảo mật cá nhân của Urban shoes</a>
                                    </label>
                                    <div class="invalid-feedback">Check this checkbox to continue.</div>
                                </div>
                                <button className="btn btn-primary" onClick={() => {
                                    axios.post("http://localhost:3000/users/register", data).then(x => {
                                        alert("Đăng kí thành công");
                                    }).catch(e => {
                                        alert("username hoặc password đã tồn tại !!!");
                                    })
                                }}>Đăng Kí</button>




                                <h5>Bạn đã có tài khoản? <a href="http://localhost:3001/homepages/login">Đăng nhập</a></h5>
                            </form>
                        </div>
                    </div>
                </div>

            </div>




            <footer className="background_Footer">
                <div className="overlayFooter"></div>
                <div className="container">
                    <div className="row noiDung">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 phan1">
                            <div className="d-flex">
                                <img src="img/logo.png" alt="" />
                                <h2>URBANSHOES</h2>
                            </div>
                            <div className="noiDungChiTiet">
                                <i className="fa-solid fa-location-dot m-2"></i>
                                <p>Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, TP Hà Nội</p>
                            </div>
                            <div className="noiDungChiTiet">
                                <i className="fa-solid fa-phone m-2"></i>
                                <p>19006750</p>
                            </div>
                            <div className="noiDungChiTiet">
                                <i className="fa-solid fa-headset m-2"></i>
                                <p>support@urbanshoes.vn</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 phan2">
                            <h4>Về chúng tôi</h4>
                            <a href="#"><p>Trang chủ</p></a>
                            <a href="#"><p>Giới thiệu</p></a>
                            <a href="#"><p>Sản Phẩm</p></a>
                            <a href="#"><p>Tin Tức</p></a>
                            <a href="#"><p>Liên hệ</p></a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 phan2">
                            <h4>Chính sách</h4>
                            <a href="#"><p>Trang chủ</p></a>
                            <a href="#"><p>Giới thiệu</p></a>
                            <a href="#"><p>Sản Phẩm</p></a>
                            <a href="#"><p>Tin Tức</p></a>
                            <a href="#"><p>Liên hệ</p></a>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-4 col-12 phan3">
                            <h4>Theo Dõi Chúng Tôi</h4>
                            <div className="iconSocial d-flex">
                                <div className="iconVuong">
                                    <i className="fa-brands fa-youtube"></i>
                                </div>
                                <div className="iconVuong">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className="iconVuong">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                            <h4 className="mr_top_20">Đăng kí để nhận tin</h4>
                            <div className="dangKiNhanThongTin d-flex">
                                <input type="email" placeholder="Nhập địa chỉ email" />
                                <button>Gửi</button>
                            </div>
                        </div>
                        <hr />
                        <div className="banQuyen text-center">
                            <h5>Copyright © 2023 by URBANSHOES</h5>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <label>Register</label>
            <Formik
                initialValues={{
                    name: "",
                    username: "",
                    password: "",
                    dob: ""
                }}
                onSubmit={(values) => {
                    axios.post("http://localhost:3000/users/register", values).then(x => {
                        alert("Đăng kí thành công");
                    }).catch(e => {
                        alert("username hoặc password đã tồn tại !!!");
                    })
                }}
            >
                <Form>
                    <Field name={"name"} placeholder={"name"} />
                    <Field name={"username"} placeholder={"username"} />
                    <Field name={"password"} placeholder={"password"} />
                    <Field name={"dob"} placeholder={"dob"} />
                    <button>Register</button>
                </Form>
            </Formik>

            <button onClick={() => {
                navigate("/homepages");
            }}>Login</button> */}
        </>
    )
}