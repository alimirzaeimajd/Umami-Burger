// // <nav className="navbar navbar-expand-lg bg-light">
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="#">
// //       Navbar
// //     </a>
// //     <button
// //       className="navbar-toggler"
// //       type="button"
// //       data-bs-toggle="collapse"
// //       data-bs-target="#navbarSupportedContent"
// //       aria-controls="navbarSupportedContent"
// //       aria-expanded="false"
// //       aria-label="Toggle navigation"
// //     >
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#">
// //             Home
// //           </a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="#">
// //             Link
// //           </a>
// //         </li>
// //         <li className="nav-item dropdown">
// //           <a
// //             className="nav-link dropdown-toggle"
// //             href="#"
// //             role="button"
// //             data-bs-toggle="dropdown"
// //             aria-expanded="false"
// //           >
// //             Dropdown
// //           </a>
// //           <ul className="dropdown-menu">
// //             <li>
// //               <a className="dropdown-item" href="#">
// //                 Action
// //               </a>
// //             </li>
// //             <li>
// //               <a className="dropdown-item" href="#">
// //                 Another action
// //               </a>
// //             </li>
// //             <li>
// //               <hr className="dropdown-divider" />
// //             </li>
// //             <li>
// //               <a className="dropdown-item" href="#">
// //                 Something else here
// //               </a>
// //             </li>
// //           </ul>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link disabled">Disabled</a>
// //         </li>
// //       </ul>
// //       <form className="d-flex" role="search">
// //         <input
// //           className="form-control me-2"
// //           type="search"
// //           placeholder="Search"
// //           aria-label="Search"
// //         />
// //         <button className="btn btn-outline-success" type="submit">
// //           Search
// //         </button>
// //       </form>
// //     </div>
// //   </div>
// // </nav>
// import React, { useState } from "react";
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// } from "mdb-react-ui-kit";

// export default function App() {
//   const [showBasic, setShowBasic] = useState(false);

//   return (
//     <MDBNavbar expand="lg" light bgColor="light">
//       <MDBContainer fluid>
//         <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           <MDBIcon icon="bars" fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showBasic}>
//           <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current="page" href="#">
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href="#">Link</MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag="a" className="nav-link" role="button">
//                   Dropdown
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem link>Action</MDBDropdownItem>
//                   <MDBDropdownItem link>Another action</MDBDropdownItem>
//                   <MDBDropdownItem link>Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink
//                 disabled
//                 href="#"
//                 tabIndex={-1}
//                 aria-disabled="true"
//               >
//                 Disabled
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>

//           <form className="d-flex input-group w-auto">
//             <input
//               type="search"
//               className="form-control"
//               placeholder="Type query"
//               aria-label="Search"
//             />
//             <MDBBtn color="primary">Search</MDBBtn>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }
