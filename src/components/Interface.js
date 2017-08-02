import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Button, Icon, Progress } from 'antd';
import ReactResizeDetector from 'react-resize-detector';
import scrollTo from 'scroll-to';

import responsive from '../assets/responsive.png';
import customer from '../assets/customer.png';
import mobile from '../assets/mobile.png';
import html from '../assets/html.png';
import sxo from '../assets/sxo.png';
import web from '../assets/web.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import linkedlin from '../assets/linkedlin.png';
import enterprise from '../assets/icon-enterprise.png';

const { Header, Content, Footer } = Layout;

class Interface extends Component {
  constructor(props) {
  super(props);
  this.state = {
    number : 0,
    rowVisible: false,
    menuVisible: false,
    menuHeight: 0,
    start : true,
  }
};

  _onResize =(e)=>{
    this.setState({start: false});
    if(window.innerWidth < 1000 ) {
      this.setState({rowVisible: true});
    }else {
      this.setState({rowVisible: false});
      this.setState({menuVisible: false});
    }
  }

  handleClick=(e)=>{
    if(e.key === "1") {
      scrollTo(100, 100, {
      ease: 'out-bounce',
      duration: 700
      });
    } else if(e.key==="2") {
      scrollTo(100, 500, {
      ease: 'out-bounce',
      duration: 700
      });
    } else if(e.key==="3") {
      scrollTo(100, 2400, {
      ease: 'out-bounce',
      duration: 700
      });
    } else if(e.key==="4") {
      scrollTo(100, 3140, {
      ease: 'out-bounce',
      duration: 700
      });
    }

  }

  change=(e)=>{
    e.preventDefault();
    if(this.state.number === 0) {
      this.setState({number: 1});
    } else {
      this.setState({number: 0});
    }
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  }

  toFacebook=(e)=>{
  window.open("https://www.facebook.com");
  }

