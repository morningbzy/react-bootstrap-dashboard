import Scrollspy from "react-scrollspy";
import ScrollSpyAnchor from "./ScrollSpyAnchor";

import './ScrollSpy.scss';

let ScrollSpy = Scrollspy;
ScrollSpy.Anchor = ScrollSpyAnchor;

export default ScrollSpy;
