import * as React from "react";

/**
 * React component that renders a person icon filled with the current color. Taken from ReactIcons
 * @param {Object} props - The props object containing any additional props to be passed to the SVG element.
 * @return {JSX.Element} A React JSX element that renders the person icon.
 */
function BsPersonFill(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>;
}

export default BsPersonFill;