  render() {
    return (
      <div className="App">
      <Layout style={{ background: "#fff"}}>
      <div style={{background: "#e4e2fa", width: '100%',  height:'550px' }}>

      <Row justify="center" type="flex" style={{marginTop: '200px',}}>
        <Col span="24" style={{minHeight: '55px', fontSize: 36}}>
        <span style={{margin: 7, color: "#49a9ee"}}>
        KOI
        </span>
        <span style={{margin: 7, color: "#49a9ee"}}>
        JASS
        </span>
        <span style={{margin: 7, color: "white"}}>
        AMARE
        </span>
        <span style={{margin: 7, color: "white"}}>
        RAIKHA
        </span>
        </Col>

        <Col>
          <Button type="primary" size="large" onClick={this.change}>
          <Icon type="double-left" />
          </Button>
        </Col>

        <Col xs={{ offset: 15 }} md={{ offset: 20 }}  >
          <Button size="large" type="primary" onClick={this.change}>
          <Icon type="double-right" />
          </Button>
        </Col>

        <Col span="14" style={{minHeight: '50px'}}>
          <p style={{fontSize: 20}}>
          {this.state.number === 0 && <span style={{color: "white"}}>Lorem ipsum dolor sit amet</span>}
          {this.state.number === 1 && <span style={{color: "white"}}>Duis aute irure dolor in reprehenderit.</span>}
          </p>
        </Col>

        <Col span="24" style={{height: '50px', marginTop: '20px'}}>
          <p style={{fontSize: 15}}>
            <a onClick={this.toFacebook} style={{margin: "5px", color: "#49a9ee"}}>Facebook</a> <span style={{ color: "white"}}> |</span>  <a style={{margin: "10px", color: "#49a9ee"}}>Dribbble</a>  <span style={{ color: "white"}}> |</span>  <a style={{margin: "10px", color: "#49a9ee"}}>Behance</a>
          </p>
        </Col>
        </Row>

        <Content style={{ marginTop: 64 }}>

          <div style={{  minHeight: 780 }}>

          <Row justify="center" type="flex" style={{marginTop: '200px',}}>
          <Col span="24" style={{minHeight: '120px'}}>
            <h1 className="fancy2a" style={{fontSize: 35,}}>
             <span style={{color: "#5a5a5a",}}>ABOUT US</span>
            </h1>

          </Col>

          <Col span="24" style={{minHeight: '120px'}} >
          <p style={{ fontSize: 25, fontFamily: "tahoma" }}>
           <span style={{color: "#5a5a5a", height: "50px"}}>We are biggest travel & tours company from Bangladesh </span>
          </p>
          </Col>

          <Col xs={{ span: 18 }} md={{ span: 8  }} className="border">

              <Col >

              <div className="logo1" style={{marginTop: 20}} />
              </Col>

              <Col>
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              Design & Development
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'justify', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.
              </p>
              </Col>

          </Col>

          <Col xs={{ span: 18 }} md={{ span: 8  }} className="border">
              <Col  >
              <div className="logo2" style={{marginTop: 20}} />
              </Col>

              <Col >
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              24/hrs Customer Care
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'justify', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              </Col>

          </Col>

          <Col xs={{ span: 18 }} md={{ span: 8  }} className="border">
              <Col >
              <div className="logo3" style={{marginTop: 20}} />
              </Col>

              <Col>
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              Free Template
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'justify', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto', minHeight: 50 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, dolor  consectetur.
              </p>
              </Col>

          </Col>
          </Row>

            <Row justify="center" type="flex" style={{background: "#e4e2fa", paddingTop:50, marginTop: '170px',}}>
              <Col span="24" style={{minHeight: '120px'}}>
                <h1 className="fancy2a" style={{fontSize: 35,}}>
                 <span style={{color: "#5a5a5a",}}>OUR SKILL</span>
                </h1>
              </Col>
            </Row>

          <Row justify="left" type="flex" style={{background: "#e4e2fa", paddingTop: 35, paddingBottom: 40}}>

          <Col xs={{ span: 16, offset: 4 }} md={{ span: 10, offset: 1  }} style={{height: "130px",}}>
          <h1 style={{fontSize: 25,}}>
           <span style={{color: "#5a5a5a",fontFamily:"tahoma", float: "left"}}>UX RESEARCH</span>
          </h1>
            <Progress percent={50} showInfo={false} status="active" />
          </Col>

          <Col xs={{ span: 16, offset: 4 }} md={{ span: 10, offset: 3, pull: 1   }} style={{height: "130px",}}>
          <h1 style={{fontSize: 25,}}>
           <span style={{color: "#5a5a5a",fontFamily:"tahoma", float: "left"}}>Web Development</span>
          </h1>
            <Progress percent={50} showInfo={false} status="active" />
          </Col>

          <Col xs={{ span: 16, offset: 4 }} md={{ span: 10, offset: 1  }} style={{height: "130px",}}>
          <h1 style={{fontSize: 25,}}>
           <span style={{color: "#5a5a5a",fontFamily:"tahoma", float: "left"}}>Mobile App Development</span>
          </h1>
            <Progress percent={50} showInfo={false} status="active" />
          </Col>

          <Col xs={{ span: 16, offset: 4, }} md={{ span: 10, offset: 3, pull: 1  }} style={{height: "130px",}}>
          <h1 style={{fontSize: 25,}}>
           <span style={{color: "#5a5a5a",fontFamily:"tahoma", float: "left"}}>SXO</span>
          </h1>
            <Progress percent={50} showInfo={false} status="active" />
          </Col>
          </Row>

          <Row justify="center" type="flex" style={{marginTop: '200px', background: "#bfbfbf", padding: 80}}>
          <Col span="24" style={{minHeight: '120px'}}>
            <h1 style={{fontSize: 30,}}>
             <span style={{color: "white", textAlign: "center"}}>`` Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ``</span>
            </h1>
          </Col>
          </Row>

          <Row justify="center" type="flex" style={{marginTop: '170px',}}>
          <Col span="24" style={{minHeight: '120px'}}>
            <h1 className="fancy2a" style={{fontSize: 35,}}>
             <span style={{color: "#5a5a5a",}}>OUR SERVICE</span>
            </h1>
          </Col>

          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset:1  }} className="hover">
              <Col style={{marginTop: 20}} >
              <p className="flotte">
               <img width="50" height="50" alt="manifest" src={customer} />
              </p>
              <p style={{fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              CUSTOMER SUPPORT
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'center', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.
              </p>
              </Col>

          </Col>

          <Col xs={{ span: 10, offset: 2 }} md={{ span: 6, offset: 2  }} className="hover">
              <Col style={{marginTop: 20}} >
              <p className="flotte">
               <img width="50" height="50" alt="responsive" src={responsive} />
              </p>
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              RESPONSIVE
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'center', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.
              </p>
              </Col>

          </Col>

          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 2  }} className="hover">
              <Col style={{marginTop: 20}} >
              <p className="flotte">
               <img width="50" height="50" alt="manifest" src={web} />
              </p>
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              WEB DEVELOPMENT
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'center', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.
              </p>
              </Col>

