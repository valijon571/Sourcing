import { useState } from "react";
const Faq = () => {
  const [open, setOpen] = useState(0);
  // isActive={open}
  return (
    <>
      <div className="faq">
        <h2>Часто задаваемые вопросы </h2>
        <div className="faq_on">
          <div className="accordion_on">
            <div>
              <button
                className={open === 1 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 1 ? 0 : 1)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 1
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>

                {open === 1 ? (
                  <div className="panel" style={{ display: "block" }}>
                    <p>fudbol</p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
            <br />
            <div>
              <button
                className={open === 2 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 2 ? 0 : 2)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 2
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>

                {open === 2 ? (
                  <div className="panel" style={{ display: "block" }}>
                    <p>olg'aa</p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
            <br />
            <div>
              <button
                className={open === 3 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 3 ? 0 : 3)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 3
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>

                {open === 3 ? (
                  <div className="fifa" style={{ display: "block" }}>
                    <p>nma gaplar</p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
            <br />
            <div>
              <button
                className={open === 4 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 4 ? 0 : 4)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 4
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>
                {open === 4 ? (
                  <div className="fifa" style={{ display: "block" }}>
                    <p>nma gaplar</p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
          </div>
          <br />
          <div className="accordion_on">
            <div>
              <button
                className={open === 5 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 5 ? 0 : 5)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 5
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>
                {open === 5 ? (
                  <div className="fifa" style={{ display: "block" }}>
                    <p>nma gaplar</p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
            <br />
            <div>
              <button
                className={open === 6 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 6 ? 0 : 6)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 6
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>
                {open === 6 ? (
                  <div className="fifa" style={{ display: "block" }}>
                    <p>nma gaplar</p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
            <br />
            <div>
              <button
                className={open === 7 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 7 ? 0 : 7)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 7
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>
                {open === 7 ? (
                  <div className="fifa" style={{ display: "block" }}>
                    <p>nma gaplar</p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
            <br />
            <div>
              <button
                className={open === 8 ? " accordion" : "accordion"}
                onClick={() => setOpen(open === 8 ? 0 : 8)}
                // style={{display: "flex", flexDirection: "row"}}
              >
                <div
                  className={
                    open === 8
                      ? "active accordion-btn__items"
                      : " accordion-btn__items"
                  }
                >
                  <b style={{ paddingTop: "2px" }}>
                    Как мне зарегестрироваться?
                  </b>
                  <img src="/image/frame.png" />
                </div>
                {open === 8 ? (
                  <div className="fifa" style={{ display: "block" }}>
                    <p>o'zgarish bo'ldi marxamant 
                      ko'rishingiz mumkun
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
