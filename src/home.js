
import React from 'react';
import './Home.css';
import './changepassword';
import './weatherdata';
import './myprofile';
import logouticon from './images/logout.jpg';
import { callApi, errorResponse, getSession, setSession } from './main';
import MenuIcon from '@mui/icons-material/Menu';


const HS1 = { paddingLeft: "5px", fontWeight: "bold" };
const HS2 = { float: "right", paddingRight: "5px", cursor: "pointer" };
const HS3 = { float: "right", height: "16px", marginTop: "6px", cursor: "pointer" };
const HS4 = { float: "right", paddingRight: "10px" };

export function loadMenu(res) {
  var data = JSON.parse(res);
  var menuitems = "";
  for (var x in data) {
    menuitems += `<li>
                    <label id='${data[x].mid}L' >${data[x].mtitle}</label>
                    <div id='${data[x].mid}' class='smenu'></div>
                  </li>`;
  }
  var mlist = document.getElementById('mlist');
  mlist.innerHTML = menuitems;

  for (x in data) {
    document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
  }
}

export function showSMenu(mid) {
  var surl = "https://server-alpha-henna.vercel.app/home/menus";
  var ipdata = JSON.stringify({
    mid: mid
  });
  callApi("POST", surl, ipdata, loadSMenu, errorResponse);

  var smenu = document.getElementById(mid);
  if (smenu.style.display === "block")
    smenu.style.display = "none";
  else
    smenu.style.display = "block";
}

export function loadSMenu(res) {
  var data = JSON.parse(res);
  var smenuitems = "";
  for (var x in data) {
    smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
  }
  var smenu = document.getElementById(`${data[x].mid}`);
  smenu.innerHTML = smenuitems;

  for (x in data) {
    document.getElementById(`${data[x].smid}`).addEventListener("click", loadModule.bind(null, data[x].smid));
  }
}

export function loadModule(smid) {
  var titlebar = document.getElementById('titlebar');
  var module = document.getElementById('module');
  switch (smid) {
    case "M10102":
      module.src = "/changepassword";
      titlebar.innerText = "Change Password";
      break;
    case "M10101":
      module.src = "/myprofile";
      titlebar.innerText = "MyProfile";
      break;
    case "M00101":
      module.src = "/weatherdata";
      titlebar.innerText = "Dashboard";
      break;
    case "M00102":
      module.src = "/weathergraph";
      titlebar.innerText = "Weathergraph";
      break;
    default:
      module.src = "";
      titlebar.innerText = "";
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.sid = getSession("sid");
    if (this.sid === "")
      window.location.replace("/");

    var url = "https://server-alpha-henna.vercel.app/home/uname";
    var data = JSON.stringify({
      emailid: this.sid
    });
    callApi("POST", url, data, this.loadUname, errorResponse);

    url = "https://server-alpha-henna.vercel.app/home/menu";
    callApi("POST", url, "", loadMenu, errorResponse);
  }
  

  loadUname(res) {
    var data = JSON.parse(res);
    var HL1 = document.getElementById("HL1");
    HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
  }

  logout() {
    setSession("sid", "", -1);
    window.location.replace("/");
  }

  render() {
    return (
      <div className='full-height'>
        <div className='header'>
          <label style={HS1}>Weather Forecast Application </label>
          <label style={HS2} onClick={this.logout}>Logout</label>
          <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
          <label id='HL1' style={HS4}></label>
        </div>
        <div className='content'>
          <div className='menubar'>
            <div className='menuheader'>
              <label style={{ color: 'black' }}><MenuIcon />MENU </label>
            </div>
            <div className='menu'>
              <nav><ul id='mlist' className='mlist'></ul></nav>
            </div>
          </div>
          <div className='outlet'>
            <div id='titlebar'></div>
            <iframe id='module' src=""></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