          </Col>

          <Col xs={{ span: 10, offset: 2 }} md={{ span: 6, offset: 1 }} className="hover">
              <Col style={{marginTop: 20}} >
              <p className="flotte">
               <img width="50" height="50" alt="manifest" src={html} />
              </p>
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              HTML5 & CSS3
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'center', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.
              </p>
              </Col>

          </Col>

          <Col xs={{ span: 10, offset:1 }} md={{ span: 6, offset: 2 }} className="hover">
              <Col style={{marginTop: 20}} >
              <p className="flotte">
               <img width="50" height="50" alt="manifest" src={mobile} />
              </p>
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              MOBILE APP DESIGN
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'center', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.
              </p>
              </Col>

          </Col>

          <Col xs={{ span: 10, offset: 2 }} md={{ span: 6, offset: 2 }} className="hover">
              <Col style={{marginTop: 20}} >
              <p className="flotte">
               <img width="50" height="50" alt="manifest" src={sxo} />
              </p>
              <p style={{ fontSize: 22, fontFamily: "tahoma", fontWeight: 'bold' }}>
              SXO
              </p>
              </Col>

              <Col>
              <p style={{ fontSize: 20, textAlign: 'center', fontFamily: "tahoma", padding: 20, minHeight: 120, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.
              </p>
              </Col>

          </Col>
          </Row>


          <Row justify="center" type="flex" style={{marginTop: 70, background: "#fbfbfb",}}>

          <Col span="24" style={{paddingTop:80, marginBottom: 100 }}>
            <h1 className="fancy2a" style={{fontSize: 35,}}>
             <span style={{color: "#5a5a5a",}}>OUR PORTFOLIO</span>
            </h1>
          </Col>



          <Col>
            <Menu
            style={{marginBottom: 5}}
            defaultSelectedKeys={['1']}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="1">
            <span style={{fontSize: 18, fontFamily: "sans-serif"}}>ALL</span>
            </Menu.Item>

            <Menu.Item key="2">
            <span style={{fontSize: 18, fontFamily: "sans-serif"}}>WEB DESIGN</span>
            </Menu.Item>

            <Menu.Item key="3">
            <span style={{fontSize: 18, fontFamily: "sans-serif"}}>RESEARCH</span>
            </Menu.Item>

            <Menu.Item key="4">
            <span style={{fontSize: 18, fontFamily: "sans-serif"}}>BRANDING</span>
            </Menu.Item>

            </Menu>
          </Col>
          </Row>

          <Row justify="center" type="flex" style={{background: "#fbfbfb", marginTop: '110px',}}>

          <Col xs={{ span: 16, offset: 0 }} md={{ span: 10, offset:0  }} style={{ marginTop: 25,minHeight: 200, background: "#e4e2fa",}}>

          </Col>

          <Col xs={{ span: 16, offset: 0 }} md={{ span: 10, offset:2  }} style={{marginTop: 25,minHeight: 200, background: "#e4e2fa",}}>

          </Col>

          <Col xs={{ span: 16, offset: 0 }} md={{ span: 10, offset:0  }} style={{marginTop: 25, minHeight: 200, background: "#e4e2fa",}}>

          </Col>

          <Col xs={{ span: 16, offset: 0 }} md={{ span: 10, offset:2  }} style={{marginTop: 25, minHeight: 200, background: "#e4e2fa",}}>

          </Col>

          <Col span="24" style={{minHeight: 200, background: "black", marginTop: 150}}>
          </Col>
          </Row>

          <Row justify="center" style={{background: "#fbfbfb", marginTop: '170px',}}>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset:2  }} style={{marginTop: 5, minHeight: 15, background: "#919191",}}>

          </Col>

          <Col xs={{ span: 9, offset: 3 }} md={{ span: 10, offset:2  }} style={{marginTop: 17, minHeight: 12, background: "#919191",}}>

          </Col>

          <Col xs={{ span: 18, offset: 2 }} md={{ span: 10, offset:2  }} style={{marginTop: 23, minHeight: 6, background: "#919191",}}>

          </Col>

          <Col xs={{ span: 14, offset: 1 }} md={{ span: 10, offset:1  }} style={{marginTop: 10, minHeight: 40, background: "#919191",}}>

          </Col>

          <Col xs={{ span: 22, offset: 0 }} md={{ span: 10, offset:2  }} style={{marginTop: 7, minHeight: 18, background: "#919191",}}>

