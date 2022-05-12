import React, { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="to-top-btn">
      {showBtn && (
        <i
          className="bi bi-arrow-bar-up icon-position icon-style text-center"
          onClick={goToTop}
          onKeyDown={goToTop}
          aria-hidden="true"
        ></i>
      )}
    </div>
  )
}

export default ScrollToTop
