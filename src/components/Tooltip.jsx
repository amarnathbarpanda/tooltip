import React, { useState } from 'react';

const Tooltip = ({ text, children, position = "bottom" }) => {

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div className="child" onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>{children}
        <span className={`text ${showTooltip ? 'show' : ''}`} id={position}>{text}</span>
      </div>
    </>
  )
}

export default Tooltip;