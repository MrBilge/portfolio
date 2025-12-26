export function ElectricWrapper({ children }  : any) {
  return (
    <div className="card-container" data-effect="↖️">
      <div className="inner-container">
        <div className="border-outer">
          <div className="main-card" />
        </div>

        <div className="glow-layer-1" />
        <div className="glow-layer-2" />
      </div>

      <div className="overlay-1" />
      <div className="overlay-2" />
      <div className="background-glow" />

      <div className="content-container">
        {children}
      </div>
    </div>
  );
}