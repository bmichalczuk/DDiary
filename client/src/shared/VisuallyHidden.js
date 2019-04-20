import React from "react";
import styled from "styled-components";

const HiddenBlock = styled.div`
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important; 
    width: 1px !important; 
	overflow: hidden;
`;

const HiddenInline = styled.span`
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important; 
    width: 1px !important; 
	overflow: hidden;
`;


const VisuallyHidden = ({block, children}) => {
    const HiddenElement = block ? HiddenBlock : HiddenInline;
    return (
        <HiddenElement>
            {children}
        </HiddenElement>
    )
};

export default VisuallyHidden;