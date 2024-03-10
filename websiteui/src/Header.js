function Header() {
  return (
    <div className="menu">
      <div className="logo">
        <img src="lezhin.png" alt="Lezhin Logo"></img>
      </div>
      <div className="menu-div">
        <ul>
          <button className="btn2">RECENT</button>
          <button className="btn2">SUBSCRIBED</button>
          <button className="btn2">DOWNLOADS</button>
          <button className="btn2">UNLOCKED</button>
          <button className="btn2">CREATORS</button>
          <button className="btn2">COMMENTS</button>
        </ul>
      </div>
      <div className="right-nav">
        <div className="payment"></div>
        <div className="search"></div>
      </div>
    </div>
  );
}

export default Header;
