import { useLayoutEffect, useRef, useState } from "react";

/*
	useLayoutEffect Hook
	====================

	Simple meaning:
	useLayoutEffect runs after React updates the DOM, but before the browser
	paints the screen. This gives us a chance to read or change the layout
	before the user sees it.

	The usual order is:

		1. React renders the component.
		2. React updates the DOM.
		3. useLayoutEffect runs.
		4. The browser paints the screen.
		5. useEffect runs.

	Use it mainly for visual work, such as:
		- measuring an element with getBoundingClientRect()
		- positioning a tooltip or popup
		- setting scroll position
		- preventing a visible layout flicker

	Important:
	useLayoutEffect blocks painting while it runs, so keep it short. For API
	calls, timers, subscriptions, and other non-visual work, use useEffect.
*/

function UseLayoutEffect() {
	const [boxWidth, setBoxWidth] = useState(240);
	const [measuredWidth, setMeasuredWidth] = useState(0);
	const boxRef = useRef(null);

	useLayoutEffect(() => {
		// The DOM has been updated, so it is safe to measure the element now.
		const width = boxRef.current.getBoundingClientRect().width;
		setMeasuredWidth(Math.round(width));
	}, [boxWidth]);

	return (
		<section>
			<h2>useLayoutEffect</h2>

			<button onClick={() => setBoxWidth((width) => width + 40)}>
				Make box wider
			</button>

			<div
				ref={boxRef}
				style={{
					width: `${boxWidth}px`,
					padding: "16px",
					marginTop: "12px",
					backgroundColor: "lightblue",
				}}
			>
				Measured width: {measuredWidth}px
			</div>
		</section>
	);
}

export default UseLayoutEffect;

/*
	Basic syntax:

		useLayoutEffect(() => {
			 Read or update the DOM before the browser paints.

			return () => {
				 Optional cleanup before the effect runs again or on unmount.
			};
		}, [dependency]);

	Dependency array:
		[]              Runs after the first DOM update only.
		[value]         Runs after the first update and when value changes.
		No array         Runs after every render. Usually avoid this.

	useEffect vs useLayoutEffect:

		useEffect:
			React updates DOM -> browser paints -> effect runs
			Best for fetching data, timers, logging, and subscriptions.

		useLayoutEffect:
			React updates DOM -> layout effect runs -> browser paints
			Best when measuring or changing visible layout immediately.

	Recall sentence:
		useLayoutEffect is useEffect for layout work that must happen before
		the user sees the updated screen.

	Small comparison:

		// The user may briefly see the old position.
		useEffect(() => {
			element.style.left = "100px";
		}, []);

		// The position is changed before the browser paints.
		useLayoutEffect(() => {
			element.style.left = "100px";
		}, []);
*/
