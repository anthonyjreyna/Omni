
import HeaderComponent from "../header";
import FooterComponent from "../footer";
import PropTypes from "prop-types";


export const MainLayout = ({ children }) => {


    return (
        <div>
            <HeaderComponent/>
            {children}
            <FooterComponent/>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
};