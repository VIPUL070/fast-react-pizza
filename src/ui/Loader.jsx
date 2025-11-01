function Loader() {
  return (
    //strch the entire vw tblr=>inset-0 , bg-color-amount/opacity
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-xs">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
