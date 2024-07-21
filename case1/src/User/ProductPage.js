import React from 'react';
import './ProductPage.css';
import axios from "axios";
import imageBanner from "../img/bannerSanPham.png"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import SearchPro from './SearchPro';
function ProductPage() {
    let [cxt, setCXT] = useContext(MyContext);
    let [list, setList] = useState([]);
    let [listCate, setListCate] = useState([]);
    let navigate = useNavigate();
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();

    // up = () => {
    //     let rs = [...this.state.list];
    //     rs.sort((a,b) => a.price - b.price);
    //     this.setState({ListSort:rs});
    // }



    useEffect(() => {
        axios.get("http://localhost:3000/products").then((res) => {
            setList(res.data);
            let list = res.data.filter(e => e.name.toLowerCase().includes(cxt.key));
            setList(list);
        });
        //    getList();
    }, [cxt]);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then((res) => {
            if (selected == 0) {
                setList(res.data);

            } else {
                setList(res.data.filter(e => e.category.id == selected))
            }
        });
    }, [selected]);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then((res) => {
            setList(res.data)
        });
    }, []);
    useEffect(() => {
        axios.get("http://localhost:3000/categories/").then((res) => {
            setCates(res.data);
        });
    }, []);
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
                                    <a className="nav-link text-reset redColor" href="sanPham.html" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Sản Phẩm
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </a>
                                    <div className="dropdown-menu bg_dark menuCon">
                                        <a className="dropdown-item " href="sanPham.html">Adidas</a>
                                        <a className="dropdown-item" href="sanPham.html">Nike</a>
                                        <a className="dropdown-item" href="sanPham.html">Converse</a>
                                        <a className="dropdown-item" href="sanPham.html">Puma</a>
                                        <a className="dropdown-item" href="sanPham.html">MLB</a>
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
                                    {/* <input type="text" placeholder="Tìm kiếm sản phẩm" /> */}
                                    <SearchPro></SearchPro>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="taiKhoan">
                                <Link to={"/homepages/login"}>
                                    <i className="fa-solid fa-user"></i>
                                    <div className='userName'>
                                        <h6 style={{ color: "white" }}>{cxt.user && cxt.user.username}</h6>
                                    </div>
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

            <div className="slideshowTinTuc">
                <div className="overlay2"></div>
                <img src={imageBanner} alt="" />
                <div className="content">
                    <h2>Sản Phẩm</h2>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <aside className="locTimKiemSP">
                            <div className="sapXep">
                                <label for=""><b>SẮP XẾP</b></label><br />
                                {/* <input type="radio" name="xepGia" value="1" />Mặc định<br /> */}
                                <input type="radio" name="xepGia" value="2" onClick={() => {
                                    axios.get("http://localhost:3000/products").then((res) => {
                                        setList(res.data);
                                        let listmoi = res.data.sort((a, b) => a.price - b.price);
                                        setList(listmoi);
                                    });                                   
                                }} />Giá từ thấp đến cao <br />
                                <input type="radio" name="xepGia" value="3" onClick={() => {
                                    axios.get("http://localhost:3000/products").then((res) => {
                                        setList(res.data);
                                        let listmoi = res.data.sort((a, b) => b.price - a.price);
                                        setList(listmoi);
                                    });                                   
                                }} />Giá từ cao đến thấp
                            </div>

                            <div className="sapXep">
                                <label for=""><b>LOẠI</b></label><br />
                                <select onChange={(e) => {
                                    setSelected(e.target.value);
                                }}>
                                    <option value={0}>Tất cả</option>
                                    {cates.map(e => (<option value={e.id}>{e.name}</option>))}
                                </select><br />
                                {/* <input type="checkbox" name="Loai" value="1" />Giày bóng rổ<br />
                                <input type="checkbox" name="Loai" value="2" />Giày chạy bộ <br />
                                <input type="checkbox" name="Loai" value="3" />Giày nam <br />
                                <input type="checkbox" name="Loai" value="4" />Giày nữ <br />
                                <input type="checkbox" name="Loai" value="5" />Giày thời trang */}
                            </div>

                            <div className="sapXep">
                                <label for=""><b>THƯƠNG HIỆU</b></label><br />
                                <input type="radio" name="thuongHieu" value="1" checked />Adidas<br />
                                <input type="radio" name="thuongHieu" value="2" />Nike
                            </div>

                            <div className="sapXep">
                                <label for=""><b>KÍCH THƯỚC</b></label><br />
                                <ul className="danhSach">
                                    <li>
                                        <button className="size">35</button>
                                    </li>
                                    <li>
                                        <button className="size">36</button>
                                    </li>
                                    <li>
                                        <button className="size">37</button>
                                    </li>
                                    <li>
                                        <button className="size">38</button>
                                    </li>
                                    <li>
                                        <button className="size">39</button>
                                    </li>
                                    <li>
                                        <button className="size">40</button>
                                    </li>
                                    <li>
                                        <button className="size">41</button>
                                    </li>
                                    <li>
                                        <button className="size">42</button>
                                    </li>
                                    <li>
                                        <button className="size">43</button>
                                    </li>
                                    <li>
                                        <button className="size">44</button>
                                    </li>
                                    <li>
                                        <button className="size">45</button>
                                    </li>
                                    <li>
                                        <button className="size">46</button>
                                    </li>
                                </ul>
                            </div>

                            <div className="sapXep">
                                <label for=""><b>MÀU SẮC</b></label><br />
                                <ul className="danhSach">
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: 'white', border: "1px solid #E7E7E7" }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: 'black' }}></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#F1C40F' }}></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#9B59B6' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#E74C3C' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#2ECC71' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#FF00CC' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#E67E22' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#bcbbc0' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#0082be' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#88c9dd' }} ></div>
                                    </li>
                                    <li>
                                        <div className="mauSac" style={{ backgroundColor: '#e67d9e' }} ></div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sapXep">
                                <label for=""><b>GIÁ SẢN PHẨM</b></label><br />
                                <input type="radio" name="xepTheoGia" value="1" checked />Giá dưới 1.000.000đ<br />
                                <input type="radio" name="xepTheoGia" value="2" />1.000.000đ - 3.000.000đ <br />
                                <input type="radio" name="xepTheoGia" value="3" />3.000.000đ - 5.000.000đ  <br />
                                <input type="radio" name="xepTheoGia" value="4" />5.000.000đ - 10.000.000đ  <br />
                                <input type="radio" name="xepTheoGia" value="5" />Giá trên 10.000.000đ
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            {
                                list.map(e => (
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                        <Link to={"/homepages/detailPro/" + e.id} style={{ textDecoration: "none" }}>
                                            <div className="sanPham">
                                                <div className="overlay3"></div>
                                                <div className="iconMuaHang">
                                                    <i className="fa-solid fa-cart-plus"></i>
                                                </div>
                                                <a href="#">
                                                    {<img src={e.images[0]}></img>}
                                                </a>
                                                <a href="#">
                                                    <h2>{e.name}</h2>
                                                </a>
                                                {/* <div className="gia">
                                                <p className="giaCu">4.500.000đ</p>
                                                <p className="giaMoi">4.000.000đ</p>
                                            </div> */}
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }



                            {/* <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/sp1.jpg" alt="" />
                                    </a>
                                    <h2>Adidas</h2>
                                    <a href="">
                                        Giày Ultraboost 4.0 DNA
                                    </a>
                                    <div className="gia">
                                        <p className="giaCu">4.500.000đ</p>
                                        <p className="giaMoi">4.000.000đ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/sp2.jpg" alt="" />
                                    </a>
                                    <h2>Adidas</h2>
                                    <a href="">
                                        Giày Adidas Ultraboost DNA SEA CITY
                                    </a>
                                    <div className="gia">
                                        <p className="giaCu">5.700.000đ</p>
                                        <p className="giaMoi">5.000.000đ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/sp3.jpg" alt="" />
                                    </a>
                                    <h2>Adidas</h2>
                                    <a href="">
                                        Giày Adidas Ultraboost DNA X LEGO
                                    </a>
                                    <div className="gia">
                                        <p className="giaCu">3.500.000đ</p>
                                        <p className="giaMoi">2.200.000đ</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/sp4.jpg" alt="" />
                                    </a>
                                    <h2>Adidas</h2>
                                    <a href="">
                                        GIÀY Adidas Ultraboost DNA X LEGO
                                    </a>
                                    <div className="gia">
                                        <p className="giaCu">6.600.000đ</p>
                                        <p className="giaMoi">5.550.000đ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/sp5.jpg" alt="" />
                                    </a>
                                    <h2>Adidas</h2>
                                    <a href="">
                                        Giày Stan Smith
                                    </a>
                                    <div className="gia">
                                        <p className="giaCu">3.700.000đ</p>
                                        <p className="giaMoi">2.500.000đ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/sp6.jpg" alt="" />
                                    </a>
                                    <h2>Adidas</h2>
                                    <a href="">
                                        Giày ULTRABOOST 21
                                    </a>
                                    <div className="gia">
                                        <p className="giaCu">2.700.000đ</p>
                                        <p className="giaMoi">2.200.000đ</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/giaymoi1.jpg" alt="" />
                                    </a>
                                    <h2>Nike</h2>
                                    <a href="">
                                        Nike Air Force 1 07 Trắng
                                    </a>
                                    <div className="gia">

                                        <p className="giaMoi">5.000.000đ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/giaymoi2.jpg" alt="" />
                                    </a>
                                    <h2>Nike</h2>
                                    <a href="">
                                        Nike Air Force 47 Trắng Tím
                                    </a>
                                    <div className="gia">

                                        <p className="giaMoi">2.000.000đ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="sanPham">
                                    <div className="overlay3"></div>
                                    <div className="iconMuaHang">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </div>
                                    <a href="#">
                                        <img src="img/giaymoi4.jpg" alt="" />
                                    </a>
                                    <h2>Nike</h2>
                                    <a href="">
                                        Nike Air Force 02 Vàng Trắng
                                    </a>
                                    <div className="gia">

                                        <p className="giaMoi">6.666.000đ</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="nutChuyenTrang">
                            <div className="so1">1</div>
                            <div className="so2">2</div>
                            <div className="iconChuyenTrang">
                                <i className="fa-solid fa-angles-right"></i>
                            </div>
                        </div> */}
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
                        <hr></hr>
                        <div className="banQuyen text-center">
                            <h5>Copyright © 2023 by URBANSHOES</h5>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}


export default ProductPage;