          </Col>
          </Row>

        </div>
        </Content>

        <Footer style={{marginTop: '170px',background: "black", textAlign: 'center', padding: 100 }}>

        <hr />
        <Row justify="center" type="flex" style={{ marginTop: 140 }}>
        <Col xs={{ span: 4 }} md={{ span: 2 }}>
        <img width="45" height="85" alt="enterprise" src={enterprise} />
        </Col>

        <Col xs={{ span: 5 }} md={{ span: 2 }}>
        <p>
        <span style={{fontSize: 30, color: "#108ee9",}}>
        KOI
        </span>

        <span style={{fontSize: 30, color: "white", margin: 10}}>
        JASS
        </span>
        </p>
        </Col>
        </Row>

        <Row justify="center" type="flex" style={{ marginTop: 40 }}>
          <Col xs={{ span: 4 }} md={{ span: 2 }}>
          <a href="#">
          <img className="opacity" width="45" height="85" alt="google" src={google} />
          </a>
          </Col>

          <Col xs={{ span: 4 }} md={{ span: 2 }}>
          <a href="#">
          <img className="opacity" width="45" height="85" alt="facebook" src={facebook} />
          </a>
          </Col>

          <Col xs={{ span: 4 }} md={{ span: 2 }}>
          <a href="#">
          <img className="opacity" width="45" height="85" alt="twitter" src={twitter} />
          </a>
          </Col>

          <Col xs={{ span: 4 }} md={{ span: 2 }}>
          <a href="#">
          <img className="opacity" width="45" height="85" alt="linkedlin" src={linkedlin} />
          </a>
          </Col>

          <Col span="24" style={{marginTop: 40}}>

          <span style={{fontSize: 18, color: "white"}}>
          Front-End Test <span style={{color: "#108ee9"}}>by Me </span> ©2016 Created using Ant design
          </span>
          </Col>
        </Row>

        </Footer>

      <Header className="top" style={{background: "#404040", position: 'fixed', width: '100%', height: '85px'}}>
       <Row type="flex" justify="end" align="middle" style={{background: "#404040",}}>
          <div className="logo" />
          <p className="name" >
          <span style={{margin: 4, color: "#49a9ee"}}>
          KOI
          </span>
          <span style={{color: "white"}}>
          JASS
          </span>
          </p>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '85px' }}
            onClick={this.handleClick}
          >
            {!(this.state.start && window.innerWidth < 1000 || this.state.rowVisible) && <Menu.Item key="1"><Icon type="home" />HOME</Menu.Item>}
            {!(this.state.start && window.innerWidth < 1000 || this.state.rowVisible) && <Menu.Item key="2"><Icon type="question-circle" />ABOUT US</Menu.Item>}
            {!(this.state.start && window.innerWidth < 1000 || this.state.rowVisible) && <Menu.Item key="3"><Icon type="hdd" />SERVICE</Menu.Item>}
            {!(this.state.start && window.innerWidth < 1000 || this.state.rowVisible) && <Menu.Item key="4"><Icon type="desktop" />PORTFOLIO</Menu.Item>}
            {!(this.state.start && window.innerWidth < 1000 || this.state.rowVisible) && <Menu.Item key="5"><Icon type="tablet" />CONTACT</Menu.Item>}
            {(this.state.start && window.innerWidth < 1000 || this.state.rowVisible) && <Menu.Item key="6"> <a href="#" onClick={this.toggleMenu}><Icon type={this.state.menuVisible ? 'menu-unfold' : 'menu-fold'} /></a></Menu.Item>}
          </Menu>
          </Row>
          {this.state.menuVisible && <Row justify="right" style={{background: "#404040", marginBottom: 24, width: 180, float: "right"}}>
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={false}
              onClick={this.handleClick}
            >
              <Menu.Item key="1">
                <Icon type="home" />
                <span>HOME</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="question-circle" />
                <span>ABOUT US</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="hdd" />
                <span>SERVICE</span>
              </Menu.Item>

              <Menu.Item key="4">
                <Icon type="desktop" />
                <span>PORTFOLIO</span>
              </Menu.Item>

              <Menu.Item key="5">
                <Icon type="tablet" />
                <span>CONTACT</span>
              </Menu.Item>
            </Menu>
          </Row>}
          <ReactResizeDetector handleWidth handleHeight onResize={this._onResize} />
        </Header>
        </div>

      </Layout>
      </div>
    );
  }
}

export default Interface;
