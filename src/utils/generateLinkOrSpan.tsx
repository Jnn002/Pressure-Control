import { Link } from "react-router-dom";

const generateLinkOrSpan = (to: string, text: string, condition = true) => {
    if (condition) {
        return <Link to={to}>{text}</Link>;
    }
    return <span>{text}</span>;
};

export default generateLinkOrSpan;
